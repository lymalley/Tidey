import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { drawer } from './reducers/drawer'
import {
  getActivities,
  currentActivity,
  newActivity,
  editActivity
} from './reducers/activities'
import { newBoat, getBoats, currentBoat } from './reducers/boats'
import { newCrewMember, currentCrewMember, getCrew } from './reducers/crew'
import {
  newMaintenance,
  getMaintenances,
  currentMaintenance
} from './reducers/maintenances'
import {
  newReminder,
  currentReminder,
  getReminders
} from './reducers/reminders'
import { getForecast } from './reducers/weather'

const store = createStore(
  combineReducers({
    drawer,
    getActivities,
    getBoats,
    getCrew,
    getMaintenances,
    getReminders,
    getForecast,
    currentActivity,
    currentBoat,
    currentCrewMember,
    currentMaintenance,
    currentReminder,
    newActivity,
    newBoat,
    newCrewMember,
    newMaintenance,
    newReminder,
    editActivity
  }),
  applyMiddleware(thunk)
)

export default store
