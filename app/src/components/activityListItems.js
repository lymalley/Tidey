import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar'
import { head } from 'ramda'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'

const ActivityListItems = activity => (
  <div key={activity._id}>
    <Link to={`/activities/${activity._id}`} className="router-link">
      <ListItem button>
        <ListItemText>
          <Typography variant="headline">
            {`${activity.boatName} ${activity.date}`}
          </Typography>
          <Typography variant="caption">{`${activity.tripType} ${
            activity.startTime
          }-${activity.endTime}`}</Typography>
        </ListItemText>
      </ListItem>
    </Link>
    <Divider />
  </div>
)

export default ActivityListItems
