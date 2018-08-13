import {
  NEW_BOAT_SAVE_STARTED,
  NEW_BOAT_SAVE_FAILED,
  NEW_BOAT_SAVE_SUCCEEDED,
  NEW_BOAT_CLEARED,
  NEW_BOAT_FORM_UPDATED
} from '../constants'
import { merge, mergeDeepRight } from 'ramda'

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
    numOfEngines: 1,
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
