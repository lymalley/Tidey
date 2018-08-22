import React from "react"
import MenuAppBar from "../../components/menuAppBar"
import withDrawer from "../../components/withDrawer"
import { connect } from "react-redux"
import { withStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import SaveIcon from "@material-ui/icons/Save"
import CustomSnackBar from "../../components/customSnackBar"

import { EDIT_EVENT_CLEARED, EDIT_EVENT_FORM_UPDATED } from "../../constants"
import { getEvent, updateEvent } from "../../action-creators/events"

const styles = theme => ({
  input: {
    width: "50%",
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 8
  }
})

class EditEvent extends React.Component {
  componentDidMount() {
    const activityId = this.props.match.params.id
    this.props.getActivityFromApi(activityId)
  }

  render() {
    const {
      event,
      isLoading,
      isError,
      errorMsg,
      isSaving,
      clearEditEvent,
      getEvent,
      saveEvent,
      onTextFieldChange,
      classes,
      history
    } = this.props

    return (
      <div style={{ paddingTop: 56 }}>
        <MenuAppBar
          title="Edit Event"
          backArrow={true}
          history={this.props.history}
        />
        <form autoComplete="off" onSubmit={saveEvent(history)}>
          <TextField
            label="Name"
            value={event.name}
            onChange={e => onTextFieldChange("name", e.target.value)}
            margin="normal"
            required
            className={classes.input}
          />
          <TextField
            label="Desc"
            value={event.shortDesc}
            onChange={e => onTextFieldChange("shortDesc", e.target.value)}
            margin="normal"
            required
            multiline
            className={classes.input}
          />
          <TextField
            label="Phone"
            value={event.primaryPhone}
            onChange={e => onTextFieldChange("primaryPhone", e.target.value)}
            margin="normal"
            required
            className={classes.input}
          />
          <TextField
            label="Date"
            value={event.eventDateTime}
            onChange={e => onTextFieldChange("eventDateTime", e.target.value)}
            margin="normal"
            required
            className={classes.input}
          />
          <Button
            fab
            color="primary"
            type="submit"
            variant="fab"
            aria-label="add"
            className="fab-button"
          >
            <SaveIcon />
          </Button>
        </form>
        {isLoading && (
          <CustomSnackBar
            message="Retrieving Event"
            snackType="info"
            duration={1000}
          />
        )}

        {isError && <CustomSnackBar message={errorMsg} snackType="error" />}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    event: state.editEvent.data,
    isLoading: state.editEvent.isLoading,
    isError: state.editEvent.isError,
    isSaving: state.editEvent.isSaving,
    errorMsg: state.editEvent.errorMsg
  }
}

const mapActionsToProps = dispatch => {
  return {
    clearEditEvent: dispatch({ type: EDIT_EVENT_CLEARED }),
    getEventFromApi: id => dispatch(getEvent(id)),
    saveEvent: history => e => {
      e.preventDefault()
      dispatch(updateEvent(history))
    },
    onTextFieldChange: (key, value) => {
      dispatch({ type: EDIT_EVENT_FORM_UPDATED, payload: { [key]: value } })
    }
  }
}

const connector = connect(
  mapStateToProps,
  mapActionsToProps
)

export default withDrawer(connector(withStyles(styles)(EditEvent)))