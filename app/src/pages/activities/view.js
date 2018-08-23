import React from 'react'
import MenuAppBar from '../../components/menuAppBar'
import withDrawer from '../../components/with-drawer'
import { connect } from 'react-redux'
import {
  Grid,
  Paper,
  ListItem,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Card,
  CardMedia
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
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

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: '95%'
  }
})

class ActivityView extends React.Component {
  componentDidMount() {
    const { getActivity, match } = this.props
    getActivity(match.params._id)
  }
  render() {
    const { history, isLoading, classes, activity, activities } = this.props
    return (
      <div style={{ paddingTop: 56 }}>
        <center>
          <MenuAppBar
            backArrow={true}
            goBackURL="/activities"
            title="Activity"
            style={{ padding: 56 }}
          />

          <React.Fragment>
            <Paper style={{ padding: '10%' }}>
              <Typography>{activity.date}</Typography>
              <Typography>
                {`Start Time: ${activity.startTime} End Time ${
                  activity.endTime
                }`}
              </Typography>
            </Paper>
          </React.Fragment>
        </center>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  activities: state.getActivities,
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

export default withDrawer(connector(withStyles(styles)(ActivityView)))
