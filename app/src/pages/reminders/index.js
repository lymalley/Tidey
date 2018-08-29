import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'
import List from '@material-ui/core/List'
import MenuAppBar from '../../components/viewAppBar'
import withDrawer from '../../components/with-drawer'
import ReminderListItems from '../../components/reminderListItems'

const Reminders = props => (
  <div style={{ paddingTop: 56 }}>
    <MenuAppBar
      title="Reminders"
      history={props.history}
      addNew
      goToURL="/reminders/new"
    />
    <List>{map(reminder => ReminderListItems(reminder), props.reminders)}</List>
  </div>
)

const mapStateToProps = state => ({
  reminders: state.getReminders
})

const connector = connect(mapStateToProps)

export default withDrawer(connector(Reminders))
