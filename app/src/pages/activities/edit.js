import React from 'react'
import withDrawer from '../../components/with-drawer'
import MenuAppBar from '../../components/menuAppBar'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import { EDIT_ACTIVITY_UPDATED, DRAWER_TOGGLED } from '../../constants'
import { updateActivity } from '../../action-creators/activities'
import lightBlue from '@material-ui/core/colors/blue'
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
    // borderWidth:1,
    // borderColor:'transparent',
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

const theme = createMuiTheme({
  palette: {
    primary: lightBlue
  }
})

const ActivityEdit = props => {
  const { classes } = props
  return (
    <center>
      <MuiThemeProvider theme={theme}>
        <div style={{ paddingTop: 56 }} className="container">
          <Paper className={classes.root} elevation={1}>
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
      </MuiThemeProvider>
    </center>
  )
}

const mapStateToProps = state => ({
  activity: state.editActivity.data,
  isSaving: state.editActivity.isSaving,
  isError: state.editActivity.isError,
  errMessage: state.editActivity.errMessage,
  drawer: state.drawer
})

const mapActionToProps = dispatch => {
  return {
    onChange: (key, value) => {
      dispatch({ type: EDIT_ACTIVITY_UPDATED, payload: { [key]: value } })
    },
    createActivity: history => e => {
      e.preventDefault()
      dispatch(updateActivity(history))
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
