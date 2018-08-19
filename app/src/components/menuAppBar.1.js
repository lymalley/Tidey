import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import GoBack from '@material-ui/icons/ChevronLeftOutlined'
import SearchIcon from '@material-ui/icons/SearchTwoTone'
import WavesIcon from '@material-ui/icons/WavesOutlined'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { DRAWER_TOGGLED } from '../constants'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import lightBlue from '@material-ui/core/colors/lightBlue'
import orange from '@material-ui/core/colors/deepOrange'
import home2 from '../pages/home2'

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

const MenuAppBar = props => {
  const { classes, toggleDrawer, title, history, home } = props
  return (
    <div className={classes.root}>
      <center>
        <MuiThemeProvider theme={theme}>
          <AppBar position="fixed" color="primary">
            <Toolbar>
              <React.Fragment>
                {props.backArrow ? (
                  <IconButton onClick={e => history.goBack()}>
                    <GoBack
                      className={classes.firstButton}
                      style={{ fontSize: '30', color: 'white' }}
                    />
                  </IconButton>
                ) : (
                  <IconButton
                    className={classes.firstButton}
                    color="inherit"
                    onClick={toggleDrawer}
                  >
                    <WavesIcon />
                  </IconButton>
                )}
              </React.Fragment>

              <Typography
                variant="title"
                color="inherit"
                className={classes.flex}
              >
                {title}
              </Typography>
            </Toolbar>
          </AppBar>
        </MuiThemeProvider>
      </center>
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

{
  /*     <Typography variant="title" color="inherit" className={classes.flex}>{title}</Typography>
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
*/
}



import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import GoBack from '@material-ui/icons/ChevronLeftOutlined'
import SearchIcon from '@material-ui/icons/SearchTwoTone'
import WavesIcon from '@material-ui/icons/WavesOutlined'
import BoatIcon from '@material-ui/icons/DirectionsBoatSharp'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { DRAWER_TOGGLED } from '../constants'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import lightBlue from '@material-ui/core/colors/lightBlue'
import orange from '@material-ui/core/colors/deepOrange'
import home2 from '../pages/home2'

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

const MenuAppBar = props => {
  const { classes, toggleDrawer, title, history, home } = props

  if (home) 
  return (
    <div className={classes.root}>
      <center>
        <MuiThemeProvider theme={theme}>
          <AppBar position="static"  >
            <Toolbar>
            <IconButton
                    className={classes.firstButton}
                    color="secondary"
                    onClick={toggleDrawer}
                  >
                    <WavesIcon />
                  </IconButton>

                    <IconButton className={classes.lastButton} color="inherit">
              <SearchIcon />
            </IconButton>
            <Icon
                variant="title"
                color="secondary"
                className={classes.flex}
              >
                <BoatIcon/>
              </Icon>

            </Toolbar>
          </AppBar>
        </MuiThemeProvider>
      </center>
    </div>
  )
}





              <React.Fragment>
                {props.backArrow ? (
                  <IconButton onClick={e => history.goBack()}>
                    <GoBack
                      className={classes.firstButton}
                      style={{ fontSize: '30', color: 'white' }}
                    />
                  </IconButton>
                ) : (
                  
                )}
              </React.Fragment>

              <Typography
                variant="title"
                color="inherit"
                className={classes.flex}
              >
                {title}
              </Typography>
 
const mapStateToProps = state => ({})

const mapActionToProps = dispatch => ({
  toggleDrawer: () => dispatch({ type: DRAWER_TOGGLED })
})
const connector = connect(
  mapStateToProps,
  mapActionToProps
)

export default connector(withStyles(styles)(MenuAppBar))

{
  /*     <Typography variant="title" color="inherit" className={classes.flex}>{title}</Typography>
          
*/
}