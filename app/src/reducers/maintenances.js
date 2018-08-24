import {
  SET_MAINTENANCES,
  GET_CURRENT_MAINTENANCE,
  NEW_MAINTENANCE_SAVE_STARTED,
  NEW_MAINTENANCE_SAVE_FAILED,
  NEW_MAINTENANCE_SAVE_SUCCEEDED,
  NEW_MAINTENANCE_CLEARED,
  NEW_MAINTENANCE_FORM_UPDATED
} from '../constants'
import { merge, mergeDeepRight } from 'ramda'

export const getMaintenances = (state = [], action) => {
  switch (action.type) {
    case SET_MAINTENANCES:
      return action.payload
    default:
      return state
  }
}

const defaultMaintenance = {
  date: '',
  boat: '',
  serviceType: '',
  performedBy: '',
  location: '',
  engineHours: '',
  materials: '',
  totalCost: '',
  comments: '',

  reminderCreated: '',
  dueAtHours: '',
  hrsBefore: '',
  enteredBy: ''
}

export const currentMaintenance = (state = defaultMaintenance, action) => {
  switch (action.type) {
    case GET_CURRENT_MAINTENANCE:
      return action.payload
    default:
      return state
  }
}

const now = new Date()
const today = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`

const newMaintenanceInitialState = {
  data: {
    date: today,
    boat: '',
    serviceType: '',
    performedBy: '',
    location: '',
    engineHours: '',
    materials: '',
    totalCost: '',
    comments: '',

    reminderCreated: '',
    dueAtHours: '',
    hrsBefore: '',
    enteredBy: ''
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
