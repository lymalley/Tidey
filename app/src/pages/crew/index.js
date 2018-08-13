import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'
import List from '@material-ui/core/List'
import MenuAppBar from '../../components/menuAppBar'
import withDrawer from '../../components/with-drawer'
import CrewListItems from '../../components/crewListItems'

const Crew = props => (
  <div style={{ paddingTop: 56 }}>
    <MenuAppBar title="Crew" />
    <List>{map(crewMember => CrewListItems(crewMember), props.crew)}</List>
  </div>
)

const mapStateToProps = state => ({
  crew: state.getCrew
})

const connector = connect(mapStateToProps)

export default withDrawer(connector(Crew))
