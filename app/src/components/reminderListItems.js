import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar'
import { head } from 'ramda'
import { Link } from 'react-router-dom'

const ReminderListItems = reminder => (
  <div key={reminder._id}>
    <Link to={`/reminders/${reminder._id}`} className="router-link">
      <ListItem button>
        <ListItemText>
          <Typography variant="headline">
            {`${reminder.boatName} ${reminder.alertAt}`}
          </Typography>
          <Typography variant="caption">{reminder.service}</Typography>
        </ListItemText>
      </ListItem>
    </Link>
    <Divider />
  </div>
)

export default ReminderListItems
