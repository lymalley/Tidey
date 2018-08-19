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

export const addBoat = history => async (dispatch, getState) => {
  dispatch({ type: NEW_BOAT_SAVE_STARTED })
  const result = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(getState().newBoat.data)
  })
    .then(res => res.json())
    .catch(err =>
      dispatch({
        type: NEW_BOAT_SAVE_FAILED,
        payload: 'Could not save the Boat'
      })
    )
  if (result.ok) {
    dispatch({ type: NEW_BOAT_SAVE_SUCCEEDED })
    setBoats(dispatch, getState)
    history.push('/boats')
  } else {
    dispatch({
      type: NEW_BOAT_SAVE_FAILED,
      payload: 'Unexpected Error.  Please try again.'
    })
  }
}
