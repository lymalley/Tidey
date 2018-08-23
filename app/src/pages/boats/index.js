import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'
import List from '@material-ui/core/List'
import MenuAppBar from '../../components/menuAppBar'
import withDrawer from '../../components/with-drawer'
import BoatListItems from '../../components/boatListItems'

const Boats = props => (
  <div style={{ paddingTop: 56 }}>
    <MenuAppBar title="Boats" />
    <List>{map(boat => BoatListItems(boat), props.boats)}</List>
  </div>
)

const mapStateToProps = state => ({
  boats: state.getBoats
})

const connector = connect(mapStateToProps)

export default withDrawer(connector(Boats))
