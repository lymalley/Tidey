import React from 'react'
import withDrawer from '../../components/with-drawer'
import MenuAppBar from '../../components/menuAppBar'

import { connect } from 'react-redux'
import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import { NEW_REMINDER_FORM_UPDATED } from '../../constants'
import { addReminder } from '../../action-creators/reminders'
import lightBlue from '@material-ui/core/colors/blue'

const styles = theme => ({
  input: {
    width: '50%',
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 8
  }
})

const theme = createMuiTheme({
  palette: {
    primary: lightBlue
  }
})

const ReminderNew = props => {
  return (
    <div style={{ paddingTop: 20 }}>
      <MuiThemeProvider theme={theme}>
        <MenuAppBar title="Add Reminder" color="primary" />
      </MuiThemeProvider>
      <form
        style={{ marginTop: 50 }}
        autocomplete="off"
        onSubmit={props.createReminder(props.history)}
      >
        <TextField
          label="Date"
          value={props.reminder.date}
          margin="normal"
          onChange={e => props.onChange('date', e.target.value)}
          required
          className={props.classes.input}
        />
        <TextField
          label="Boat Name"
          value={props.reminder.boatName}
          margin="normal"
          onChange={e => props.onChange('boatName', e.target.value)}
          required
          className={props.classes.input}
        />
        <TextField
          label="Alert Set For"
          value={props.reminder.alertAt}
          margin="normal"
          onChange={e => props.onChange('alertAt', e.target.value)}
          required
          className={props.classes.input}
        />
        <TextField
          label="Service Needed"
          value={props.reminder.service}
          margin="normal"
          onChange={e => props.onChange('service', e.target.value)}
          required
          className={props.classes.input}
        />
        <TextField
          label="Hours Due At"
          value={props.reminder.dueAtHours}
          margin="normal"
          onChange={e => props.onChange('dueAtHours', e.target.value)}
          className={props.classes.input}
        />
        <TextField
          label="Hours Before to Remind"
          value={props.reminder.remindHrsBefore}
          margin="normal"
          onChange={e => props.onChange('remindHrsBefore', e.target.value)}
          className={props.classes.input}
        />
        <TextField
          label="Completed"
          value={props.reminder.completed}
          margin="normal"
          onChange={e => props.onChange('completed', e.target.value)}
          required
          className={props.classes.input}
        />
        <TextField
          label="Start Maintenance Log"
          value={props.reminder.startMaint}
          margin="normal"
          onChange={e => props.onChange('startMaint', e.target.value)}
          className={props.classes.input}
        />

        <TextField
          label="Entered By"
          value={props.reminder.enteredBy}
          margin="normal"
          onChange={e => props.onChange('enteredBy', e.target.value)}
          required
          className={props.classes.input}
        />
        <Button
          variant="fab"
          color="primary"
          type="submit"
          aria-label="add"
          className="fab-button"
        >
          <SaveIcon />
        </Button>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  reminder: state.newReminder.data,
  isSaving: state.newReminder.isSaving,
  isError: state.newReminder.isError,
  errMessage: state.newReminder.errMessage
})

const mapActionToProps = dispatch => ({
  onChange: (field, value) =>
    dispatch({ type: NEW_REMINDER_FORM_UPDATED, payload: { [field]: value } }),
  createReminder: history => e => {
    e.preventDefault()
    dispatch(addReminder(history))
  }
})

const connector = connect(
  mapStateToProps,
  mapActionToProps
)

export default withDrawer(connector(withStyles(styles)(ReminderNew)))
