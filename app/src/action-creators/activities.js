import fetch from 'isomorphic-fetch'
import {
  GET_ACTIVITY,
  SET_ACTIVITIES,
  NEW_ACTIVITY_SAVE_FAILED,
  NEW_ACTIVITY_SAVE_STARTED,
  NEW_ACTIVITY_SAVE_SUCCEEDED
} from '../constants'
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

export const addActivity = history => (dispatch, getState) => {
  dispatch({ type: NEW_ACTIVITY_SAVE_STARTED })

  const newActivity = getState().newActivity.data

  fetch(`url`, {
    headers: {
      'Content-Type': 'applicaiton/json'
    },
    method: 'POST',
    body: JSON.stringify(newActivity)
  })
    .then(res => res.json())
    .then(saveResponse => {
      if (!saveResponse.ok) {
        dispatch({
          type: NEW_ACTIVITY_SAVE_FAILED,
          payload: 'Could not save the Activity'
        })
      } else {
        dispatch({ type: NEW_ACTIVITY_SAVE_SUCCEEDED })
        history.push('/activities')
      }
    })
    .catch(err =>
      dispatch({
        type: NEW_ACTIVITY_SAVE_FAILED,
        payload: 'Unexpected Error.  Please try again.'
      })
    )
}
