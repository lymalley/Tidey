import fetch from 'isomorphic-fetch'
import { GET_ACTIVITY, SET_ACTIVITIES } from '../constants'
const url = process.env.REACT_APP_BASE_URL + '/activities'

export const getActivity = id => dispatch => {
  fetch(`${url}/${id}`)
    .then(res => res.json())
    .then(activity => dispatch({ type: GET_ACTIVITY, payload: activity }))
    .catch(err => console.log(err))
}

export const setActivities = async (dispatch, getState) => {
  const activities = await fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err))

  dispatch({ type: SET_ACTIVITIES, payload: activities })
}
