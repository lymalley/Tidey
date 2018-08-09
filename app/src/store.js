import { createStore, combineReducers, applyMiddleware } from 'redux'
import { drawer } from './reducers/drawer'
import thunk from 'redux-thunk'

const store = createStore(combineReducers({ drawer }), applyMiddleware(thunk))

export default store
