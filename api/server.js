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

app.use(cors({ credentials: true }))
app.use(bodyParser.json())

app.get('/', (req, res, next) => {
  res.status(200).send('Welcome to the Tidey Api')
})

boats(app)
activities(app)
crew(app)
maintenances(app)
reminders(app)

app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message)
  console.log('Error: ', err)
})

app.listen(PORT || 5000, () => console.log('Tidey API up on ', PORT || 5000))
