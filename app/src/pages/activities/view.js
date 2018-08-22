import React from 'react'
import MenuAppBar from '../../components/menuAppBar'
import withDrawer from '../../components/with-drawer'
import { connect } from 'react-redux'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import lightBlue from '@material-ui/core/colors/lightBlue'
import Card from '@material-ui/core/Card'
import { Link } from 'react-router-dom'
import ActivityListItem from '../../components/activityListItems'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import { getActivity } from '../../action-creators/activities'
import {
  CardContent,
  Typography
} from '../../../node_modules/@material-ui/core'

import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'

const styles = theme => {
  button: {
    margin: theme.spacing.unit
  }
}

class ActivityView extends React.Component {
  componentDidMount() {
    const { getActivity, match } = this.props
    getActivity(match.params.id)
  }
  render() {
    const { history, isLoading, id, classes } = this.props
    return (
      <div style={{ paddingTop: 56 }}>
        <center>
          <MenuAppBar
            backArrow={true}
            goBackURL="/activities"
            title="Activity"
            style={{ padding: 56 }}
          />

          {isLoading ? (
            <p>...Loading</p>
          ) : (
            <Card>
              <Button variant="fab" disabled aria-label="Delete">
                <DeleteIcon />
              </Button>
              <Button
                variant="fab"
                color="secondary"
                aria-label="Edit"
                //  onClick={`activities/${_id}/edit`}
              >
                <Icon>edit_icon</Icon>
              </Button>
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
