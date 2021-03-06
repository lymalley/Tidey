import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar'
import { head } from 'ramda'
import { Link } from 'react-router-dom'

const BoatListItem = boat => (
  <div key={boat._id}>
    <Link to={`/boat/${boat._id}`} className="router-link">
      <ListItem button>
        <ListItemIcon>
          <Avatar>{head(boat.name)}</Avatar>
        </ListItemIcon>
        <ListItemText>
          <Typography variant="headline">{boat.name}</Typography>
        </ListItemText>
      </ListItem>
    </Link>
    <Divider />
  </div>
)

export default BoatListItem
