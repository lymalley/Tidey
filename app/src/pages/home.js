import React from 'react'
import Typography from '@material-ui/core/Typography'
import withDrawer from '../components/with-drawer'
import MenuAppBar from '../components/menuAppBar'

const Home = () => (
  <div
    style={{
      padding: 100
    }}
  >
    <MenuAppBar title="Port" />
    <center>
      <img alt="home icon" src="/yeti-anchor.png" width="100%" />
      <div style={{ paddingTop: 12 }}>
        <Typography variant="display1" align="center" color="primary">
          Tidey
        </Typography>
      </div>
    </center>
  </div>
)

export default withDrawer(Home)
