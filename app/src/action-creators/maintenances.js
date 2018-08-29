import fetch from 'isomorphic-fetch'
import {
  SET_MAINTENANCES,
  GET_CURRENT_MAINTENANCE,
  NEW_MAINTENANCE_SAVE_STARTED,
  NEW_MAINTENANCE_SAVE_SUCCEEDED,
  NEW_MAINTENANCE_SAVE_FAILED,
  NEW_REMINDER_SAVE_SUCCEEDED
} from '../constants'
import { addReminder } from '../action-creators/reminders'
const url = process.env.REACT_APP_BASE_URL + '/maintenances'

export const setMaintenances = async (dispatch, getState) => {
  const maintenances = await fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err))

  dispatch({ type: SET_MAINTENANCES, payload: maintenances })
}

export const getMaintenance = id => dispatch => {
  fetch(`${url}/${id}`)
    .then(res => res.json())
    .then(maintenance =>
      dispatch({ type: GET_CURRENT_MAINTENANCE, payload: maintenance })
    )
    .catch(err => console.log(err))
}

// export const addMaintenance = history => async (dispatch, getState) => {
//   const createdMaintenance = getState().newMaintenance.data
//   console.log('Created Maintenance ', JSON.stringify(createdMaintenance))
//   dispatch({ type: NEW_MAINTENANCE_SAVE_STARTED })
//   const result = await fetch(url, {
//     headers: { 'Content-Type': 'application/json' },
//     method: 'POST',
//     body: JSON.stringify()
//   })
//     .then(res => res.json(createdMaintenance))
//     .catch(err =>
//       dispatch({
//         type: NEW_MAINTENANCE_SAVE_FAILED,
//         payload: 'Unexpected Error.  Please try again.'
//       })
//     )
//   console.log('result', JSON.stringify(result))
//   if (result.ok) {
//     console.log('in happy maintenace')
//     dispatch({
//       type: NEW_MAINTENANCE_SAVE_SUCCEEDED
//     })
//     if (createdMaintenance.reminderCreated === true) {
//       await dispatch(addReminder(history))
//       setMaintenances(dispatch, getState)
//       history.push('/maintenaces')
//     }
//     setMaintenances(dispatch, getState)
//     history.push('/maintenances')
//   } else {
//     console.log('in err branch')
//     dispatch({
//       type: NEW_MAINTENANCE_SAVE_FAILED,
//       payload: 'Unexpected Error.  Please try again.'
//     })
//   }
// }

export const addMaintenance = history => async (dispatch, getState) => {
  const createdMaintenance = getState().newMaintenance.data
  console.log('Created Maintenance ', JSON.stringify(createdMaintenance))
  dispatch({ type: NEW_MAINTENANCE_SAVE_STARTED })
  const result = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(createdMaintenance)
  })
    .then(res => res.json())
    .catch(err =>
      dispatch({
        type: NEW_MAINTENANCE_SAVE_FAILED,
        payload: 'Unexpected Error.  Please try again.'
      })
    )
  console.log('result', JSON.stringify(result))
  if (result.ok) {
    if (createdMaintenance.reminderCreated === 'Y' || 'y') {
      await dispatch(addReminder(createdMaintenance, history))
      setMaintenances(dispatch, getState)
      history.push('/maintenaces')
    }

    console.log('in happy maintenace')
    dispatch({
      type: NEW_MAINTENANCE_SAVE_SUCCEEDED
    })
    console.log(
      'reminder created',
      JSON.stringify(createdMaintenance.reminderCreated === 'y')
    )

    setMaintenances(dispatch, getState)
    history.push('/maintenances')
  } else {
    console.log('in err branch')
    dispatch({
      type: NEW_MAINTENANCE_SAVE_FAILED,
      payload: 'Unexpected Error.  Please try again.'
    })
  }
}
