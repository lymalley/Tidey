import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'
import List from '@material-ui/core/List'
import MenuAppBar from '../../components/menuAppBar'
import withDrawer from '../../components/with-drawer'
import MaintenanceListItems from '../../components/maintenanceListItems'

const Maintenances = props => (
  <div style={{ paddingTop: 56 }}>
    <MenuAppBar title="Maintenances" />
    <List>
      {map(
        maintenance => MaintenanceListItems(maintenance),
        props.maintenances
      )}
    </List>
  </div>
)

const mapStateToProps = state => ({
  maintenances: state.getMaintenances
})

const connector = connect(mapStateToProps)

export default withDrawer(connector(Maintenances))