import {
  SET_ACTIVITIES,
  GET_ACTIVITY,
  NEW_ACTIVITY_SAVE_FAILED,
  NEW_ACTIVITY_SAVE_STARTED,
  NEW_ACTIVITY_SAVE_SUCCEEDED,
  NEW_ACTIVITY_CLEARED,
  NEW_ACTIVITY_FORM_UPDATED
} from '../constants'
import { merge, mergeDeepRight } from 'ramda'
import Today from '../lib/today'

export const getActivities = (state = [], action) => {
  switch (action.type) {
    case SET_ACTIVITIES:
      return action.payload
    default:
      return state
  }
}

const initialCurrentActivity = {
  data: {
    date: '',
    startTime: '',
    endTime: '',
    boat: '',
    engineHoursStart: '',
    engineHoursEnd: '',
    weather: '',
    tripType: '',
    cruiseFrom: '',
    cruiseTo: '',
    passengerCount: '',
    captain: '',
    mate: '',
    other: '',
    tripNotes: '',
    images: null,
    enteredBy: ''
  }
}

export const currentActivity = (state = initialCurrentActivity, action) => {
  switch (action.type) {
    case GET_ACTIVITY:
      return action.payload
    default:
      return state
  }
}

const newActivityInitialState = {
  data: {
    date: Today,
    startTime: '',
    endTime: '',
    boat: '',
    engineHoursStart: '',
    engineHoursEnd: '',
    weather: '',
    tripType: '',
    cruiseFrom: '',
    cruiseTo: '',
    passengerCount: '',
    captain: '',
    mate: '',
    other: '',
    tripNotes: '',
    images: null,
    enteredBy: ''
  },
  isSaving: false,
  isError: false,
  errorMsg: ''
}

export const newActivity = (state = newActivityInitialState, action) => {
  switch (action.type) {
    case NEW_ACTIVITY_FORM_UPDATED:
      return mergeDeepRight(state, { data: action.payload })
    case NEW_ACTIVITY_SAVE_STARTED:
      return merge(state, {
        isSaving: true,
        isError: false,
        errorMsg: ''
      })
    case NEW_ACTIVITY_SAVE_FAILED:
      return merge(state, {
        isSaving: false,
        isError: true,
        errorMsg: action.payload
      })
    case NEW_ACTIVITY_SAVE_SUCCEEDED:
      return newActivityInitialState
    case NEW_ACTIVITY_CLEARED:
      return newActivityInitialState
    default:
      return state
  }
}
