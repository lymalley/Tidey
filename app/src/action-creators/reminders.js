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

export const addReminder = history => async (dispatch, getState) => {
  dispatch({ type: NEW_REMINDER_SAVE_STARTED })
  console.log(
    'initial reminder data',
    JSON.stringify(getState().newReminder.data)
  )
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
