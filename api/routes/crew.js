const NodeHTTPError = require('node-http-error')
const {
  getCrew,
  getCrewMember,
  addCrewMember,
  updateCrewMember,
  deleteCrewMember
} = require('../dal')
const { pathOr, propOr, isEmpty, not } = require('ramda')
const bodyParser = require('body-parser')
const checkRequiredFields = require('../lib/checkRequiredFieds')
const cleanObj = require('../lib/cleanObj')

const crewRoutes = app => {
  app.get('/', (req, res) => res.send('Welcome to the Tidey API'))

  app.get('/crew', (req, res, next) => {
    const query = pathOr('', ['query', 'filter'], req)

    getCrew(query)
      .then(crew => res.send(crew))
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err))
      })
  })

  app.get('/crew/:id', (req, res, next) => {
    const crewMemberId = pathOr('', ['params', 'id'], req)
    getCrewMember(crewMemberId)
      .then(crewMember => res.send(crewMember))
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
      .then(added => res.status(201).send(added))
      .catch(err => next(new NodeHTTPError(err.status, err.message, err)))
  })

  app.put('/crew/:id', (req, res, next) => {
    const newMember = propOr({}, 'body', req)

    const missingFields = checkRequiredFields(
      ['_id', '_rev', 'type', 'firstName', 'lastName', 'phoneNumber'],
      newMember
    )

    if (not(isEmpty(missingFields))) {
      next(
        new NodeHTTPError(400, `missing the following fields: ${missingFields}`)
      )
    }
    const finalObj = cleanObj(
      ['_id', '_rev', 'type', 'firstName', 'lastName', 'phoneNumber'],
      newMember
    )
    updateCrewMember(finalObj)
      .then(addResult => {
        console.log(addResult)
        res.status(201).send(addResult)
      })
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err))
      })
  })

  app.delete('/crew/:id', (req, res, next) => {
    const crewMember = propOr({}, 'body', req)
    deleteCrewMember(crewMember)
      .then(result => res.status(200).send(result))
      .catch(err => next(new NodeHTTPError(err.status, err.message, err)))
  })
}

module.exports = crewRoutes
