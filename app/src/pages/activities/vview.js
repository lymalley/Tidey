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

const ActivityView = props => {
  ;<div style={{ paddingTop: 20 }}>
    <Paper className={props.classes.paper}>
      <MenuAppBar
        title="Activity"
        color="primary"
        backArrow={true}
        history={props.history}
      />
      <Paper
        elevation={2}
        className={props.classes.root}
        style={{ marginTop: 40 }}
      >
        <Typography variant="title">{props.activity.date}</Typography>

        <Grid item xs={12}>
          <Typography>Start Time: {props.activity.startTime}</Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography>End Time: {props.activity.EndTime}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>Boat: {props.activity.boat}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Passenger Count: {props.activity.passengerCount}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>Trip Type: {props.activity.tripType}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>Captain: {props.activity.captain}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>Crew: {props.activity.other}</Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography>Cruise From: {props.activity.cruiseFrom}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>CruiseTo: {props.activity.cruiseTo}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            `Engine Hours: ${props.activity.engineHoursStart}
            -$
            {props.activity.engineHoursEnd}`
          </Typography>
        </Grid>

        <Grid container spacing={24}>
          <Paper>
            <Grid item xs={12}>
              <Typography>
                Weather Conditions ${props.activity.weather}
              </Typography>
            </Grid>
          </Paper>
        </Grid>

        <Grid container spacing={24}>
          <Paper>
            <Grid item xs={12}>
              <Typography component="p">
                Trip Notes ${props.activity.tripNotes}
              </Typography>
            </Grid>
          </Paper>
        </Grid>

        <Grid container>
          <Grid item xs={6}>
            <Typography>
              Created Reminder: ${props.activity.createdReminder}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Paper>
  </div>
}

export default ActivityView
