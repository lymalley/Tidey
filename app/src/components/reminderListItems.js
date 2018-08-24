import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing.unit
  }
})

const ReminderListItems = reminder => (
  <div key={reminder._id}>
    <ListItem>
      <Typography variant="Title">
        {`${reminder.boat} ${reminder.alertAt} ${reminder.service}`}
      </Typography>
    </ListItem>

    <Divider />
  </div>
)

export default ReminderListItems
