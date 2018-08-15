import fetch from 'isomorphic-fetch'
import {
  GET_CURRENT_REMINDER,
  SET_REMINDERS,
  NEW_REMINDER_SAVE_FAILED,
  NEW_REMINDER_SAVE_SUCCEEDED,
  NEW_REMINDER_SAVE_STARTED
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

export const addReminder = history => (dispatch, getState) => {
  dispatch({ type: NEW_REMINDER_SAVE_STARTED })

  const newReminder = getState().newReminder.data

  fetch(url, {
    headers: {
      'Content-Type': 'applicaiton/json'
    },
    method: 'POST',
    body: JSON.stringify(newReminder)
  })
    .then(res => res.json())
    .then(saveResponse => {
      if (!saveResponse.ok) {
        dispatch({
          type: NEW_REMINDER_SAVE_FAILED,
          payload: 'Could not save the Reminder'
        })
      } else {
        dispatch({ type: NEW_REMINDER_SAVE_SUCCEEDED })
        history.push('/reminders')
      }
    })
    .catch(err =>
      dispatch({
        type: NEW_REMINDER_SAVE_FAILED,
        payload: 'Unexpected Error.  Please try again.'
      })
    )
}
