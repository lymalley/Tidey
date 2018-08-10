import React from 'react'
import withDrawer from '../../components/with-drawer'
import MenuAppBar from '../../components/menuAppBar'
import ActivityListItems from '../../components/activityListItems'

const Activities = () => (
  <div style={{ paddingTop: 56 }}>
    <MenuAppBar title="Activities" />
    <ActivityListItems />
  </div>
)

export default withDrawer(Activities)
