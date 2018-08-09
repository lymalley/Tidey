const NodeHTTPError = require('node-http-error')
const { getCrew, getCrewMember } = require('../dal')
const { pathOr } = require('ramda')

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
}

module.exports = crewRoutes
