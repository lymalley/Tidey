import { SET_ACTIVITIES, GET_ACTIVITY } from '../constants'

export const activities = (state = [], action) => {
  switch (action.type) {
    case SET_ACTIVITIES:
      return action.payload
    default:
      return state
  }
}

const now = new Date()

const today = `${now.getMonth() + 1}/${now.getFullYear()}`

const initialCurrentActivity = {
  data: {
    _id: null,
    rev: null,
    type: 'activity',
    date: today,
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
    case GET_ACTIVITY:
      return action.payload
    default:
      return state
  }
}
