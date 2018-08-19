import React from 'react'
import MenuAppBar from '../../components/menuAppBar'
import withDrawer from '../../components/with-drawer'
import { connect } from 'react-redux'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import lightBlue from '@material-ui/core/colors/lightBlue'
import Card from '@material-ui/core/Card'
import { Link } from 'react-router-dom'
import ActivityListItem from '../../components/activityListItems'

import { getActivity } from '../../action-creators/activities'
import {
  CardContent,
  Typography
} from '../../../node_modules/@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: lightBlue
  }
})

class ActivityView extends React.Component {
  componentDidMount() {
    const { getActivity, match } = this.props
    getActivity(match.params.id)
  }
  render() {
    const { history, isLoading } = this.props
    return (
      <div style={{ paddingTop: 56 }}>
        <center>
          <MuiThemeProvider theme={theme}>
            <MenuAppBar
              history={history}
              backArrow={true}
              title="Activity"
              style={{ padding: 56 }}
            />
          </MuiThemeProvider>
          {isLoading ? (
            <p>...Loading</p>
          ) : (
            <Card>
              <CardContent>
                <ActivityListItem />
              </CardContent>
            </Card>
          )}
        </center>
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
