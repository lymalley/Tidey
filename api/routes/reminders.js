const NodeHTTPError = require('node-http-error')
const {
  getReminders,
  getReminder,
  addReminder,
  updateReminder,
  deleteReminder
} = require('../dal')
const { pathOr, propOr, isEmpty, not } = require('ramda')
const bodyParser = require('body-parser')
const checkRequiredFields = require('../lib/checkRequiredFieds')
const cleanObj = require('../lib/cleanObj')
const remindersRoute = app => {
  app.get('/', (req, res) => res.send('Welcome to the Tidey API'))

  app.get('/reminders', (req, res, next) => {
    const query = pathOr('', ['query', 'filter'], req)

    getReminders(query)
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

  app.post('/reminders', (req, res, next) => {
    const newReminder = propOr({}, 'body', req)
    const missingFields = checkRequiredFields(
      ['boatName', 'alertAt', 'service', 'dueAtHours', 'completed'],
      newReminder
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
      ['boatName', 'alertAt', 'service', 'dueAtHours', 'completed'],
      newReminder
    )
    addReminder(finalObj)
      .then(added => res.status(201).send(added))
      .catch(err => next(new NodeHTTPError(err.status, err.message, err)))
  })

  app.put('/reminders/:id', (req, res, next) => {
    const newReminder = propOr({}, 'body', req)

    const missingFields = checkRequiredFields(
      [
        '_id',
        '_rev',
        'type',
        'boatName',
        'alertAt',
        'service',
        'dueAtHours',
        'completed'
      ],
      newReminder
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
        'boatName',
        'alertAt',
        'service',
        'dueAtHours',
        'completed'
      ],
      newReminder
    )
    updateReminder(finalObj)
      .then(addResult => {
        console.log(addResult)
        res.status(201).send(addResult)
      })
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err))
      })
  })

  app.delete('/reminders/:id', (req, res, next) => {
    const reminder = propOr({}, 'body', req)
    deleteReminder(reminder)
      .then(result => res.status(200).send(result))
      .catch(err => next(new NodeHTTPError(err.status, err.message, err)))
  })
}

module.exports = remindersRoute
