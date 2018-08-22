import {
  SET_BOATS,
  GET_CURRENT_BOAT,
  NEW_BOAT_SAVE_STARTED,
  NEW_BOAT_SAVE_FAILED,
  NEW_BOAT_SAVE_SUCCEEDED,
  NEW_BOAT_CLEARED,
  NEW_BOAT_FORM_UPDATED,
  EDIT_REMINDER_CLEARED,
  EDIT_REMINDER_UPDATED,
  EDIT_REMINDER_SAVE_STARTED,
  EDIT_REMINDER_SAVE_SUCCEEDED,
  EDIT_REMINDER_SAVE_FAILED,
  EDIT_REMINDER_ERROR_CLEARED
} from '../constants'
import { merge, mergeDeepRight } from 'ramda'

export const getBoats = (state = [], action) => {
  switch (action.type) {
    case SET_BOATS:
      return action.payload
    default:
      return state
  }
}

const defaultBoat = {
  name: '',
  image: null,
  boatMake: '',
  boatModel: '',
  boatYear: '',
  lengthFt: '',
  beamFt: '',
  hullMaterial: '',
  engineHours: '',
  engine1MakeModel: '',
  additionalInfo: ''
}

export const currentBoat = (state = defaultBoat, action) => {
  switch (action.type) {
    case GET_CURRENT_BOAT:
      return action.payload
    default:
      return state
  }
}

const newBoatInitialState = {
  data: {
    name: '',
    image: null,
    boatMake: '',
    boatModel: '',
    boatYear: '',
    lengthFt: '',
    beamFt: '',
    hullMaterial: '',
    engineHours: '',
    engine1MakeModel: '',
    additionalInfo: ''
  },
  isSaving: false,
  isError: false,
  errorMsg: ''
}

export const newBoat = (state = newBoatInitialState, action) => {
  switch (action.type) {
    case NEW_BOAT_FORM_UPDATED:
      return mergeDeepRight(state, { data: action.payload })
    case NEW_BOAT_SAVE_STARTED:
      return merge(state, {
        isSaving: true,
        isError: false,
        errorMsg: ''
      })
    case NEW_BOAT_SAVE_FAILED:
      return merge(state, {
        isSaving: false,
        isError: true,
        errorMsg: action.payload
      })
    case NEW_BOAT_SAVE_SUCCEEDED:
      return newBoatInitialState
    case NEW_BOAT_CLEARED:
      return newBoatInitialState
    default:
      return state
  }
}

const initialEditBoat = {
  data: {
    _id: null,
    name: '',
    image: null,
    boatMake: '',
    boatModel: '',
    boatYear: '',
    lengthFt: '',
    beamFt: '',
    hullMaterial: '',
    engineHours: '',
    engine1MakeModel: '',
    additionalInfo: ''
  },
  isSaving: false,
  isError: false,
  errorMsg: ''
}

export const editBoat = (state = initialEditBoat, action) => {
  switch (action.type) {
    case EDIT_REMINDER_CLEARED:
      return initialEditBoat
    case EDIT_REMINDER_UPDATED:
      return mergeDeepRight(state, { data: action.payload })
    case EDIT_REMINDER_SAVE_STARTED:
      return merge(state, {
        isError: false,
        errorMsg: '',
        isSaving: true
      })
    case EDIT_REMINDER_SAVE_SUCCEEDED:
      return merge(state, {
        isError: false,
        errorMsg: '',

        isSaving: false
      })
    case EDIT_REMINDER_SAVE_FAILED:
      return merge(state, {
        isError: true,
        errorMsg: action.payload,
        isSaving: false
      })
    case EDIT_REMINDER_ERROR_CLEARED:
      return initialEditBoat
    default:
      return state
  }
}
