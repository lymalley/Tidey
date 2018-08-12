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
          label="First Name"
          value={props.maintenance.firstName}
          margin="normal"
          onChange={e => props.onChange('firstName', e.target.value)}
          required
          className={props.classes.input}
        />
        <TextField
          label="Last Name"
          value={props.maintenance.lastName}
          margin="normal"
          onChange={e => props.onChange('lastName', e.target.value)}
          required
          className={props.classes.input}
        />
        <TextField
          label="Photo"
          value={props.maintenance.image}
          margin="normal"
          type="file"
          onChange={e => props.onChange('image', e.target.value)}
          className={props.classes.input}
        />

        <TextField
          label="Title"
          value={props.maintenance.title}
          margin="normal"
          onChange={e => props.onChange('title', e.target.value)}
          className={props.classes.input}
        />
        <TextField
          label="Email"
          value={props.maintenance.email}
          margin="normal"
          onChange={e => props.onChange('email, e.target.value')}
          className={props.classes.input}
        />
        <TextField
          label="Phone"
          value={props.maintenance.phone}
          margin="normal"
          required
          onChange={e => props.onChange('phone', e.target.value)}
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
