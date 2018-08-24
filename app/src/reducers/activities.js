import {
  SET_ACTIVITIES,
  GET_CURRENT_ACTIVITY,
  NEW_ACTIVITY_SAVE_FAILED,
  NEW_ACTIVITY_SAVE_STARTED,
  NEW_ACTIVITY_SAVE_SUCCEEDED,
  NEW_ACTIVITY_CLEARED,
  NEW_ACTIVITY_FORM_UPDATED,
  EDIT_ACTIVITY_CLEARED,
  EDIT_ACTIVITY_UPDATED,
  EDIT_ACTIVITY_TOGGLED,
  EDIT_ACTIVITY_SAVE_STARTED,
  EDIT_ACTIVITY_SAVE_SUCCEEDED,
  EDIT_ACTIVITY_SAVE_FAILED,
  EDIT_ACTIVITY_ERROR_CLEARED,
  ACTIVITY_LOADING_STARTED,
  ACTIVITY_LOADING_FAILED,
  ACTIVITY_LOADING_SUCCEEDED
} from '../constants'
import { merge, mergeDeepRight } from 'ramda'
import Today from '../lib/today'
import TimeNow from '../lib/rightNow'

export const getActivities = (state = [], action) => {
  switch (action.type) {
    case SET_ACTIVITIES:
      return action.payload
    default:
      return state
  }
}

const initialCurrentActivity = {
  id: '',
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

export const currentActivity = (state = initialCurrentActivity, action) => {
  switch (action.type) {
    case GET_CURRENT_ACTIVITY:
      return action.payload
    default:
      return state
  }
}

const newActivityInitialState = {
  data: {
    date: Today,
    startTime: '',
    endTime: TimeNow,
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

const editActivityInitialState = {
  data: {
    _id: null,
    _rev: null,
    type: null,
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

  isError: false,
  isSaving: false,
  isLoading: false,
  errorMsg: ''
}

export const editActivity = (state = editActivityInitialState, action) => {
  switch (action.type) {
    case EDIT_ACTIVITY_CLEARED:
      return editActivityInitialState
    case EDIT_ACTIVITY_UPDATED:
      return mergeDeepRight(state, { data: action.payload })
    case EDIT_ACTIVITY_SAVE_STARTED:
      return merge(state, {
        isError: false,
        isLoading: false,
        errorMsg: '',
        isSaving: true
      })
    case EDIT_ACTIVITY_SAVE_SUCCEEDED:
      return merge(state, {
        isError: false,
        errorMsg: '',
        isLoading: false,
        isSaving: false
      })
    case EDIT_ACTIVITY_SAVE_FAILED:
      return merge(state, {
        isError: true,
        errorMsg: action.payload,
        isLoading: false,
        isSaving: false
      })
    case EDIT_ACTIVITY_ERROR_CLEARED:
      return editActivityInitialState

    case ACTIVITY_LOADING_STARTED:
      return merge(state, {
        isError: false,
        errorMsg: '',
        isLoading: true,
        isSaving: false
      })
    case ACTIVITY_LOADING_FAILED:
      return merge(state, {
        isError: true,
        errorMsg: action.payload,
        isLoading: false,
        isSaving: false
      })
    case ACTIVITY_LOADING_SUCCEEDED:
      return mergeDeepRight(state, { data: action.payload })
    default:
      return state
  }
}
