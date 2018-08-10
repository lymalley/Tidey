import { createStore, combineReducers, applyMiddleware } from 'redux'
import { drawer } from './reducers/drawer'
import { activities, currentActivity } from './reducers/activities'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({ drawer, activities, currentActivity }),
  applyMiddleware(thunk)
)

export default store
