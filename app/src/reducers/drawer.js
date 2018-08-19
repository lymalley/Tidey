import { DRAWER_TOGGLED, DRAWER_OPENED, DRAWER_CLOSED } from '../constants'

export const drawer = (state = { open: false }, action) => {
  switch (action.type) {
    case DRAWER_TOGGLED:
      return { open: !state.open }
    case DRAWER_OPENED:
      return { open: true }
    case DRAWER_CLOSED:
      return { open: false }

    default:
      return state
  }
}
