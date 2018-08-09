const NodeHTTPError = require('node-http-error')
const { getMaintenances, getMaintenance } = require('../dal')
const { pathOr } = require('ramda')

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
}

module.exports = maintenancesRoutes
