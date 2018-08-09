import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import withDrawer from '../components/with-drawer'

const Home = () => (
  <div
    style={{
      padding: 48
    }}
  >
    <center>
      <img alt="home icon" src="/orange-crush.png" />
      <div style={{ paddingTop: 12 }}>
        <Typography variant="display1" align="center" color="primary">
          Welcome to Tidey
        </Typography>
      </div>
    </center>
  </div>
)

export default withDrawer(Home)
