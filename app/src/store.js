import { createStore, combineReducers, applyMiddleware } from 'redux'
import { drawer } from './reducers/drawer'
import { activities, currentActivity } from './reducers/activities'
import { newCrewMember } from './reducers/crew'
import { newMaintenance } from './reducers/maintenances'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    drawer,
    activities,
    currentActivity,
    newCrewMember,
    newMaintenance
  }),
  applyMiddleware(thunk)
)

export default store
