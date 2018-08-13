import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import store from './store'
import { setActivities } from './action-creators/activities'
import { setCrew } from './action-creators/crew'
import { setBoats } from './action-creators/boats'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
store.dispatch(setActivities)
store.dispatch(setBoats)
store.dispatch(setCrew)
