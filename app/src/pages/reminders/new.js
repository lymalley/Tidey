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
import NativeSelect from '@material-ui/core/NativeSelect'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import { NEW_REMINDER_FORM_UPDATED } from '../../constants'
import { addReminder } from '../../action-creators/reminders'
import { subtract } from 'ramda'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  input: {
    width: '95%',
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 8
  },
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: 'theme.palette.text.secondary'
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
})

const ReminderNew = props => {
  return (
    <div style={{ paddingTop: 20 }}>
      <MenuAppBar
        title="Add Reminder"
        color="primary"
        history={props.history}
      />
      <Paper className={props.classes.paper}>
        <Grid container>
          <form
            style={{ marginTop: 50 }}
            autoComplete="off"
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
              value={props.reminder.boat}
              margin="normal"
              onChange={e => props.onChange('boat', e.target.value)}
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
            <FormControl className={props.classes.formControl}>
              <NativeSelect
                className={props.classes.selectEmpty}
                value={props.reminder.remindHrsBefore}
                label="Hours Before to Remind"
                margin="normal"
                onChange={e =>
                  props.onChange('remindHrsBefore', e.target.value)
                }
              >
                <option value="" disabled>
                  Placeholder
                </option>
                <option value={1}>One</option>
                <option value={5}>Five</option>
                <option value={10}>Ten</option>
                <option value={15}>Fifteen</option>
                <option value={20}>Twenty</option>
              </NativeSelect>
              <FormHelperText>Select Hours</FormHelperText>
            </FormControl>

            <TextField
              label="Alert Set For"
              value={
                (props.reminder.alertAt = subtract(
                  props.reminder.dueAtHours,
                  props.reminder.remindHrsBefore
                ))
              }
              margin="normal"
              onChange={e => props.onChange('alertAt', e.target.value)}
              required
              className={props.classes.input}
            />
            {/*    <TextField
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
        /> */}
            <TextField
              label="Entered By"
              value={props.reminder.enteredBy}
              margin="normal"
              onChange={e => props.onChange('enteredBy', e.target.value)}
              required
              className={props.classes.input}
            />
            <div>
              <Button
                varient="button"
                color="white"
                type="submit"
                aria-label="Add Reminder"
                style={{
                  background:
                    'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                  borderRadius: 3,
                  border: 0,
                  padding: '0 30px',
                  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
                }}
              >
                <SaveIcon /> Save
              </Button>
            </div>
          </form>
        </Grid>
      </Paper>
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
