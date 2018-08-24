import fetch from 'isomorphic-fetch'
import {
  GET_CURRENT_REMINDER,
  SET_REMINDERS,
  NEW_REMINDER_SAVE_FAILED,
  NEW_REMINDER_SAVE_SUCCEEDED,
  NEW_REMINDER_SAVE_STARTED,
  CURRENT_REMINDER_DELETING_STARTED,
  CURRENT_REMINDER_DELETING_SUCCEEDED,
  CURRENT_REMINDER_DELETING_FAILED,
  EDIT_REMINDER_SAVE_STARTED,
  EDIT_REMINDER_SAVE_FAILED,
  EDIT_REMINDER_SAVE_SUCCEEDED
} from '../constants'
import { subtract, merge } from 'ramda'
const url = process.env.REACT_APP_BASE_URL + '/reminders'

export const setReminders = async (dispatch, getState) => {
  const reminders = await fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err))
  dispatch({ type: SET_REMINDERS, payload: reminders })
}

export const getReminder = id => dispatch => {
  fetch(url + '/' + id)
    .then(res => res.json())
    .then(reminder =>
      dispatch({ type: GET_CURRENT_REMINDER, payload: reminder })
    )
    .catch(err => console.log(err))
}

export const addReminder = (createdMaintenance, history) => async (
  dispatch,
  getState
) => {
  const thisReminder = getState().newReminder.data
  if (thisReminder.createdMaintenance) {
    const atHours = subtract(
      Number(createdMaintenance.dueAtHours),
      Number(createdMaintenance.hrsBefore)
    )

    console.log('this reminder', JSON.stringify(thisReminder))
    const createdMaintenanceState = {
      date: createdMaintenance.date,
      boat: createdMaintenance.boat,
      alertAt: atHours,
      maintenanceId: createdMaintenance._id,
      service: createdMaintenance.serviceType,
      dueAtHours: createdMaintenance.dueAtHours,
      remindHrsBefore: createdMaintenance.hrsBefore,
      completed: false,
      startMaint: false,
      enteredBy: createdMaintenance.createdBy
    }

    const reminderMaint = merge(thisReminder, createdMaintenanceState)
    console.log('here i am ', JSON.stringify(reminderMaint))
    //if (thisReminder.maintenanceId === null) {
    dispatch({ type: NEW_REMINDER_SAVE_STARTED })
    const result = await fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(reminderMaint)
    })
      .then(res => res.json())
      .catch(err =>
        dispatch({
          type: NEW_REMINDER_SAVE_FAILED,
          payload: 'Unexpected Error.  Please try again.'
        })
      )
    console.log('reminder result', JSON.stringify(result))
    if (result.ok) {
      console.log('in happy reminder')
      dispatch({
        type: NEW_REMINDER_SAVE_SUCCEEDED
      })
      setReminders(dispatch, getState)
      history.push('/reminders')
    } else {
      dispatch({
        type: NEW_REMINDER_SAVE_FAILED,
        payload: 'Unexpected Error.  Please try again.'
      })
    }
  } else {
    dispatch({ type: NEW_REMINDER_SAVE_STARTED })

    const result = await fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(getState().newReminder.data)
    })
      .then(res => res.json())
      .catch(err =>
        dispatch({
          type: NEW_REMINDER_SAVE_FAILED,
          payload: 'Unexpected Error.  Please try again.'
        })
      )
    console.log('reminder result', JSON.stringify(result))
    if (result.ok) {
      console.log('in happy reminder')
      dispatch({
        type: NEW_REMINDER_SAVE_SUCCEEDED
      })
      setReminders(dispatch, getState)
      history.push('/reminders')
    } else {
      dispatch({
        type: NEW_REMINDER_SAVE_FAILED,
        payload: 'Unexpected Error.  Please try again.'
      })
    }
  }
}
{
  /*
console.log(
  'initial reminder data',
  JSON.stringify(),
  createdMaintenance

  //now can do a merge to feed it information from the maintenance
)



const newReminderInitialState = {
  data: {
    date: Today,
    boatName: 'Orange Crush',
    alertAt: '',
    maintenanceId: '',
    service: '',
    dueAtHours: '',
    remindHrsBefore: 10,
    completed: false,
    startMaint: false,
    enteredBy: ''
  }
}

export const addReminder = (createdMaintenance, history) => async (
  dispatch,
  getState
) => {
  const atHours = subtract(
    Number(createdMaintenance.dueAtHours),
    Number(createdMaintenance.hrsBefore)
  )
  const thisReminder = getState().newReminder.data
  console.log('this reminder', JSON.stringify(thisReminder))
  const createdMaintenanceState = {
    date: createdMaintenance.date,
    boatName: createdMaintenance.boat,
    alertAt: atHours,
    maintenanceId: createdMaintenance._id,
    service: createdMaintenance.serviceType,
    dueAtHours: createdMaintenance.dueAtHours,
    remindHrsBefore: createdMaintenance.hrsBefore,
    completed: false,
    startMaint: false,
    enteredBy: createdMaintenance.createdBy
  }

  const reminderMaint = merge(thisReminder, createdMaintenanceState)
  console.log('here i am ', JSON.stringify(reminderMaint))
  //if (thisReminder.maintenanceId === null) {
  dispatch({ type: NEW_REMINDER_SAVE_STARTED })
  const result = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(reminderMaint)
  })
    .then(res => res.json())
    .catch(err =>
      dispatch({
        type: NEW_REMINDER_SAVE_FAILED,
        payload: 'Unexpected Error.  Please try again.'
      })
    )
  console.log('reminder result', JSON.stringify(result))
  if (result.ok) {
    console.log('in happy reminder')
    dispatch({
      type: NEW_REMINDER_SAVE_SUCCEEDED
    })
    setReminders(dispatch, getState)
    history.push('/reminders')
  } else {
    dispatch({
      type: NEW_REMINDER_SAVE_FAILED,
      payload: 'Unexpected Error.  Please try again.'
    })
  }
}
*/
}
export const updateReminder = (id, history) => async (dispatch, getState) => {
  dispatch({ type: EDIT_REMINDER_SAVE_STARTED })

  const results = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    method: 'PUT',
    body: JSON.stringify(getState().editReminder.data)
  })
    .then(res => res.json())
    .catch(err =>
      dispatch({
        type: EDIT_REMINDER_SAVE_FAILED,
        payload:
          'Sorry there was an internal error and your reminder was not updated.'
      })
    )

  if (results.ok) {
    await dispatch(setReminders)
    dispatch({ type: EDIT_REMINDER_SAVE_SUCCEEDED })
    history.push(`/reminders/${id}`)
  } else {
    dispatch({
      type: EDIT_REMINDER_SAVE_FAILED,
      payload: 'Failed to update reminder.'
    })
  }
}

export const deleteReminder = history => async (dispatch, getState) => {
  dispatch({ type: CURRENT_REMINDER_DELETING_STARTED })

  const reminderId = getState().currentReminder.data._id

  const deleteResult = await fetch(url + '/' + reminderId, {
    headers: { 'Content-Type': 'application/json' },
    method: 'DELETE'
  }).then(res => res.json())

  if (deleteResult.ok) {
    await dispatch(setReminders)
    dispatch({ type: CURRENT_REMINDER_DELETING_SUCCEEDED })
    history.push('/reminder')
  } else {
    dispatch({ type: CURRENT_REMINDER_DELETING_FAILED })
  }
}
