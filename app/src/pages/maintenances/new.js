import React from 'react'
import withDrawer from '../../components/with-drawer'
import MenuAppBar from '../../components/menuAppBar'
import { connect } from 'react-redux'
import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/SaveTwoTone'
import { NEW_MAINTENANCE_FORM_UPDATED } from '../../constants'
import { addMaintenance } from '../../action-creators/maintenances'
import lightBlue from '@material-ui/core/colors/blue'

const styles = theme => ({
  input: {
    width: '50%',
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 8
  }
})

const theme = createMuiTheme({
  palette: {
    primary: lightBlue
  }
})

const MaintenanceNew = props => {
  return (
    <div style={{ paddingTop: 20 }}>
      <MuiThemeProvider theme={theme}>
        <MenuAppBar title="Add Maintenance Log" color="primary" />
      </MuiThemeProvider>
      <form
        style={{ marginTop: 50 }}
        autocomplete="off"
        onSubmit={props.createMaintenance(props.history)}
      >
        <TextField
          label="Date"
          value={props.maintenance.date}
          margin="normal"
          onChange={e => props.onChange('date', e.target.value)}
          required
          className={props.classes.input}
        />
        <TextField
          label="Boat Name"
          value={props.maintenance.boatName}
          margin="normal"
          onChange={e => props.onChange('boatName', e.target.value)}
          required
          className={props.classes.input}
        />
        <Select
          label="Service Type"
          value={props.maintenance.serviceType}
          margin="normal"
          component="select"
          onChange={e => props.onChange('image', e.target.value)}
          required
          className={props.classes.input}
        >
          <MenuItem>
            <option>Oil Change</option>
            <option>Change Drive</option>
            <option>other</option>
          </MenuItem>
        </Select>
        <TextField
          label="Performed By"
          value={props.maintenance.performedBy}
          margin="normal"
          onChange={e => props.onChange('performedBy', e.target.value)}
          className={props.classes.input}
        />
        <TextField
          label="Location"
          value={props.maintenance.location}
          margin="normal"
          onChange={e => props.onChange('location', e.target.value)}
          className={props.classes.input}
        />
        <TextField
          label="Current Engine Hours"
          value={props.maintenance.engineHours}
          margin="normal"
          required
          onChange={e => props.onChange('engineHours', e.target.value)}
          className={props.classes.input}
        />
        <TextField
          label="Materials Used"
          value={props.maintenance.materials}
          margin="normal"
          onChange={e => props.onChange('materials', e.target.value)}
          className={props.classes.input}
        />
        <TextField
          label="Total Maintenance Cost"
          value={props.maintenance.totalCost}
          margin="normal"
          onChange={e => props.onChange('totalCost', e.target.value)}
          className={props.classes.input}
        />
        <TextField
          label="Additional Notes"
          value={props.maintenance.comments}
          margin="normal"
          multiline
          onChange={e => props.onChange('comments', e.target.value)}
          className={props.classes.input}
        />
        <TextField
          label="Add Images"
          value={props.maintenance.images}
          margin="normal"
          type="file"
          onChange={e => props.onChange('images', e.target.value)}
          className={props.classes.input}
        />
        <TextField
          label="Create Reminder"
          value={props.maintenance.reminderCreated}
          margin="normal"
          onChange={e => props.onChange('reminderCreated', e.target.value)}
          className={props.classes.input}
        />
        <TextField
          label="Entered By"
          value={props.maintenance.enteredBy}
          margin="normal"
          type="file"
          onChange={e => props.onChange('enteredBy', e.target.value)}
          className={props.classes.input}
        />
        <Button
          variant="fab"
          color="secondary"
          type="submit"
          aria-label="add"
          className="fab-button"
        >
          <SaveIcon />
        </Button>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  maintenance: state.newMaintenance.data,
  isSaving: state.newMaintenance.isSaving,
  isError: state.newMaintenance.isError,
  errMessage: state.newMaintenance.errMessage
})

const mapActionToProps = dispatch => ({
  onChange: (field, value) =>
    dispatch({
      type: NEW_MAINTENANCE_FORM_UPDATED,
      payload: { [field]: value }
    }),
  createMaintenance: history => e => {
    e.preventDefault()
    dispatch(addMaintenance(history))
  }
})

const connector = connect(
  mapStateToProps,
  mapActionToProps
)

export default withDrawer(connector(withStyles(styles)(MaintenanceNew)))
