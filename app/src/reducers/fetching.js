import { FETCHING_STARTED, FETCHING_DONE } from '../constants'

export const fetching = (state = { isFetching: false }, action) => {
  switch (action.type) {
    case FETCHING_STARTED:
      return { isFetching: true }
    case FETCHING_DONE:
      return { isFetching: false }
    default:
      return state
  }
}
