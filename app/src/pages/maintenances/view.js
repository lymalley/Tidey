import React from 'react'
import MenuAppBar from '../../components/menuAppBar'
import withDrawer from '../../components/with-drawer'
import { connect } from 'react-redux'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import lightBlue from '@material-ui/core/colors/lightBlue'
import Card from '@material-ui/core/Card'
import { Link } from 'react-router-dom'
import MaintenanceListItem from '../../components/maintenanceListItems'

import { getMaintenance } from '../../action-creators/maintenances'
import {
  CardContent,
  Typography
} from '../../../node_modules/@material-ui/core'
import MaintenanceListItems from '../../components/maintenanceListItems'

const theme = createMuiTheme({
  palette: {
    primary: lightBlue
  }
})

class MaintenanceView extends React.Component {
  componentDidMount() {
    const { getMaintenance, match } = this.props
    getMaintenance(match.params.id)
  }
  render() {
    const { history, isLoading } = this.props
    return (
      <div style={{ paddingTop: 56 }}>
        <center>
          <MuiThemeProvider theme={theme}>
            <MenuAppBar
              back
              history={history}
              backArrow={true}
              title="Maintenance"
              style={{ padding: 56 }}
            />
          </MuiThemeProvider>
          {isLoading ? (
            <p>...Loading</p>
          ) : (
            <Card>
              <CardContent>
                <MaintenanceListItems />
              </CardContent>
            </Card>
          )}
        </center>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  maintenance: state.currentMaintenance
})

const mapActionToProps = dispatch => ({
  getMaintenance: id => dispatch(getMaintenance(id))
})

const connector = connect(
  mapStateToProps,
  mapActionToProps
)

export default withDrawer(connector(MaintenanceView))
