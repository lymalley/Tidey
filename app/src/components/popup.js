import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Typography } from '@material-ui/core'
import { getReminder, updateReminder } from '../action-creators/reminders'
import { connect } from 'react-redux'

class ReminderDialog extends React.Component {
  state = {
    open: false
  }

  handleClickOpen = () => {
    const { getReminder, id } = this.props
    this.setState({ open: true })
    getReminder(id)
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { history, isLoading, reminder } = this.props
    console.log(JSON.stringify(reminder))
    return (
      <div>
        <Button onClick={this.handleClickOpen}>View Reminder</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="reminder"
        >
          <DialogTitle id="reminder">Service Reminder</DialogTitle>
          <DialogContent>
            <DialogContentText id="Reminder Dialogyeue">
              <h2>Reminder</h2>
              <Typography>
                Boat: {reminder.boat} Service: {reminder.service}
              </Typography>
              <Typography>
                Due: {reminder.dueAtHours} Alert At: {reminder.alertAt}
              </Typography>
              <Typography>{reminder.completed}</Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  //reminder: state.currentReminder
})

const mapActionToProps = dispatch => ({
  getReminder: id => dispatch(getReminder(id)),
  updateReminder: id => dispatch(getReminder(id))
})

const connector = connect(
  mapStateToProps,
  mapActionToProps
)

export default connector(ReminderDialog)

{
  /*

<Button
              value={reminder.complete === true}
              onClick={this.handleClose}
              color="primary"
            >
              Mark As Complete
            </Button>*/
}
