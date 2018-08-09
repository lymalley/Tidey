import { DRAWER_TOGGLED } from '../constants'

const defaultDrawer = {
  open: false
}

export const drawer = (state = defaultDrawer, action) => {
  switch (action.type) {
    case DRAWER_TOGGLED:
      return { open: !state.open }

    default:
      return state
  }
}
