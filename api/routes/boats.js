const NodeHTTPError = require('node-http-error')
const { getBoats, getBoat, addBoat, updateBoat, deleteBoat } = require('../dal')
const { pathOr, propOr, isEmpty, not } = require('ramda')
const bodyParser = require('body-parser')
const checkRequiredFields = require('../lib/checkRequiredFieds')
const cleanObj = require('../lib/cleanObj')

const boatsRoutes = app => {
  app.get('/', (req, res) => res.send('Welcome to the Tidey API'))

  app.get('/boats', (req, res, next) => {
    const query = pathOr('', ['query', 'filter'], req)

    getBoats(query)
      .then(boats => res.send(boats))
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err))
      })
  })

  app.get('/boats/:id', (req, res, next) => {
    const boatId = pathOr('', ['params', 'id'], req)
    getBoat(boatId)
      .then(boat => res.status(200).send(boat))
      .catch(err => next(new NodeHTTPError(err.status, err.message, err)))
  })

  app.post('/boats', bodyParser.json(), (req, res, next) => {
    const newBoat = propOr({}, 'body', req)
    const missingFields = checkRequiredFields(['name', 'boatMake'], newBoat)
    if (not(isEmpty(missingFields))) {
      next(
        new NodeHTTPError(
          400,
          `missing the following  fields: ${missingFields}`
        )
      )
    }
    const finalObj = cleanObj(['name', 'boatMake'], newBoat)
    addBoat(finalObj)
      .then(added => res.status(201).send(added))
      .catch(err => next(new NodeHTTPError(err.status, err.message, err)))
  })

  app.put('/boats/:id', (req, res, next) => {
    const newBoat = propOr({}, 'body', req)

    const missingFields = checkRequiredFields(
      ['_id', '_rev', 'type', 'name', 'boatMake'],
      newBoat
    )

    if (not(isEmpty(missingFields))) {
      next(
        new NodeHTTPError(400, `missing the following fields: ${missingFields}`)
      )
    }
    const finalObj = cleanObj(
      ['_id', '_rev', 'type', 'name', 'boatMake'],
      newBoat
    )
    updateBoat(finalObj)
      .then(addResult => {
        console.log(addResult)
        res.status(201).send(addResult)
      })
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err))
      })
  })

  app.delete('/boats/:id', (req, res, next) => {
    const boat = propOr({}, 'body', req)
    deleteBoat(boat)
      .then(result => res.status(200).send(result))
      .catch(err => next(new NodeHTTPError(err.status, err.message, err)))
  })
}

module.exports = boatsRoutes
