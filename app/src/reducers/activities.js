import { SET_ACTIVITIES, GET_CURRENT_ACTIVITY } from '../constants'

export const activities = (state = [], action) => {
  switch (action.type) {
    case SET_ACTIVITIES:
      return action.payload
    default:
      return state
  }
}

const initialCurrentActivity = {
  data: {
    _id: null,
    rev: null,
    type: 'activity',
    date: '',
    startTime: '',
    endTime: '',
    boat: '',
    engineHoursStart: '',
    engineHoursEnd: '',
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
    case GET_CURRENT_ACTIVITY:
      return action.payload
    default:
      return state
  }
}
