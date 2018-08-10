import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import WavesIcon from '@material-ui/icons/WavesOutlined'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { DRAWER_TOGGLED } from '../constants'

const styles = theme => ({
  root: {
    width: '100%'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 12
  },
  lastButton: {
    marginLeft: 12,
    marginRight: -12
  }
})

const MenuAppBar = props => {
  const { classes, toggleDrawer, title } = props
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            onClick={toggleDrawer}
          >
            <WavesIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            {title}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
const mapStateToProps = state => ({})

const mapActionToProps = dispatch => ({
  toggleDrawer: () => dispatch({ type: DRAWER_TOGGLED })
})
const connector = connect(
  mapStateToProps,
  mapActionToProps
)

export default connector(withStyles(styles)(MenuAppBar))
