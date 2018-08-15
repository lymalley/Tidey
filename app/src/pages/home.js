import React from 'react'
import Typography from '@material-ui/core/Typography'
import { props, head } from 'ramda'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import withDrawer from '../components/with-drawer'
import MenuAppBar from '../components/menuAppBar'
import Card from '@material-ui/core/Card'

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
    <Card>
      <iframe
        title="Current Forecast"
        width="100%"
        height="100%"
        frameBorder="20"
        style={{ paddingTop: 48 }}
        src="https://api.darksky.net/forecast/e6ccdb81bd1c974f7e5e55914bd85169/32.8052,-79.7597"
        allowFullScreen
      />
      )}
    </Card>
  </div>
)

export default withDrawer(Home)
