const NodeHTTPError = require('node-http-error')
const { getMaintenances, getMaintenance, addMaintenance } = require('../dal')
const { pathOr, propOr, isEmpty, not } = require('ramda')
const bodyParser = require('body-parser')
const checkRequiredFields = require('../lib/checkRequiredFieds')
const cleanObj = require('../lib/cleanObj')

const maintenancesRoutes = app => {
  app.get('/', (req, res) => res.send('Welcome to the Tidey API'))

  app.get('/maintenances', (req, res, next) => {
    getMaintenances()
      .then(maintenances => res.send(maintenances))
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err))
      })
  })

  app.get('/maintenances/:id', (req, res, next) => {
    const maintenanceId = pathOr('', ['params', 'id'], req)
    getMaintenance(maintenanceId)
      .then(maintenance => res.status(200).send(maintenance))
      .catch(err => next(new NodeHTTPError(err.status, err.message, err)))
  })

  app.post('/maintenances', bodyParser.json(), (req, res, next) => {
    const newMaintenance = propOr({}, 'body', req)
    const missingFields = checkRequiredFields(
      ['date', 'boat', 'serviceType', 'engineHours', 'enteredBy'],
      newMaintenance
    )
    if (not(isEmpty(missingFields))) {
      next(
        new NodeHTTPError(
          400,
          `missing the following  fields: ${missingFields}`
        )
      )
    }
    const finalObj = cleanObj(
      ['date', 'boat', 'serviceType', 'engineHours', 'enteredBy'],
      newMaintenance
    )
    addMaintenance(finalObj)
      .then(added => {
        console.log(added)
        res.send(201).send(added)
      })
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err))
      })
  })
}

module.exports = maintenancesRoutes
