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
          <Card className={classes.card}>
            <CardContent>
              <center>
                <Typography className={classes.title} color="textSecondary">
                  {activity.date} Start Time: {activity.startTime} End Time:{' '}
                  {activity.EndTime}
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                  Boat: {activity.boat} Trip Type: {activity.tripType} Passenger
                  Count: {activity.passengerCount}
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                  Captain: {activity.captain} Crew: {activity.other}
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                  Cruise From: {activity.cruiseFrom} CruiseTo:{' '}
                  {activity.cruiseTo}
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                  Engine Hours: {activity.engineHoursStart}-
                  {activity.engineHoursEnd}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Weather Conditions {activity.weather}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Trip Notes {activity.tripNotes}
                </Typography>
              </center>
              <Typography component="p">
                Entered By {activity.enteredBy}
              </Typography>
            </CardContent>
          </Card>
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
