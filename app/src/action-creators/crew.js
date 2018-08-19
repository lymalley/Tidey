import fetch from 'isomorphic-fetch'
import {
  SET_CREW,
  GET_CREW_MEMBER,
  NEW_CREW_SAVE_STARTED,
  NEW_CREW_SAVE_SUCCEEDED,
  NEW_CREW_SAVE_FAILED
} from '../constants'
const url = process.env.REACT_APP_BASE_URL + '/crew'

export const getCrewMember = id => dispatch => {
  fetch(`${url}/${id}`)
    .then(res => res.json())
    .then(crewMember =>
      dispatch({ type: GET_CREW_MEMBER, payload: crewMember })
    )
    .catch(err => console.log(err))
}

export const setCrew = async (dispatch, getState) => {
  const crew = await fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err))

  dispatch({ type: SET_CREW, payload: crew })
}
{
  /*
export const addCrewMember = history => (dispatch, getState) => {
  dispatch({ type: NEW_CREW_SAVE_STARTED })

  const crewMember = getState().newCrewMember.data

  fetch(url, {
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
*/
}

export const addCrewMember = history => async (dispatch, getState) => {
  dispatch({ type: NEW_CREW_SAVE_STARTED })
  const result = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(getState().newCrewMember.data)
  })
    .then(res => res.json())
    .catch(err =>
      dispatch({
        type: NEW_CREW_SAVE_FAILED,
        payload: 'Unexpected Error.  Please try again.'
      })
    )
  if (result.ok) {
    dispatch({ type: NEW_CREW_SAVE_SUCCEEDED })
    setCrew(dispatch, getState)
    history.push('/crew')
  } else {
    dispatch({
      type: NEW_CREW_SAVE_FAILED,
      payload: 'Unexpected Error.  Please try again.'
    })
  }
}
