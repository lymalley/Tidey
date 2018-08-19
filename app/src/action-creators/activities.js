import fetch from 'isomorphic-fetch'
import {
  GET_CURRENT_ACTIVITY,
  SET_ACTIVITIES,
  NEW_ACTIVITY_SAVE_FAILED,
  NEW_ACTIVITY_SAVE_STARTED,
  NEW_ACTIVITY_SAVE_SUCCEEDED,
  EDIT_ACTIVITY_SAVE_STARTED,
  EDIT_ACTIVITY_SAVE_FAILED,
  EDIT_ACTIVITY_SAVE_SUCCEEDED
} from '../constants'
const url = process.env.REACT_APP_BASE_URL + '/activities'

export const getActivity = id => dispatch => {
  fetch(`${url}/${id}`)
    .then(res => res.json())
    .then(activity =>
      dispatch({ type: GET_CURRENT_ACTIVITY, payload: activity })
    )
    .catch(err => console.log(err))
}

export const setActivities = async (dispatch, getState) => {
  const activities = await fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err))

  dispatch({ type: SET_ACTIVITIES, payload: activities })
}

export const addActivity = history => async (dispatch, getState) => {
  dispatch({ type: NEW_ACTIVITY_SAVE_STARTED })
  const result = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(getState().newActivity.data)
  })
    .then(res => res.json())
    .catch(err =>
      dispatch({
        type: NEW_ACTIVITY_SAVE_FAILED,
        payload: 'Unexpected Error.  Please try again.'
      })
    )
  if (result.ok) {
    dispatch({ type: NEW_ACTIVITY_SAVE_SUCCEEDED })
    setActivities(dispatch, getState)
    history.push('/activities')
  } else {
    dispatch({
      type: NEW_ACTIVITY_SAVE_FAILED,
      payload: 'Unexpected Error.  Please try again.'
    })
  }
}

export const updateActivity = history => (dispatch, getState) => {
  dispatch({ type: EDIT_ACTIVITY_SAVE_STARTED })

  const activity = getState().editActivity.data

  fetch(`${url}/${activity._id}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(activity)
  })
    .then(res => res.json())
    .then(saveResponse => {
      if (!saveResponse.ok) {
        dispatch({
          type: EDIT_ACTIVITY_SAVE_FAILED,
          payload: 'Could not save the activity.'
        })
      } else {
        dispatch({ type: EDIT_ACTIVITY_SAVE_SUCCEEDED })
        history.push('/') // this should the view form, probably.
      }
    })
    .catch(err =>
      dispatch({
        type: EDIT_ACTIVITY_SAVE_FAILED,
        payload:
          'Unexpected error prevented us from saving the event. Please try again.'
      })
    )
}
