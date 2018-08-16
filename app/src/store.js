import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { drawer } from './reducers/drawer'
import {
  getActivities,
  currentActivity,
  newActivity
} from './reducers/activities'
import { newBoat, getBoats } from './reducers/boats'
import { newCrewMember, getCrew } from './reducers/crew'
import { newMaintenance, getMaintenances } from './reducers/maintenances'
import { newReminder, getReminders } from './reducers/reminders'
import { getWeather } from './reducers/weather'

const store = createStore(
  combineReducers({
    drawer,
    getActivities,
    getBoats,
    getCrew,
    getMaintenances,
    getReminders,
    getWeather,
    currentActivity,
    newActivity,
    newBoat,
    newCrewMember,
    newMaintenance,
    newReminder
  }),
  applyMiddleware(thunk)
)

export default store
