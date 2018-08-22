import {
  SET_REMINDERS,
  GET_CURRENT_REMINDER,
  NEW_REMINDER_SAVE_STARTED,
  NEW_REMINDER_SAVE_FAILED,
  NEW_REMINDER_SAVE_SUCCEEDED,
  NEW_REMINDER_CLEARED,
  NEW_REMINDER_FORM_UPDATED,
  REMINDER_LOADING_SUCCEEDED,
  REMINDER_LOADING_FAILED,
  REMINDER_LOADING_STARTED,
  EDIT_REMINDER_ERROR_CLEARED,
  EDIT_REMINDER_SAVE_FAILED,
  EDIT_REMINDER_SAVE_SUCCEEDED,
  EDIT_REMINDER_SAVE_STARTED,
  EDIT_REMINDER_UPDATED,
  EDIT_REMINDER_CLEARED
} from '../constants'
import { merge, mergeDeepRight } from 'ramda'
import Today from '../lib/today'

export const getReminders = (state = [], action) => {
  switch (action.type) {
    case SET_REMINDERS:
      return action.payload
    default:
      return state
  }
}
const initialCurrentReminder = {
  date: Today,
  boatName: 'Orange Crush',
  alertAt: '',
  service: '',
  dueAtHours: '',
  remindHrsBefore: 10,
  completed: false,
  startMaint: false,
  enteredBy: ''
}

export const currentReminder = (state = initialCurrentReminder, action) => {
  switch (action.type) {
    case GET_CURRENT_REMINDER:
      return action.payload
    default:
      return state
  }
}

const newReminderInitialState = {
  data: {
    date: Today,
    boatName: 'Orange Crush',
    alertAt: '',
    service: '',
    dueAtHours: '',
    remindHrsBefore: 10,
    completed: false,
    startMaint: false,
    enteredBy: ''
  },
  isSaving: false,
  isError: false,
  errorMsg: ''
}

export const newReminder = (state = newReminderInitialState, action) => {
  switch (action.type) {
    case NEW_REMINDER_FORM_UPDATED:
      return mergeDeepRight(state, { data: action.payload })
    case NEW_REMINDER_SAVE_STARTED:
      return merge(state, {
        isSaving: true,
        isError: false,
        errorMsg: ''
      })
    case NEW_REMINDER_SAVE_FAILED:
      return merge(state, {
        isSaving: false,
        isError: true,
        errorMsg: action.payload
      })
    case NEW_REMINDER_SAVE_SUCCEEDED:
      return newReminderInitialState
    case NEW_REMINDER_CLEARED:
      return newReminderInitialState
    default:
      return state
  }
}

const editReminderInitialState = {
  data: {
    date: '',
    boatName: '',
    alertAt: '',
    service: '',
    dueAtHours: '',
    remindHrsBefore: '',
    completed: false,
    startMaint: false,
    enteredBy: ''
  },
  isSaving: false,
  isError: false,
  errorMsg: ''
}

export const editReminder = (state = editReminderInitialState, action) => {
  switch (action.type) {
    case EDIT_REMINDER_CLEARED:
      return editReminderInitialState
    case EDIT_REMINDER_UPDATED:
      return mergeDeepRight(state, { data: action.payload })
    case EDIT_REMINDER_SAVE_STARTED:
      return merge(state, {
        isError: false,
        isLoading: false,
        errorMsg: '',
        isSaving: true
      })
    case EDIT_REMINDER_SAVE_SUCCEEDED:
      return merge(state, {
        isError: false,
        errorMsg: '',
        isLoading: false,
        isSaving: false
      })
    case EDIT_REMINDER_SAVE_FAILED:
      return merge(state, {
        isError: true,
        errorMsg: action.payload,
        isLoading: false,
        isSaving: false
      })
    case EDIT_REMINDER_ERROR_CLEARED:
      return editReminderInitialState

    case REMINDER_LOADING_STARTED:
      return merge(state, {
        isError: false,
        errorMsg: '',
        isLoading: true,
        isSaving: false
      })
    case REMINDER_LOADING_FAILED:
      return merge(state, {
        isError: true,
        errorMsg: action.payload,
        isLoading: false,
        isSaving: false
      })
    case REMINDER_LOADING_SUCCEEDED:
      return mergeDeepRight(state, { data: action.payload })
    default:
      return state
  }
}
