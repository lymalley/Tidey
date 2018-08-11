import fetch from 'isomorphic-fetch'
import {
  GET_CURRENT_BOAT,
  SET_BOATS,
  NEW_BOAT_SAVE_FAILED,
  NEW_BOAT_SAVED,
  NEW_BOAT_SAVE_STARTED
} from '../constants'
const url = process.env.REACT_APP_BASE_URL + '/boats'

export const getBoat = id => dispatch => {
  fetch(url + '/' + id)
    .then(res => res.json())
    .then(boat => dispatch({ type: GET_CURRENT_BOAT, payload: boat }))
    .catch(err => console.log(err))
}
