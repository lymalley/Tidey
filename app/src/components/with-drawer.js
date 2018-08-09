import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import { Link } from 'react-router-dom'

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
        <Drawer open={true}>
          <div tabIndex={0} role="button">
            {TideyListItem}
          </div>
        </Drawer>
      </div>
    )
  }
  return WrappedDrawerComponent
}

export default withDrawer
