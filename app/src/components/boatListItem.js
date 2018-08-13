import React from 'react'
import { connect } from 'react-redux'
import ListItem from '@material-ui/core/ListItem'
import Icon from '@material-ui/core/Icon'
import ListItemText from '@material-ui/core/ListItemText'
import List from '@material-ui/core/List'
import { Link } from 'react-router-dom'

const BoatListItem = activity => {
  return (
    <Link to={`/boats/${boat._id}`} className="router-link">
      <ListItem button>
        <Icon style={{ color: 'grey' }}>{boat.icon}</Icon>
        <ListItemText primary={boat.boatName} />
      </ListItem>
    </Link>
  )
}

export default BoatListItem
