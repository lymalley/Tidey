const NodeHTTPError = require('node-http-error')
const { getReminders, getReminder } = require('../dal')
const { pathOr } = require('ramda')

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
}

module.exports = remindersRoute
