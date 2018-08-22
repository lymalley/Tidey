import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import GoBack from '@material-ui/icons/ArrowBackIosOutlined'
import SearchIcon from '@material-ui/icons/SearchTwoTone'
import WavesIcon from '@material-ui/icons/WavesOutlined'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { DRAWER_TOGGLED } from '../constants'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import lightBlue from '@material-ui/core/colors/lightBlue'
import orange from '@material-ui/core/colors/deepOrange'
import HomeIcon from '@material-ui/icons/HomeRounded'
import EditIcon from '@material-ui/icons/EditRounded'

const styles = theme => ({
  root: {
    width: '100%'
  },
  flex: {
    flex: 1
  },
  firstButton: {
    marginLeft: -12,
    marginRight: 12
  },
  lastButton: {
    marginLeft: 12,
    marginRight: -12
  }
})

const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
    secondary: orange
  }
})

const ViewAppBar = props => {
  const { classes, toggleDrawer, title, history, home } = props
  return (
    <div className={classes.root}>
      <center>
        <MuiThemeProvider theme={theme}>
          <AppBar position="fixed" color="primary">
            <Toolbar>
              <IconButton onClick={e => history.goBack()}>
                <GoBack
                  className={classes.firstButton}
                  style={{ fontSize: '25' }}
                />
              </IconButton>

              <Typography
                variant="title"
                color="inherit"
                className={classes.flex}
              >
                {title}
              </Typography>
              <IconButton
                className={classes.lastButton}
                onClick={e => history('/edit')}
              >
                <EditIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </MuiThemeProvider>
      </center>
    </div>
  )
}

export default withStyles(styles)(ViewAppBar)
