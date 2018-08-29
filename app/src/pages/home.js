import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles'
import lightBlue from '@material-ui/core/colors/lightBlue'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { props, head } from 'ramda'
import Button from '@material-ui/core/Button'
import { setForecast } from '../action-creators/weather'
import { Link } from 'react-router-dom'
import withDrawer from '../components/with-drawer'
import MenuAppBar from '../components/menuAppBar'

import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid
} from '@material-ui/core'

const styles = (theme: MuiTheme) => ({
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
  autocompleteWrapper: {
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

  render(props) {
    return (
      <div style={{ padding: 48 }}>
        <center>
          <Typography variant="display4">tidey</Typography>
          <MenuAppBar title="Home Port" color="primary" />
          <h3>Weather Forcast</h3>
          <Card
            style={{ paddingTop: '20%' }}
            title="Weather Forecast"
            //src={darksky}
          >
            <CardContent title="Weather Forecast" />
            <CardMedia
              title="Current Forecast"
              width="100%"
              height="100%"
              frameBorder="20"
              style={{ paddingTop: 48 }}
              //src={darksky}
              src="https://api.darksky.net/forecast/e6ccdb81bd1c974f7e5e55914bd85169/32.8052,-79.7597"
              allowFullScreen
            >
              Put Weather Here
            </CardMedia>
          </Card>

          <div style={{ paddingTop: 30, paddingTop: 30 }} />
        </center>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  forecast: state.getForecast.data
})

const mapActionsToProps = dispatch => ({
  setForecast: () => dispatch(setForecast)
})

const connector = connect(
  mapStateToProps,
  mapActionsToProps
)

export default withDrawer(connector(withStyles(styles)(Home)))
