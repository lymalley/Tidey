import React from 'react'
import MenuAppBar from '../../components/menuAppBar'
import withDrawer from '../../components/with-drawer'
import { connect } from 'react-redux'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import lightBlue from '@material-ui/core/colors/lightBlue'
import Card from '@material-ui/core/Card'
import { Link } from 'react-router-dom'
import BoatListItem from '../../components/boatListItems'

import { getBoat } from '../../action-creators/boats'
import {
  CardContent,
  Typography
} from '../../../node_modules/@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: lightBlue
  }
})

class BoatView extends React.Component {
  componentDidMount() {
    const { getBoat, match } = this.props
    getBoat(match.params.id)
  }
  render() {
    const { history, isLoading } = this.props
    return (
      <div style={{ paddingTop: 56 }}>
        <center>
          <MuiThemeProvider theme={theme}>
            <MenuAppBar
              history={history}
              backArrow={true}
              title="Crew Member"
              style={{ padding: 56 }}
            />
          </MuiThemeProvider>
          {isLoading ? (
            <p>...Loading</p>
          ) : (
            <Card>
              <CardContent>
                <BoatListItem />
              </CardContent>
            </Card>
          )}
        </center>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  boat: state.currentBoat
})

const mapActionToProps = dispatch => ({
  getBoat: id => dispatch(getBoat(id))
})

const connector = connect(
  mapStateToProps,
  mapActionToProps
)

export default withDrawer(connector(BoatView))
