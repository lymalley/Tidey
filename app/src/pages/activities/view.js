import React from 'react'
import MenuAppBar from '../../components/menuAppBar'
import withDrawer from '../../components/with-drawer'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import { Link } from 'react-router-dom'

import { getActivity } from '../../action-creators/activities'
import {
  CardContent,
  Typography
} from '../../../node_modules/@material-ui/core'

class ActivityView extends React.Component {
  componentDidMount() {
    const { getActivity, match } = this.props
    getActivity(match.params.id)
  }
  render() {
    const { history, isLoading, activity, isError, errMsg } = this.props
    return (
      <div style={{ paddingTop: 56 }}>
        <MenuAppBar
          history={history}
          backArrow={true}
          title="Activity"
          style={{ padding: 56 }}
        />
        {isLoading ? (
          <p>...Loading</p>
        ) : (
          <Card>
            <CardContent>
              <Typography gutterBottom variant="headline" color="primary">
                {activity.date}
              </Typography>
            </CardContent>
          </Card>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  activity: state.currentActivity.data,
  isLoading: state.currentActivity.isLoading
})

const mapActionsToProps = dispatch => ({
  getActivity: id => dispatch(getActivity(id))
})

const connector = connect(
  mapStateToProps,
  mapActionsToProps
)

export default withDrawer(connector(ActivityView))
