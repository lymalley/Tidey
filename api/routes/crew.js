const NodeHTTPError = require('node-http-error')
const { getCrew, getCrewMember, addCrewMember } = require('../dal')
const { pathOr, propOr, isEmpty, not } = require('ramda')
const bodyParser = require('body-parser')
const checkRequiredFields = require('../lib/checkRequiredFieds')
const cleanObj = require('../lib/cleanObj')

const crewRoutes = app => {
  app.get('/', (req, res) => res.send('Welcome to the Tidey API'))

  app.get('/crew', (req, res, next) => {
    getCrew()
      .then(crew => res.send(crew))
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err))
      })
  })

  app.get('/crew/:id', (req, res, next) => {
    const crewMemberId = pathOr('', ['params', 'id'], req)
    getCrewMember(crewMemberId)
      .then(crewMember => res.status(200).send(crewMember))
      .catch(err => next(new NodeHTTPError(err.status, err.message, err)))
  })

  app.post('/crew', bodyParser.json(), (req, res, next) => {
    const newCrewMember = propOr({}, 'body', req)
    const missingFields = checkRequiredFields(
      ['firstName', 'lastName', 'phoneNumber'],
      newCrewMember
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
      ['firstName', 'lastName', 'phoneNumber'],
      newCrewMember
    )
    addCrewMember(finalObj)
      .then(added => {
        console.log(added)
        res.send(201).send(added)
      })
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err))
      })
  })
}

module.exports = crewRoutes
