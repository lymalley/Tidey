import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { DRAWER_TOGGLED } from '../constants'

const TideyListItem = (
  <div>
    <Link to="/" className="router-link">
      <ListItem>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
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
