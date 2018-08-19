import React from 'react'
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
const DarkSky = require('dark-sky')

//const darksky = new DarkSky(process.env.REACT_APP_DARK_SKY)
const darksky = `${process.env.REACT_APP_DARK_SKY}32.8052,-79.7597`
console.log({ darksky })

const styles = theme => ({
  input: {
    width: '50%',
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 8
  }
})

const Home = props => (
  <div style={{ padding: 48 }}>
    <center>
      <Typography variant="display4">tidey</Typography>
      <MenuAppBar title="Home Port" color="primary" />
      <h3>Weather Forcast</h3>
      <Card
        style={{ paddingTop: '20%' }}
        title="Weather Forecast"
        src={darksky}
      >
        <CardContent title="Weather Forecast" src={darksky}>
          Weather
        </CardContent>
        <CardMedia
          title="Current Forecast"
          width="100%"
          height="100%"
          frameBorder="20"
          style={{ paddingTop: 48 }}
          src={darksky}
          //src="https://api.darksky.net/forecast/e6ccdb81bd1c974f7e5e55914bd85169/32.8052,-79.7597"
          allowFullScreen
        >
          Put Weather Here
        </CardMedia>
      </Card>

      <div style={{ paddingTop: 30, paddingTop: 30 }} />
    </center>
  </div>
)

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
