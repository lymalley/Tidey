import React from 'react'
import { withRouter } from 'react-router-dom'
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
import AddIcon from '@material-ui/icons/AddCircleOutlined'
import EditIcon from '@material-ui/icons/EditRounded'
import Button from '@material-ui/core/Button'
import Notification from '@material-ui/icons/Notifications'
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
  const {
    classes,
    toggleDrawer,
    title,
    history,
    goToURL,
    goBackURL,
    searchURL,
    editURL,
    addNew
  } = props
  return (
    <div className={classes.root}>
      <center>
        <MuiThemeProvider theme={theme}>
          <AppBar position="fixed" color="primary">
            <Toolbar>
              <React.Fragment>
                {props.backArrow ? (
                  <IconButton
                    onClick={e =>
                      goBackURL ? history.push(goBackURL) : history.goBack()
                    }
                  >
                    <GoBack
                      className={classes.firstButton}
                      style={{ fontSize: '30', color: 'darkPurple' }}
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

              <React.Fragment>
                {props.search ? (
                  <Button
                    variant="fab"
                    mini
                    color="secondary"
                    className={classes.lastButton}
                    onClick={e => history.push(goToURL)}
                  >
                    <SearchIcon />
                  </Button>
                ) : props.edit ? (
                  <IconButton onClick={e => history.push(goToURL)}>
                    <EditIcon className={classes.lastButton} />
                  </IconButton>
                ) : props.addNew ? (
                  <Button
                    variant="fab"
                    mini
                    color="secondary"
                    className={classes.lastButton}
                    onClick={e => history.push(goToURL)}
                  >
                    <AddIcon />
                  </Button>
                ) : props.notification ? (
                  <Notification />
                ) : null}
              </React.Fragment>
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

export default connector(withRouter(withStyles(styles)(MenuAppBar)))

{
  /* <React.Fragment>
                {props.searchButton ? (
                  <IconButton onClick={e => history.push(searchURL)}>
                    <SearchIcon className={classes.lastButton} />
                  </IconButton>
                ) : (
                  <IconButton onClick={e => history.push(editURL)}>
                    <EditIcon className={classes.lastButton} />
                  </IconButton>
                )}
              </React.Fragment>*/
}
