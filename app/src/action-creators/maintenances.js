import fetch from 'isomorphic-fetch'
import {
  SET_MAINTENANCES,
  GET_MAINTENANCE,
  NEW_MAINTENANCE_SAVE_STARTED,
  NEW_MAINTENANCE_SAVE_SUCCEEDED,
  NEW_MAINTENANCE_SAVE_FAILED
} from '../constants'
const url = process.env.REACT_APP_BASE_URL + '/maintenances'

export const setMaintenances = async (dispatch, getState) => {
  const maintenances = await fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err))

  dispatch({ type: SET_MAINTENANCES, payload: maintenances })
}

export const addMaintenance = history => (dispatch, getState) => {
  dispatch({ type: NEW_MAINTENANCE_SAVE_STARTED })

  const newMaintenance = getState().newMaintenances.data

  fetch(url, {
    headers: {
      'Content-Type': 'applicaiton/json'
    },
    method: 'POST',
    body: JSON.stringify(newMaintenance)
  })
    .then(res => res.json())
    .then(saveResponse => {
      if (!saveResponse.ok) {
        dispatch({
          type: NEW_MAINTENANCE_SAVE_FAILED,
          payload: 'Could not save the Crew Member'
        })
      } else {
        dispatch({ type: NEW_MAINTENANCE_SAVE_SUCCEEDED })
        history.push('/maintenances')
      }
    })
    .catch(err =>
      dispatch({
        type: NEW_MAINTENANCE_SAVE_FAILED,
        payload: 'Unexpected Error.  Please try again.'
      })
    )
}
