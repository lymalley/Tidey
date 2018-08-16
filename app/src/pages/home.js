import React from 'react'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { props, head } from 'ramda'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import withDrawer from '../components/with-drawer'
import MenuAppBar from '../components/menuAppBar'
const DarkSky = require('dark-sky')

//const darksky = new DarkSky(process.env.REACT_APP_DARK_SKY)
const darksky = `${process.env.REACT_APP_DARK_SKY}32.8052,-79.7597`
console.log({ darksky })
{
  /*
const styles = theme => {
  card: {
    width: 345
  },
  media: {
    height: 0,
    paddingTop: 28
  }
}

*/
}

function Weather(props) {
  const { classes } = props
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="speed_boat.jpg"
          title="Weather"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Lizard
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

const Home = () => (
  <div
    style={{
      padding: 50
    }}
  >
    <MenuAppBar title="Port">
      <center>
        <img
          style={{ paddingLeft: 30, paddingTop: 50 }}
          alt="home icon"
          src="speed_boat.png"
          width="20%"
        />
      </center>
    </MenuAppBar>
    <div style={{ paddingTop: 30, paddingBottom: 30 }}>
      <Typography variant="display2" align="center" color="primary">
        tidey
      </Typography>
    </div>
    <Card weather={props.weather}>
      <iframe
        title="Current Forecast"
        width="100%"
        height="100%"
        frameBorder="20"
        style={{ paddingTop: 48 }}
        src={darksky}
        //src="https://api.darksky.net/forecast/e6ccdb81bd1c974f7e5e55914bd85169/32.8052,-79.7597"
        allowFullScreen
      />
    </Card>
  </div>
)

export default withDrawer(Weather)
