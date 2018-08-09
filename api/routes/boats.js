const NodeHTTPError = require('node-http-error')
const { getBoats, getBoat } = require('../dal')
const { pathOr } = require('ramda')

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
}

module.exports = boatsRoutes
