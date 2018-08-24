import React from 'react'
import MenuAppBar from '../../components/menuAppBar'
import withDrawer from '../../components/with-drawer'
import { connect } from 'react-redux'
import {
  Grid,
  Paper,
  ListItem,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Card,
  CardMedia
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import ActivityListItem from '../../components/activityListItems'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import { getActivity } from '../../action-creators/activities'
import {
  CardContent,
  Typography
} from '../../../node_modules/@material-ui/core'

import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: '95%'
  },
  },
  table: {
    minWidth: '95%'
  }
})

class ActivityView extends React.Component {
  componentDidMount() {
    const { getActivity, match } = this.props
    getActivity(match.params._id)
  }
  render() {



    <center>
    <div style={{ paddingTop: 20 }} className={props.classes.root}>
      <Paper className={props.classes.paper}>
        {!props.isFetching ? (
          <React.Fragment>
          
              <MenuAppBar
                title="Activity"
                color="primary"
                backArrow={true}
                history={props.history}
              />

              <Paper
                className="form-horizontal"
                style={{ marginTop: 40 }}
 
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





























    const { history, isLoading, classes, activity, activities } = this.props
    return (
      <div style={{ paddingTop: 56 }}>
        <center>
          <MenuAppBar
            backArrow={true}
            goBackURL="/activities"
            title="Activity"
            style={{ padding: 56 }}
          />
    
          <Paper style={{ padding: '10%' }}>
            <Grid container>
              <Grid item xs={6}>
                <Typography>{activity.date}</Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                <Typography>{`Start Time: ${activity.startTime}`}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>{`End Time ${activity.endTime}`}</Typography>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={6}>
                <Typography>{`Boat: ${activity.boat}`}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>{`Trip Type ${activity.tripType}`}</Typography>
              </Grid>
            </Grid>
          </Paper>
        </center>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  activities: state.getActivities,
  activity: state.currentActivity.data,
  isLoading: state.currentActivity.isLoading
})

const mapActionsToProps = dispatch => ({
  getActivity: id => dispatch(getActivity(id))
})

const connector = connect(
  mapStateToProps,
  mapActionsToProps
)

export default withDrawer(connector(withStyles(styles)(ActivityView)))
