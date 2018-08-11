import React from 'react'
import { connect } from 'react-redux'
import { map } from 'ramda'
import { setActivities } from '../../action-creators/activities'
import MenuAppBar from '../../components/menuAppBar'
import withDrawer from '../../components/with-drawer'
import activityListItem from '../../components/activityListItem'

class Activities extends React.Component {
  componentDidMount() {
    const { setActivities } = this.props
    setActivities()
  }
  render() {
    return (
      <div>
        <MenuAppBar title="Activities" />
        {map(activityListItem)}
      </div>
    )
  }
}

const mapStateToProps = state => ({})

const mapActionsToProps = dispatch => ({
  setActivities: id => dispatch(setActivities(id))
})

const connector = connect(
  mapStateToProps,
  mapActionsToProps
)

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
