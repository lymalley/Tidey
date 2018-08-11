import fetch from 'isomorphic-fetch'
import {
  SET_CREW,
  GET_CREW_MEMBER,
  NEW_CREW_SAVE_STARTED,
  NEW_CREW_SAVE_SUCCEEDED,
  NEW_CREW_SAVE_FAILED
} from '../constants'
const url = process.env.REACT_APP_BASE_URL

export const addCrewMember = history => (dispatch, getState) => {
  dispatch({ type: NEW_CREW_SAVE_STARTED })

  const newCrewMember = getState().newCrewMember.data

  fetch(`{url}/crew`, {
    headers: {
      'Content-Type': 'applicaiton/json'
    },
    method: 'POST',
    body: JSON.stringify(newCrewMember)
  })
    .then(res => res.json())
    .then(saveResponse => {
      if (!saveResponse.ok) {
        dispatch({
          type: NEW_CREW_SAVE_FAILED,
          payload: 'Could not save the Crew Member'
        })
      } else {
        dispatch({ type: NEW_CREW_SAVE_SUCCEEDED })
        history.push('/crew')
      }
    })
    .catch(err =>
      dispatch({
        type: NEW_CREW_SAVE_FAILED,
        payload: 'Unexpected Error.  Please try again.'
      })
    )
}
