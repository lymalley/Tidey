import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar'
import { head } from 'ramda'
import { Link } from 'react-router-dom'

const CrewListItems = crewMember => (
  <div key={crewMember._id}>
    <Link to={`/crew/${crewMember._id}`} className="router-link">
      <ListItem button>
        <ListItemIcon>
          <Avatar>{head(crewMember.lastName)}</Avatar>
        </ListItemIcon>
        <ListItemText>
          <Typography variant="headline">
            {`${crewMember.firstName} ${crewMember.lastName}`}
          </Typography>
          <Typography variant="caption">{crewMember.title}</Typography>
        </ListItemText>
      </ListItem>
    </Link>
    <Divider />
  </div>
)

export default CrewListItems
