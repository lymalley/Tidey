import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'
import List from '@material-ui/core/List'
import MenuAppBar from '../../components/menuAppBar'
import withDrawer from '../../components/with-drawer'
import ActivityListItems from '../../components/activityListItems'

const Activities = props => (
  <div style={{ paddingTop: 56 }}>
    <MenuAppBar title="Activities" />
    <List>
      {map(activity => ActivityListItems(activity), props.activities)}
    </List>
  </div>
)

const mapStateToProps = state => ({
  activities: state.getActivities
})

const connector = connect(mapStateToProps)

export default withDrawer(connector(Activities))

{
  /*import React from 'react'
import withDrawer from '../../components/with-drawer'
import MenuAppBar from '../../components/menuAppBar'
import ActivityListItem from '../../components/activityListItem'
import List from '@material-ui/core/List'
import { connect } from 'react-redux'
import { map } from 'ramda'

const Activities = props => (
  <div style={{ paddingTop: 56 }}>
    <MenuAppBar title="Activities" />
    <ActivityListItem />
  </div>
)

const mapStateToProps = state => ({
  resources: state.activities
})

const connector = connect(mapStateToProps)

export default withDrawer(connector(Activities))*/
}
