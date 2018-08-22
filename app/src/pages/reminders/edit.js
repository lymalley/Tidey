import React from 'react'
import { connect } from 'react-redux'
import { CircularProgress, withStyles } from '@material-ui/core'

import MenuAppBar from '../../components/menuAppBar'

import SnackBar from '../../components/customSnackBar'

import { updateReminder, getReminder } from '../../action-creators/reminders'
import {
  EDIT_REMINDER_TOGGLE,
  EDIT_REMINDER_ERROR_CLEAR,
  EDIT_REMINDER_SAVE_FAILED
} from '../../constants'
import Card from '@material-ui/core/Card'

const styles = theme => ({
  card: {
    paddingTop: '10%'
  },
  actions: { justifyContent: 'flex-end' }
})

class ReminderEdit extends React.Component {
  componentDidMount() {
    const { getReminder, id, updateReminder } = this.props
    updateReminder()
    getReminder(id)
  }

  render() {
    const {
      match,
      history,

      onChange,
      onSubmit,
      toggleForm,
      reminder,
      errorClear,
      isSaving,
      isError,
      errMsg
    } = this.props

    if (reminder._id !== match.reminder.id) {
      return (
        <center>
          <MenuAppBar backArrow history={history} title="Edit Reminder" />

          {isError && <SnackBar type="error" msg={errMsg} />}
        </center>
      )
    }

    return (
      <div>
        <MenuAppBar backArrow title="Edit Reminder" />

        <Card
          id={match.params.id}
          onChange={onChange}
          onSubmit={onSubmit(match.params.id, history)}
          toggleForm={toggleForm}
          formClear={() => null}
          reminder={reminder}
          className="overlay"
        />

        {isError && <SnackBar type="error" msg={errMsg} close={errorClear} />}
        {isSaving && <SnackBar type="info" msg="Updating your reminder..." />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  id: state.currentReminder.data,
  reminder: state.updateReminder.data,

  isSaving: state.updateReminder.isSaving,
  isError: state.updateReminder.isError,
  errMsg: state.updateReminder.errMsg
})

const mapActionsToProps = dispatch => ({
  setReminder: reminder => dispatch(getReminder(reminder)),
  onChange: (field, value) => {
    dispatch(updateReminder(field, value))
  },
  onSubmit: (id, history) => e => {
    e.preventDefault()
    dispatch(updateReminder(id, history))
  },
  toggleForm: e => dispatch({ type: EDIT_REMINDER_TOGGLE }),
  errorClear: () => dispatch({ type: EDIT_REMINDER_ERROR_CLEAR })
})

const connector = connect(
  mapStateToProps,
  mapActionsToProps
)

export default connector(withStyles(styles)(ReminderEdit))
