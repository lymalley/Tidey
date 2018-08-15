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
import { NEW_ACTIVITY_FORM_UPDATED } from '../../constants'
import { addActivity } from '../../action-creators/activities'
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

const ActivityNew = props => {
  return (
    <div style={{ paddingTop: 20 }}>
      <MuiThemeProvider theme={theme}>
        <MenuAppBar title="Add Activity" color="primary" />
      </MuiThemeProvider>
      <form
        style={{ marginTop: 50 }}
        autocomplete="off"
        onSubmit={props.createActivity(props.history)}
      >
        <TextField
          label="Date"
          value={props.activity.date}
          margin="normal"
          onChange={e => props.onChange('date', e.target.value)}
          required
          className={props.classes.input}
        />

        <TextField
          label="Start Time"
          value={props.activity.startTime}
          margin="normal"
          onChange={e => props.onChange('startTime', e.target.value)}
          required
          className={props.classes.input}
        />
        <TextField
          label="End Time"
          value={props.activity.endTime}
          margin="normal"
          onChange={e => props.onChange('endTime', e.target.value)}
          required
          className={props.classes.input}
        />
        <TextField
          label="Boat"
          value={props.activity.boat}
          margin="normal"
          onChange={e => props.onChange('boat', e.target.value)}
          required
          className={props.classes.input}
        />
        <TextField
          label="Starting Engine Hours"
          value={props.activity.engineHoursStart}
          margin="normal"
          onChange={e => props.onChange('engineHoursStart', e.target.value)}
          className={props.classes.input}
        />
        <TextField
          label="Ending Engine Hours"
          value={props.activity.engineHoursEnd}
          margin="normal"
          onChange={e => props.onChange('engineHoursEnd', e.target.value)}
          required
          className={props.classes.input}
        />
        <TextField
          label="Trip Type"
          value={props.activity.tripType}
          margin="normal"
          onChange={e => props.onChange('tripType', e.target.value)}
          className={props.classes.input}
        />
        <TextField
          label="Weather"
          value={props.activity.Weather}
          margin="normal"
          onChange={e => props.onChange('weather', e.target.value)}
          className={props.classes.input}
        />
        <TextField
          label="Cruise From"
          value={props.activity.cruiseFrom}
          margin="normal"
          onChange={e => props.onChange('cruiseFrom', e.target.value)}
          className={props.classes.input}
        />
        <TextField
          label="Cruise To"
          value={props.activity.cruiseTo}
          margin="normal"
          onChange={e => props.onChange('cruiseTo', e.target.value)}
          className={props.classes.input}
        />
        <TextField
          label="Passender Count"
          value={props.activity.passengerCount}
          margin="normal"
          onChange={e => props.onChange('passengerCount', e.target.value)}
          required
          className={props.classes.input}
        />

        <TextField
          label="Captain"
          value={props.activity.captain}
          margin="normal"
          onChange={e => props.onChange('captain', e.target.value)}
          required
          className={props.classes.input}
        />
        <TextField
          label="Mate"
          value={props.activity.mate}
          margin="normal"
          onChange={e => props.onChange('mate', e.target.value)}
          className={props.classes.input}
        />
        <TextField
          label="Other Crew"
          value={props.activity.other}
          margin="normal"
          onChange={e => props.onChange('other', e.target.value)}
          className={props.classes.input}
        />
        <TextField
          label="Trip Notes"
          value={props.activity.tripNotes}
          margin="normal"
          onChange={e => props.onChange('tripNotes', e.target.value)}
          multiline
          className={props.classes.input}
        />

        <TextField
          label="Photo"
          value={props.activity.image}
          margin="normal"
          type="file"
          onChange={e => props.onChange('image', e.target.value)}
          className={props.classes.input}
        />

        <TextField
          label="Entered By"
          value={props.activity.enteredBy}
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
  activity: state.newActivity.data,
  isSaving: state.newActivity.isSaving,
  isError: state.newActivity.isError,
  errMessage: state.newActivity.errMessage
})

const mapActionToProps = dispatch => ({
  onChange: (field, value) =>
    dispatch({ type: NEW_ACTIVITY_FORM_UPDATED, payload: { [field]: value } }),
  createActivity: history => e => {
    e.preventDefault()
    dispatch(addActivity(history))
  }
})

const connector = connect(
  mapStateToProps,
  mapActionToProps
)

export default withDrawer(connector(withStyles(styles)(ActivityNew)))

{
  /*<TextField label='notes' value='' margin='normal' required className={props.classes.input} multiline/>*/
}
