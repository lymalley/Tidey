const NodeHTTPError = require('node-http-error')
const {
  getActivities,
  getActivity,
  addActivity,
  updateActivity,
  deleteActivity
} = require('../dal')
const { pathOr, propOr, isEmpty, not } = require('ramda')
const checkRequiredFields = require('../lib/checkRequiredFieds')
const cleanObj = require('../lib/cleanObj')
const bodyParser = require('body-parser')

const activitiesRoutes = app => {
  app.get('/', (req, res) => res.send('Welcome to Tidey API'))

  app.get('/activities', (req, res, next) => {
    const query = pathOr('', ['query', 'filter'], req)

    getActivities(query)
      .then(activities => res.send(activities))
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err))
      })
  })

  app.get('/activities/:id', (req, res, next) => {
    const activityId = pathOr('', ['params', 'id'], req)

    getActivity(activityId)
      .then(activity => res.status(200).send(activity))
      .catch(err => next(new NodeHTTPError(err.status, err.message, err)))
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
        res.status(201).send(added)
      })
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err))
      })
  })

  app.put('/activities/:id', (req, res, next) => {
    const newActivity = propOr({}, 'body', req)

    const missingFields = checkRequiredFields(
      [
        '_id',
        '_rev',
        'type',
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
        new NodeHTTPError(400, `missing the following fields: ${missingFields}`)
      )
    }
    const finalObj = cleanObj(
      [
        '_id',
        '_rev',
        'type',
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
    updateActivity(finalObj)
      .then(addResult => {
        console.log(addResult)
        res.status(201).send(addResult)
      })
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err))
      })
  })

  app.delete('/activities/:id', (req, res, next) => {
    const activity = propOr({}, 'body', req)
    deleteActivity(activity)
      .then(result => res.status(200).send(result))
      .catch(err => next(new NodeHTTPError(err.status, err.message, err)))
  })
}

module.exports = activitiesRoutes
