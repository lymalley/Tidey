import {
  NEW_CREW_SAVE_STARTED,
  NEW_CREW_SAVE_FAILED,
  NEW_CREW_SAVE_SUCCEEDED,
  NEW_CREW_CLEARED,
  NEW_CREW_FORM_UPDATED
} from '../constants'
import { merge, mergeDeepRight } from 'ramda'

const newCrewInitialState = {
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

export const newCrewMember = (state = newCrewInitialState, action) => {
  switch (action.type) {
    case NEW_CREW_FORM_UPDATED:
      return mergeDeepRight(state, { data: action.payload })
    case NEW_CREW_SAVE_STARTED:
      return merge(state, {
        isSaving: true,
        isError: false,
        errorMsg: ''
      })
    case NEW_CREW_SAVE_FAILED:
      return merge(state, {
        isSaving: false,
        isError: true,
        errorMsg: action.payload
      })
    case NEW_CREW_SAVE_SUCCEEDED:
      return newCrewInitialState
    case NEW_CREW_CLEARED:
      return newCrewInitialState
    default:
      return state
  }
}
