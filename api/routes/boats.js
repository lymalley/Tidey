const NodeHTTPError = require('node-http-error')
const { getBoats, getBoat, addBoat } = require('../dal')
const { pathOr, propOr, isEmpty, not } = require('ramda')
const bodyParser = require('body-parser')
const checkRequiredFields = require('../lib/checkRequiredFieds')
const cleanObj = require('../lib/cleanObj')

const boatsRoutes = app => {
  app.get('/', (req, res) => res.send('Welcome to the Tidey API'))

  app.get('/boats', (req, res, next) => {
    getBoats()
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
    const missingFields = checkRequiredFields(['name'], newBoat)
    if (not(isEmpty(missingFields))) {
      next(
        new NodeHTTPError(
          400,
          `missing the following  fields: ${missingFields}`
        )
      )
    }
    const finalObj = cleanObj(['name'], newBoat)
    addBoat(finalObj)
      .then(added => {
        console.log(added)
        res.send(201).send(added)
      })
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err))
      })
  })
}

module.exports = boatsRoutes
