const NodeHTTPError = require('node-http-error')
const { getReminders, getReminder, addReminder } = require('../dal')
const { pathOr, propOr, isEmpty, not } = require('ramda')
const bodyParser = require('body-parser')
const checkRequiredFields = require('../lib/checkRequiredFieds')
const cleanObj = require('../lib/cleanObj')
const remindersRoute = app => {
  app.get('/', (req, res) => res.send('Welcome to the Tidey API'))

  app.get('/reminders', (req, res, next) => {
    getReminders()
      .then(reminders => res.send(reminders))
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err))
      })
  })

  app.get('/reminders/:id', (req, res, next) => {
    const reminderId = pathOr('', ['params', 'id'], req)
    getReminder(reminderId)
      .then(reminder => res.status(200).send(reminder))
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
      ['boat', 'alertAt', 'info', 'completed'],
      newReminder
    )
    addReminder(finalObj)
      .then(added => {
        console.log(added)
        res.send(201).send(added)
      })
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err))
      })
  })
}

module.exports = remindersRoute
