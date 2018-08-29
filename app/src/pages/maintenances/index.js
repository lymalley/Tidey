import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'
import List from '@material-ui/core/List'
import MenuAppBar from '../../components/menuAppBar'
import withDrawer from '../../components/with-drawer'
import MaintenanceListItem from '../../components/maintenanceListItem'

const Maintenances = props => (
  <div style={{ paddingTop: 56 }}>
    <MenuAppBar
      title="Maintenances"
      back
      history={props.history}
      backArrow={true}
      addNew
      goToURL="/maintenances/new"
    />
    <List>
      {map(maintenance => MaintenanceListItem(maintenance), props.maintenances)}
    </List>
  </div>
)

const mapStateToProps = state => ({
  maintenances: state.getMaintenances
})

const connector = connect(mapStateToProps)

export default withDrawer(connector(Maintenances))
