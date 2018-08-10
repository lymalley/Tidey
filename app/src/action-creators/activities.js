import fetch from 'isomorphic-fetch'
import { GET_CURRENT_ACTIVITY, SET_ACTIVITIES } from '../constants'
const url = process.env.REACT_APP_BASE_URL + '/activities'

export const getActivity = id => dispatch => {
  fetch(`${url}/${id}`)
    .then(res => res.json())
    .then(activity =>
      dispatch({ type: GET_CURRENT_ACTIVITY, payload: activity })
    )
    .catch(err => console.log(err))
}
