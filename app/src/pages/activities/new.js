{
  /*import React from 'react'
import MenuAppBar from '../../components/menuAppBar'
import withDrawer from '../../components/with-drawer'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

import { getCurrentActivity } from '../../action-creators/activities'
import { getActivity } from '../../action-creators/activities'

class ActivityView extends React.Component {
  componentDidMount() {
    const activityId = this.props.match.params.id
    this.props.getActivityFromApi(activityId)
  }

  render() {
    const {
      activity,
      isLoading,
      isError,
      errorMsg,
      getActivity,
      classes,
      history
    } = this.props

    const ActivityViewForm = (
      <form autoComplete="off">
        <TextField
          label="Trip"
          value={activity.tripType}
          margin="normal"
          multiline
          disabled
          className={classes.input}
        />
        <TextField
          label="Date"
          value={activity.date}
          margin="normal"
          disabled
          className={classes.input}
        />
        <TextField
          label="Start"
          value={activity.startTime}
          margin="normal"
          disabled
          className={classes.input}
        />
        <Link to={`/activities/${activity._id}/edit`}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Edit
          </Button>
        </Link>
      </form>
    )

    return ActivityViewForm
  }
}

const mapStateToProps = state => {
  return {
    currentActivity: state.currentActivity
  }
}

const mapActionsToProps = dispatch => {
  return {
    getActivityFromApi: id => dispatch(getActivity(id))
  }
}

const connector = connect(
  mapStateToProps,
  mapActionsToProps
)

export default withDrawer(connector(ActivityView))
*/
}
