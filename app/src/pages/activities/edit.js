import React from 'react'
import withDrawer from '../../components/with-drawer'
import MenuAppBar from '../../components/menuAppBar'
import Paper from '@material-ui/core/Paper'
import { connect } from 'react-redux'
import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import {
  EDIT_ACTIVITY_UPDATED,
  DRAWER_TOGGLED,
  EDIT_ACTIVITY_CLEARED
} from '../../constants'
import { updateActivity, getActivity } from '../../action-creators/activities'
import CustomSnackBar from '../../components/customSnackBar'
import classNames from 'classnames'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  input: {
    width: '50%',
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 8
  },
  textInput: {
    flex: 1,
    flexDirection: 'row',
    textAlign: 'left',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    backgroundColor: 'white',
    opacity: 0.9
  },
  textInputContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
    }
  },
  bootstrapFormLabel: {
    fontSize: 18
  }
})

class ActivityEdit extends React.Component {
  componentDidMount() {
    const { getActivity, id } = this.props

    getActivity(id)
  }

  render() {
    const {
      isLoading,
      isError,
      errorMsg,
      isSaving,
      clearEditEvent,
      getEvent,
      saveEvent,
      match,
      classes,
      history,
      activity,
      onChange
    } = this.props

    if (activity._id === match.params.id) {
      return (
        <center>
          <div style={{ paddingTop: 56 }} className="container">
            <MenuAppBar title="Edit Activity" goBack goBackURL="/activities" />

            <Paper className={classes.root} elevation={1}>
              <form
                id={match.params.id}
                label="Date"
                value={activity.date}
                margin="normal"
                onChange={e => onChange('date', e.target.value)}
                required
                className={classes.input}
              />

              <TextField
                label="Start Time"
                value={activity.startTime}
                margin="normal"
                onChange={e => onChange('startTime', e.target.value)}
                required
                className={classes.input}
              />

              <TextField
                label="End Time"
                value={activity.endTime}
                margin="normal"
                onChange={e => onChange('endTime', e.target.value)}
                required
                className={classes.input}
              />
              <TextField
                label="Boat"
                value={activity.boat}
                margin="normal"
                onChange={e => onChange('boat', e.target.value)}
                required
                className={classes.input}
              />
              <TextField
                label="Starting Engine Hours"
                value={activity.engineHoursStart}
                margin="normal"
                onChange={e => onChange('engineHoursStart', e.target.value)}
                className={classes.input}
              />
              <TextField
                label="Ending Engine Hours"
                value={activity.engineHoursEnd}
                margin="normal"
                onChange={e => onChange('engineHoursEnd', e.target.value)}
                required
                className={classes.input}
              />
              <TextField
                label="Trip Type"
                value={activity.tripType}
                margin="normal"
                onChange={e => onChange('tripType', e.target.value)}
                className={classes.input}
              />
              <TextField
                label="Weather"
                value={activity.Weather}
                margin="normal"
                onChange={e => onChange('weather', e.target.value)}
                className={classes.input}
              />
              <TextField
                label="Cruise From"
                value={activity.cruiseFrom}
                margin="normal"
                onChange={e => onChange('cruiseFrom', e.target.value)}
                className={classes.input}
              />
              <TextField
                label="Cruise To"
                value={activity.cruiseTo}
                margin="normal"
                onChange={e => onChange('cruiseTo', e.target.value)}
                className={classes.input}
              />
              <TextField
                label="Passender Count"
                value={activity.passengerCount}
                margin="normal"
                onChange={e => onChange('passengerCount', e.target.value)}
                required
                className={classes.input}
              />

              <TextField
                label="Captain"
                value={activity.captain}
                margin="normal"
                onChange={e => onChange('captain', e.target.value)}
                required
                className={classes.input}
              />
              <TextField
                label="Mate"
                value={activity.mate}
                margin="normal"
                onChange={e => onChange('mate', e.target.value)}
                className={classes.input}
              />
              <TextField
                label="Other Crew"
                value={activity.other}
                margin="normal"
                onChange={e => onChange('other', e.target.value)}
                className={classes.input}
              />
              <TextField
                label="Trip Notes"
                value={activity.tripNotes}
                margin="normal"
                onChange={e => onChange('tripNotes', e.target.value)}
                multiline
                className={classes.input}
              />

              <TextField
                label="Photo"
                value={activity.image}
                margin="normal"
                type="file"
                onChange={e => onChange('image', e.target.value)}
                className={classes.input}
              />

              <TextField
                label="Entered By"
                value={activity.enteredBy}
                margin="normal"
                onChange={e => onChange('enteredBy', e.target.value)}
                required
                className={classes.input}
              />

              <div>
                <Button
                  variant="contained"
                  size="small"
                  className={classes.button}
                >
                  <SaveIcon
                    className={classNames(classes.leftIcon, classes.iconSmall)}
                  />
                  Save
                </Button>
                {isLoading && (
                  <CustomSnackBar
                    message="Retrieving Activity"
                    snackType="info"
                    duration={1000}
                  />
                )}

                {isError && (
                  <CustomSnackBar message={errorMsg} snackType="error" />
                )}
                {/*<Button
                variant="extendedFab"
                color="secondary"
                type="submit"
                aria-label="add"
                className="fab-button"
              >
                <SaveIcon />
              </Button>*/}
              </div>
            </Paper>
          </div>
        </center>
      )
    }
  }
}

const mapStateToProps = state => ({
  activity: state.editActivity.data,
  isLoading: state.editActivity.isLoading,
  isSaving: state.editActivity.isSaving,
  isError: state.editActivity.isError,
  errMessage: state.editActivity.errMessage,
  drawer: state.drawer
})

const mapActionToProps = dispatch => {
  return {
    clearEditActivity: dispatch({ type: EDIT_ACTIVITY_CLEARED }),
    getActivity: id => dispatch(getActivity(id)),
    saveActivity: history => e => {
      e.preventDefault()
      dispatch(updateActivity(history))
    },
    onChange: (key, value) => {
      dispatch({ type: EDIT_ACTIVITY_UPDATED, payload: { [key]: value } })
    },
    closeDrawer: () => {
      dispatch({ type: DRAWER_TOGGLED })
    }
  }
}

const connector = connect(
  mapStateToProps,
  mapActionToProps
)

export default withDrawer(connector(withStyles(styles)(ActivityEdit)))
