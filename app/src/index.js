import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import 'typeface-roboto'
import registerServiceWorker from './registerServiceWorker'
import store from './store'
import { setActivities } from './action-creators/activities'
import { setCrew } from './action-creators/crew'
import { setBoats } from './action-creators/boats'
import { setMaintenances } from './action-creators/maintenances'
import { setReminders } from './action-creators/reminders'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()

store.dispatch(setActivities)
store.dispatch(setBoats)
store.dispatch(setCrew)
store.dispatch(setMaintenances)
store.dispatch(setReminders)
