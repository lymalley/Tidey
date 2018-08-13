import fetch from 'isomorphic-fetch'
import {
  GET_CURRENT_BOAT,
  SET_BOATS,
  NEW_BOAT_SAVE_FAILED,
  NEW_BOAT_SAVE_SUCCEEDED,
  NEW_BOAT_SAVE_STARTED
} from '../constants'
const url = process.env.REACT_APP_BASE_URL + '/boats'

export const setBoats = async (dispatch, getState) => {
  const boats = await fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err))
  dispatch({ type: SET_BOATS, payload: boats })
}

export const getBoat = id => dispatch => {
  fetch(url + '/' + id)
    .then(res => res.json())
    .then(boat => dispatch({ type: GET_CURRENT_BOAT, payload: boat }))
    .catch(err => console.log(err))
}

export const addBoat = history => (dispatch, getState) => {
  dispatch({ type: NEW_BOAT_SAVE_STARTED })

  const newBoat = getState().newBoat.data

  fetch(`{url}/boat`, {
    headers: {
      'Content-Type': 'applicaiton/json'
    },
    method: 'POST',
    body: JSON.stringify(newBoat)
  })
    .then(res => res.json())
    .then(saveResponse => {
      if (!saveResponse.ok) {
        dispatch({
          type: NEW_BOAT_SAVE_FAILED,
          payload: 'Could not save the Boat'
        })
      } else {
        dispatch({ type: NEW_BOAT_SAVE_SUCCEEDED })
        history.push('/boat')
      }
    })
    .catch(err =>
      dispatch({
        type: NEW_BOAT_SAVE_FAILED,
        payload: 'Unexpected Error.  Please try again.'
      })
    )
}
