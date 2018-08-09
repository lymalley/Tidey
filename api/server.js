require('dotenv').config()
const PORT = process.env.PORT
const app = require('express')()
const bodyParser = require('body-parser')
const boats = require('./routes/boats')
const activities = require('./routes/activities')
const crew = require('./routes/crew')
const maintenances = require('./routes/maintenances')
const reminders = require('./routes/reminders')
const cors = require('cors')
app.use(bodyParser.json())
app.use(cors({ credentials: true }))

boats(app)
activities(app)
crew(app)
maintenances(app)
reminders(app)

app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message)
})

app.use((err, req, res, next) => {
  console.log('error', err)
  next(err)
})

app.listen(PORT || 5000, () => console.log('Up on ', PORT || 5000))
