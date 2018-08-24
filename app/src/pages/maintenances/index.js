import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'
import List from '@material-ui/core/List'
import MenuAppBar from '../../components/menuAppBar'
import withDrawer from '../../components/with-drawer'
import MaintenanceListItem from '../../components/maintenanceListItem'
import Grid from '@material-ui/core/Grid'

const Maintenances = props => (
  <div style={{ paddingTop: 56 }}>
    <MenuAppBar
      title="Maintenances"
      back
      // history={props.history}
      // backArrow={true}
      addNew
      goToURL="/maintenances/new"
    />
    <Grid Container>
      <Grid item xs={12}>
        <List>
          {map(
            maintenance => MaintenanceListItem(maintenance),
            props.maintenances
          )}
        </List>
      </Grid>
    </Grid>
  </div>
)

const mapStateToProps = state => ({
  maintenances: state.getMaintenances
})

const connector = connect(mapStateToProps)

export default withDrawer(connector(Maintenances))
