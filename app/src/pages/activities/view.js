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
import icon from '@material-ui/icons/CalendarToday'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  },
  media: {
    width: '15%',
    display: 'flex',
    justifyContent: 'space-around'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  }
})

class ActivityView extends React.Component {
  componentDidMount() {
    const { getActivity, match } = this.props

    this.props.getActivity(this.props.match.params.id)
  }
  render() {
    const { isLoading, history, activity, classes } = this.props
    return (
      <div style={{ paddingTop: 20 }}>
        <Paper
          className={classes.gridLists}
          elevation={2}
          style={{
            marginTop: 56,
            padding: 10
          }}
        >
          <MenuAppBar
            title="Activity"
            color="primary"
            backArrow={true}
            history={history}
          />
          <form className="form-horizontal">
            <Grid container>
              <Typography>{activity.date}</Typography>
              <Paper>
                <Grid item xs={12}>
                  <Typography>Start Time: {activity.startTime}</Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography>End Time: {activity.EndTime}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>Boat: {activity.boat}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>
                    Passenger Count: {activity.passengerCount}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>Trip Type: {activity.tripType}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>Captain: {activity.captain}</Typography>
                </Grid>
              </Paper>
            </Grid>

            <Grid container>
              <Grid item xs={12}>
                <Typography>Crew: {activity.other}</Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography>Cruise From: {activity.cruiseFrom}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>CruiseTo: {activity.cruiseTo}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  `Engine Hours: {activity.engineHoursStart}-
                  {activity.engineHoursEnd}`
                </Typography>
              </Grid>
            </Grid>
            <br />

            <Grid container spacing={24}>
              <Paper>
                <Grid item xs={12}>
                  <Typography>Weather Conditions {activity.weather}</Typography>
                </Grid>
              </Paper>
            </Grid>

            <Grid container spacing={24}>
              <Paper>
                <Grid item xs={12}>
                  <Typography component="p">
                    Trip Notes {activity.tripNotes}
                  </Typography>
                </Grid>
              </Paper>
            </Grid>

            <Grid container>
              <Grid item xs={6}>
                <Typography>
                  Created Reminder: {activity.createdReminder}
                </Typography>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  activities: state.getActivities,
  activity: state.currentActivity,
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
