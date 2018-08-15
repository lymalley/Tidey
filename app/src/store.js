import { createStore, combineReducers, applyMiddleware } from 'redux'
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
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    drawer,
    getActivities,
    getBoats,
    getCrew,
    getMaintenances,
    getReminders,
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
