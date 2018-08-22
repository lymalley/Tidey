export const addMaintenance = history => (dispatch, getState) => {
  dispatch({ type: NEW_MAINTENANCE_SAVE_STARTED })

  const newMaintenance = getState().newMaintenance

  fetch(`${url}/maintenances`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(newMaintenance)
  })
    .then(res => res.json())
    .then(saveResponse => {
      if (!saveResponse.ok) {
        dispatch({
          type: NEW_MAINTENANCE_SAVE_FAILED,
          payload: 'Could not save the MAINTENANCE.'
        })
      } else {
        dispatch({ type: NEW_MAINTENANCE_SAVE_SUCCEEDED })
        
        // get the maintence item back out of the database.
        // post the reminder to the database

        //history.push("/")
      }
    })
    .catch(err =>
      dispatch({
        type: NEW_MAINTENANCE_SAVE_FAILED,
        payload:
          'Unexpected error prevented us from saving the event. Please try again.'
      })
    )
}
