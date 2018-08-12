import {
  NEW_MAINTENANCE_SAVE_STARTED,
  NEW_MAINTENANCE_SAVE_FAILED,
  NEW_MAINTENANCE_SAVE_SUCCEEDED,
  NEW_MAINTENANCE_CLEARED,
  NEW_MAINTENANCE_FORM_UPDATED
} from '../constants'
import { merge, mergeDeepRight } from 'ramda'

const newMaintenanceInitialState = {
  data: {
    firstName: '',
    lastName: '',
    image: null,
    title: '',
    email: '',
    phone: ''
  },
  isSaving: false,
  isError: false,
  errorMsg: ''
}

export const newMaintenance = (state = newMaintenanceInitialState, action) => {
  switch (action.type) {
    case NEW_MAINTENANCE_FORM_UPDATED:
      return mergeDeepRight(state, { data: action.payload })
    case NEW_MAINTENANCE_SAVE_STARTED:
      return merge(state, {
        isSaving: true,
        isError: false,
        errorMsg: ''
      })
    case NEW_MAINTENANCE_SAVE_FAILED:
      return merge(state, {
        isSaving: false,
        isError: true,
        errorMsg: action.payload
      })
    case NEW_MAINTENANCE_SAVE_SUCCEEDED:
      return newMaintenanceInitialState
    case NEW_MAINTENANCE_CLEARED:
      return newMaintenanceInitialState
    default:
      return state
  }
}
