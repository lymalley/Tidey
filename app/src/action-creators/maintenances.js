import fetch from 'isomorphic-fetch'
import {
  SET_MAINTENANCES,
  GET_CURRENT_MAINTENANCE,
  NEW_MAINTENANCE_SAVE_STARTED,
  NEW_MAINTENANCE_SAVE_SUCCEEDED,
  NEW_MAINTENANCE_SAVE_FAILED,
  NEW_REMINDER_SAVE_SUCCEEDED
} from '../constants'
const url = process.env.REACT_APP_BASE_URL + '/maintenances'

export const setMaintenances = async (dispatch, getState) => {
  const maintenances = await fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err))

  dispatch({ type: SET_MAINTENANCES, payload: maintenances })
}

export const getMaintenance = id => dispatch => {
  fetch(`${url}/${id}`)
    .then(res => res.json())
    .then(maintenance =>
      dispatch({ type: GET_CURRENT_MAINTENANCE, payload: maintenance })
    )
    .catch(err => console.log(err))
}

export const addMaintenance = history => async (dispatch, getState) => {
  dispatch({ type: NEW_MAINTENANCE_SAVE_STARTED })
  const result = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(getState().newMaintenances.data)
  })
    .then(res => res.json())
    .catch(err =>
      dispatch({
        type: NEW_MAINTENANCE_SAVE_FAILED,
        payload: 'Unexpected Error.  Please try again.'
      })
    )
  if (result.ok) {
    dispatch({
      type: [NEW_MAINTENANCE_SAVE_SUCCEEDED, NEW_REMINDER_SAVE_SUCCEEDED]
    })
    setMaintenances(dispatch, getState)
    history.push('/maintenances')
  } else {
    dispatch({
      type: NEW_MAINTENANCE_SAVE_FAILED,
      payload: 'Unexpected Error.  Please try again.'
    })
  }
}
