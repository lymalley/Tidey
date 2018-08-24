import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar'
import { head } from 'ramda'
import { Link } from 'react-router-dom'

const MaintenanceListItems = maintenance => (
  <div key={maintenance._id}>
    <ListItem>
      <ListItemText>
        <Typography variant="headline">
          {`${maintenance.boat} ${maintenance.date}`}
        </Typography>
        <Typography variant="caption">{maintenance.serviceType}</Typography>
      </ListItemText>
    </ListItem>

    <Divider />
  </div>
)

export default MaintenanceListItems

{
  /*const MaintenanceListItems = maintenance => (
  <div key={maintenance._id}>
    <Link to={`/maintenances/${maintenance._id}`} className="router-link">
      <ListItem button>
        <ListItemText>
          <Typography variant="headline">
            {`${maintenance.boat} ${maintenance.date}`}
          </Typography>
          <Typography variant="caption">{maintenance.serviceType}</Typography>
        </ListItemText>
      </ListItem>
    </Link>
    <Divider />
  </div>
)*/
}
