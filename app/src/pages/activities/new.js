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
import { NEW_ACTIVITY_FORM_UPDATED, DRAWER_TOGGLED } from '../../constants'
import { addActivity } from '../../action-creators/activities'
import Select from '@material-ui/core/Select'
import CustomSnackBar from '../../components/customSnackBar'
import Input from '@material-ui/core/Select'
import { setCrew } from '../../action-creators/crew'
import { setBoats } from '../../action-creators/boats'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { MenuItem, FormHelperText } from '@material-ui/core'
import CrewSelects from '../../components/crewMemberCard'
import { withRouter } from 'react-router-dom'
import NativeSelect from '@material-ui/core/NativeSelect'
import TimePicker from '../../components/timePicker'

const styles = theme => ({
  input: {
    width: '95%',
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 8
  },
  inputShrSm: {
    width: '25%',
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 8
  },
  inputShrLg: {
    width: '70%',
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 8
  },
  root: {
    flexGrow: 1
  },

  button: {
    ...theme.typography.button,
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing.unit
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
})

const ActivityNew = props => {
  this.state = {
    boat: { ...this.props }
  }
  const vessels = [
    {
      value: 'orange-crush',
      label: 'Orange Crush'
    },
    {
      value: 'max-fly',
      label: 'Max Fly'
    }
  ]

  return (
    <center>
      <div style={{ paddingTop: 20 }} className={props.classes.root}>
        <Paper className={props.classes.paper}>
          {!props.isFetching ? (
            <React.Fragment>
              <Paper>
                <MenuAppBar
                  title="Add Activity"
                  color="primary"
                  backArrow={true}
                  history={props.history}
                />

                <form
                  className="form-horizontal"
                  style={{ marginTop: 40 }}
                  autoComplete="off"
                  onSubmit={props.createActivity(props.history)}
                >
                  <div className="form-group">
                    <TextField
                      label="Date"
                      value={props.activity.date}
                      margin="normal"
                      onChange={e => props.onChange('date', e.target.value)}
                      required
                      className={props.classes.input}
                    />
                    {/*
                    <TextField
                      label="Start Time"
                      value={props.activity.startTime}
                      margin="normal"
                      onChange={e =>
                        props.onChange('startTime', e.target.value)
                      }
                      required
                      className={props.classes.input}


                         <TextField
                      label="End Time"
                      value={props.activity.endTime}
                      margin="normal"
                      onChange={e => props.onChange('endTime', e.target.value)}
                      required
                      className={props.classes.input}
                    />
                    />*/}
                    <Grid container spacing={24}>
                      <Grid item xs={6}>
                        <div className={props.classes.paper}>
                          {'Start Time * '}
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <TimePicker
                          label="Start Time"
                          value={props.activity.startTime}
                          className={props.classes.paper}
                          margin="normal"
                          required
                          onChange={e =>
                            props.onChange('startTime', e.target.value)
                          }
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={24}>
                      <Grid item xs={6}>
                        <div className={props.classes.paper}>
                          {'End Time * '}
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <TimePicker
                          label="End Time"
                          value={props.activity.endTime}
                          className={props.classes.paper}
                          margin="normal"
                          onChange={e =>
                            props.onChange('endTime', e.target.value)
                          }
                          required
                          onChange={e =>
                            props.onChange('endTime', e.target.value)
                          }
                        />
                      </Grid>
                    </Grid>
                  </div>
                  {/*    <TextField
                    label="Boat"
                    value={props.activity.boat}
                    margin="normal"
                    onChange={e => props.onChange('boat', e.target.value)}
                    required
                    className={props.classes.input}
             />*/}

                  <Grid container spacing={24}>
                    <Grid item xs={4}>
                      <div className={props.classes.paper}>{'Boat: '}</div>
                    </Grid>
                    <Grid item xs={8}>
                      <NativeSelect
                        // {...boats}
                        field="boat"
                        select
                        label="Boat Name"
                        InputLabelProps={{
                          shrink: true
                        }}
                        margin="normal"
                        value={props.activity.boat}
                        onChange={e => props.onChange('boat', e.target.value)}
                        input={<Input name="boatName" id="boatName" />}
                        required
                        className={props.classes.paper}
                      >
                        {vessels.map(option => (
                          <option value={option.value} key={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </NativeSelect>
                    </Grid>
                  </Grid>

                  <Grid container spacing={24}>
                    <Grid item xs={6}>
                      <TextField
                        label="Starting Engine Hours"
                        value={props.activity.engineHoursStart}
                        margin="normal"
                        onChange={e =>
                          props.onChange('engineHoursStart', e.target.value)
                        }
                        className={props.classes.paper}
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <TextField
                        label="Ending Engine Hours"
                        value={props.activity.engineHoursEnd}
                        margin="normal"
                        onChange={e =>
                          props.onChange('engineHoursEnd', e.target.value)
                        }
                        required
                        className={props.classes.paper}
                      />
                    </Grid>
                  </Grid>

                  <TextField
                    label="Trip Type"
                    value={props.activity.tripType}
                    margin="normal"
                    required
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
                    onChange={e =>
                      props.onChange('passengerCount', e.target.value)
                    }
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

                  {/*     <Select
                    {...props.crewMember}
                    field="mate"
                    select
                    label="Mate"
                    InputLabelProps={{
                      shrink: true
                    }}
                    margin="normal"
                    value={props.activity.mate}
                    onChange={e =>
                      setCrew(props.onChange('mate', e.target.value))
                    }
                    input={<Input name="mate" id="crewMember" />}
                    required
                    className={props.classes.input}
                  >
                    <MenuItem>
                      <CrewSelects />
                    </MenuItem>
                  </Select> */}

                  <TextField
                    label="Crew"
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

                  {/*   <TextField
                    label="Photo"
                    value={props.activity.image}
                    margin="normal"
                    type="file"
                    onChange={e => props.onChange('image', e.target.value)}
                    className={props.classes.input}
             />*/}

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
                      varient="button"
                      color="white"
                      type="submit"
                      aria-label="add"
                      aria-label="Add Crew Member"
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
              </Paper>
              {props.isError && (
                <CustomSnackBar message={props.errMessage} snackType="error" />
              )}
              {props.isSaving && (
                <CustomSnackBar message="Saving..." snackType="info" />
              )}
            </React.Fragment>
          ) : (
            <p>Adding Activity...</p>
          )}
        </Paper>
      </div>
    </center>
  )
}

const mapStateToProps = state => ({
  boat: state.currentBoat,
  boats: state.getBoats,
  crewMember: state.currentCrewMember,
  activity: state.newActivity.data,
  isSaving: state.newActivity.isSaving,
  isError: state.newActivity.isError,
  errMessage: state.newActivity.errMessage,
  drawer: state.drawer
})

const mapActionToProps = dispatch => {
  return {
    //  getBoat: () => dispatch(getBoat),
    //  setBoats: () => dispatch(setBoats),
    onChange: (key, value) => {
      dispatch({ type: NEW_ACTIVITY_FORM_UPDATED, payload: { [key]: value } })
    },
    setCrew: () => dispatch(setCrew),
    createActivity: history => e => {
      e.preventDefault()
      dispatch(addActivity(history))
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

export default withRouter(
  withDrawer(connector(withStyles(styles)(ActivityNew)))
)

{
  /*<TextField label='notes' value='' margin='normal' required className={props.classes.input} multiline/>*/
}
