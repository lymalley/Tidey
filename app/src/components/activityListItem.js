import React from 'react'
import { connect } from 'react-redux'
import ListItem from '@material-ui/core/ListItem'
import Icon from '@material-ui/core/Icon'
import ListItemText from '@material-ui/core/ListItemText'
import List from '@material-ui/core/List'
import { Link } from 'react-router-dom'

const ActivityListItem = activity => {
  return (
    <Link to={`/activities/${activity._id}`} className="router-link">
      <ListItem button>
        <Icon style={{ color: 'grey' }}>{activity.icon}</Icon>
        <ListItemText
          primary={activity.boatName}
          secondary={(activity.date, activity.startTime, activity.tripType)}
        />
      </ListItem>
    </Link>
  )
}

export default ActivityListItem
