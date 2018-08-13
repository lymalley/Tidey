import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import withDrawer from '../components/with-drawer'
import MenuAppBar from '../components/menuAppBar'

const Home = () => (
  <div
    style={{
      padding: 50
    }}
  >
    <MenuAppBar title="Port" />
    <center>
      <img
        style={{ paddingLeft: 30, paddingTop: 150 }}
        alt="home icon"
        src="galeon.png"
        width="100%"
      />
      <div style={{ paddingTop: 30, paddingBottom: 30 }}>
        <Typography variant="display2" align="center" color="primary">
          Tidey
        </Typography>
      </div>
    </center>
  </div>
)

export default withDrawer(Home)
