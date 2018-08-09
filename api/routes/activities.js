const NodeHTTPError = require('node-http-error')
const { getActivities, getActivity } = require('../dal')
const { pathOr } = require('ramda')

const activitiesRoutes = app => {
  app.get('/', (req, res) => res.send('Welcome to Tidey API'))

  app.get('/activities', (req, res, next) => {
    getActivities()
      .then(activities => res.send(activities))
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err))
      })
  })

  app.get('/activities/:id', (req, res, next) => {
    const activityID = pathOr('', ['params', 'id'], req)
    getActivity(activityID)
      .then(activity => res.status(200).send(activity))
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err))
      })
  })
}

module.exports = activitiesRoutes
