import React from 'react'
import Drawer from '@material-ui/core/Drawer'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/HomeTwoTone'
import ActivityIcon from '@material-ui/icons/RowingTwoTone'
import BoatIcon from '@material-ui/icons/DirectionsBoatTwoTone'
import CrewIcon from '@material-ui/icons/PeopleTwoTone'
import MaintenanceIcon from '@material-ui/icons/BuildTwoTone'
import ReminderIcon from '@material-ui/icons/EventNoteTwoTone'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { DRAWER_TOGGLED } from '../constants'
import { Divider } from '../../node_modules/@material-ui/core'

const TideyListItem = (
  <div>
    <Link to="/" className="router-link">
      <ListItem>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Dock" />
      </ListItem>
    </Link>
    <Link to="/activities" className="router-link">
      <ListItem>
        <ListItemIcon>
          <ActivityIcon />
        </ListItemIcon>
        <ListItemText secondary="Activities" />
      </ListItem>
    </Link>
    <Link to="/boats" className="router-link">
      <ListItem>
        <ListItemIcon>
          <BoatIcon />
        </ListItemIcon>
        <ListItemText secondary="Boats" />
      </ListItem>
    </Link>
    <Link to="/crew" className="router-link">
      <ListItem>
        <ListItemIcon>
          <CrewIcon />
        </ListItemIcon>
        <ListItemText secondary="Crew" />
      </ListItem>
    </Link>
    <Link to="/maintenances" className="router-link">
      <ListItem>
        <ListItemIcon>
          <MaintenanceIcon />
        </ListItemIcon>
        <ListItemText secondary="Maintenances" />
      </ListItem>
    </Link>
    <Divider />>
    <Link to="/reminders" className="router-link">
      <ListItem>
        <ListItemIcon>
          <ReminderIcon />
        </ListItemIcon>
        <ListItemText secondary="Reminders" />
      </ListItem>
    </Link>
  </div>
)
const withDrawer = function(PageComponent) {
  const WrappedDrawerComponent = props => {
    return (
      <div>
        <PageComponent {...props} />
        <Drawer open={props.open} onClose={props.toggleDrawer}>
          <div tabIndex={0} role="button">
            {TideyListItem}
          </div>
        </Drawer>
      </div>
    )
  }
  const mapStateToProps = state => {
    return { open: state.drawer.open }
  }

  const mapActionToProps = dispatch => {
    return {
      toggleDrawer: () => {
        dispatch({ type: DRAWER_TOGGLED })
      }
    }
  }
  const connector = connect(
    mapStateToProps,
    mapActionToProps
  )

  return connector(WrappedDrawerComponent)
}

export default withDrawer
