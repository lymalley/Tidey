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

{
  /*
import React from 'react'
import PropType from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import {Link} from 'react-router-dom'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import IconButton from '@material-ui/core/IconButton'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Typography from '@material-ui/core/Typography'
import Cyan from '@material-ui/core/colors/cyan'
import ExpandIcon from '@material-ui/icons/ExpandMoreTwoTone'
*/
}
