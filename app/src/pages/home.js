import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import ListItem from '@material-ui/core/ListItem'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { map } from 'ramda'
import List from '@material-ui/core/List'
import { setForecast } from '../action-creators/weather'
import { Link } from 'react-router-dom'
import withDrawer from '../components/with-drawer'
import MenuAppBar from '../components/menuAppBar'
import ReminderListItems from '../components/reminderListItems'
import Popup from '../components/popup'

import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid
} from '@material-ui/core'

const styles = theme => ({
  root: {},
  errorRoot: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '40vh',
    textAlign: 'center'
  },
  hidden: {
    display: 'none'
  },
  suggestions: {
    width: '100%'
  },
  suggestion: {
    padding: `${theme.spacing.unit / 2}px ${theme.spacing.unit}px`,
    cursor: 'pointer'
  },
  activeSuggestion: {
    backgroundColor: theme.palette.action.selected
  },
  autoCompleteWrapper: {
    marginBottom: theme.spacing.unit * 2
  },
  unitsSelectWrapper: {
    marginBottom: theme.spacing.unit * 2,
    maxWidth: 300
  }
})

class Home extends React.Component {
  componentDidMount() {
    const { setForecast } = this.props

    setForecast()
  }

  render() {
    const { reminder } = this.props
    return (
      <div style={{ padding: 48 }}>
        <center>
          <Typography variant="display4">tidey</Typography>
          <MenuAppBar color="primary" />
          <br />
          <img alt="home" src="speed.png" />

          <Paper style={{ width: '95%' }}>
            <br />
            <h1>Service Reminders</h1>

            <ListItem button>
              <List>
                {map(
                  reminder => ReminderListItems(reminder),
                  this.props.reminders
                )}
              </List>
            </ListItem>
          </Paper>
        </center>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  forecast: state.getForecast.data,
  reminders: state.getReminders
})

const mapActionsToProps = dispatch => ({
  setForecast: () => dispatch(setForecast)
})

const connector = connect(
  mapStateToProps,
  mapActionsToProps
)

export default withDrawer(connector(withStyles(styles)(Home)))
