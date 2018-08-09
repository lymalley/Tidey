const NodeHTTPError = require('node-http-error')
const { getActivities, getActivity, addActivity } = require('../dal')
const { pathOr, propOr, isEmpty, not } = require('ramda')
const checkRequiredFields = require('../lib/checkRequiredFieds')
const cleanObj = require('../lib/cleanObj')
const bodyParser = require('body-parser')

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

  app.post('/activities', bodyParser.json(), (req, res, next) => {
    const newActivity = propOr({}, 'body', req)
    const missingFields = checkRequiredFields(
      [
        'date',
        'startTime',
        'endTime',
        'boat',
        'engineHoursEnd',
        'tripType',
        'enteredBy'
      ],
      newActivity
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
      [
        'date',
        'startTime',
        'endTime',
        'boat',
        'engineHoursEnd',
        'tripType',
        'enteredBy'
      ],
      newActivity
    )
    addActivity(finalObj)
      .then(added => {
        console.log(added)
        res.send(201).send(added)
      })
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err))
      })
  })
}

module.exports = activitiesRoutes
