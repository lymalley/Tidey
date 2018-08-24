import React from 'react'
import withDrawer from '../../components/with-drawer'
import MenuAppBar from '../../components/menuAppBar'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core/styles'
import { TextField, NativeSelect, FormHelperText } from '@material-ui/core'
import { map } from 'ramda'
import { setBoats, getBoat } from '../../action-creators/boats'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/SaveTwoTone'
import { NEW_MAINTENANCE_FORM_UPDATED } from '../../constants'
import { addMaintenance } from '../../action-creators/maintenances'
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import SnackBar from '../../components/customSnackBar'
import CustomSelectionControl from '../../components/customSelectionControl'
import { Link } from 'react-router-dom'
import Today from '../../lib/today'
import { curentBoat, defaultBoat } from '../../reducers/boats'
import { addReminder } from '../../action-creators/reminders'
import maintenances from '.'

const styles = theme => ({
  input: {
    width: '95%',
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 8
  },
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: 'theme.palette.text.secondary'
  }
})

class MaintenanceNew extends React.Component {
  state = {
    service: 'Select Service',
    boat: { ...this.props }
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value })
  }

  render() {
    const {
      history,
      classes,
      maintenance,
      createMaintenance,
      onChange,
      onSelect,
      isError,
      isSaving,
      boatName,
      isFetching,
      setBoats
    } = this.props

    const services = [
      {
        value: 'oil-change',
        label: 'Oil Change'
      },
      {
        value: 'outdrive',
        label: 'Outdrive'
      },
      {
        value: 'other',
        label: 'Other'
      }
    ]

    const vessels = [
      {
        value: 'orange-crush',
        label: 'Orange Crush'
      },
      {
        value: 'max-fly',
        label: 'Max Fly'
      }
    ]
    const boats = [{ ...this.props }]

    return (
      <center>
        <div style={{ paddingTop: 20 }} className={classes.root}>
          <Paper className={classes.paper}>
            {!isFetching ? (
              <React.Fragment>
                <Paper>
                  <MenuAppBar
                    title="Add Maintenance Log"
                    textAlign="center"
                    backArrow={true}
                    history={history}
                  />
                  <form
                    style={{ marginTop: 40 }}
                    autocomplete="off"
                    onSubmit={createMaintenance(history)}
                    className="form-horizontal"
                  >
                    <div className="form-group">
                      {/*  <form className={classes.container} noValidate>
                    <TextField
                      id="date"
                      label="Date"
                      type="date"
                      default={Today}
                      required
                      value={maintenance.date}
                      field="date"
                      onChange={e => onChange('date', e.target.value)}
                      className={classes.input}
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  </form> */}

                      <TextField
                        //  label="Date"
                        value={maintenance.date}
                        field="date"
                        onChange={e => onChange('date', e.target.value)}
                        required
                        className={classes.input}
                        margin="normal"
                        helperText="Date *"
                      />

                      <Select
                        field="boat"
                        select
                        // label="Boat Name"
                        InputLabelProps={{
                          shrink: true
                        }}
                        margin="normal"
                        placeholder="Select Boat"
                        value={maintenance.boat}
                        onChange={e => onChange('boat', e.target.value)}
                        input={<Input name="boatName" id="boatName" />}
                        required
                        className={classes.input}
                        helperText="Boat Name"
                      >
                        {vessels.map(option => (
                          <option value={option.value} key={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </Select>
                      {/*  <Select
                    // {...boats}
                    field="boat"
                    select
                    label="Boat Name"
                    InputLabelProps={{
                      shrink: true
                    }}
                    margin="normal"
                    value={maintenance.boat}
                    onChange={e => setBoats(onChange('boat', e.target.value))}
                    input={<Input name="boatName" id="boatName" />}
                    required
                    className={classes.input}
                  >
                    {boats.map(defaultBoat => (
                      <option value={defaultBoat.name} key={defaultBoat.name}>
                        {defaultBoat.name}
                      </option>
                    ))}
                  </Select>*/}

                      <TextField
                        field="engineHours"
                        //  label="Current Engine Hours"
                        // InputLabelProps={{shrink: true}}
                        value={maintenance.engineHours}
                        margin="normal"
                        required
                        onChange={e => onChange('engineHours', e.target.value)}
                        className={classes.input}
                        helperText="Current Engine Hours *"
                      />
                    </div>
                    <Grid container spacing={12} alignItems="flex-end">
                      <Grid item xs={12}>
                        <Select
                          field="selectServiceType"
                          select
                          label="Service Type"
                          InputLabelProps={{
                            shrink: true
                          }}
                          margin="normal"
                          value={maintenance.serviceType}
                          onChange={e =>
                            onChange('serviceType', e.target.value)
                          }
                          input={<Input name="service" id="service-required" />}
                          required
                          className={classes.input}
                          helperText="Service Type *"
                        >
                          {services.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </Grid>
                    </Grid>

                    <TextField
                      field="performedBy"
                      //  label="Performed By"
                      InputLabelProps={{
                        shrink: true
                      }}
                      value={maintenance.performedBy}
                      margin="normal"
                      onChange={e => onChange('performedBy', e.target.value)}
                      className={classes.input}
                      helperText="Performed By"
                    />
                    <TextField
                      field="location"
                      // label="Location"
                      InputLabelProps={{
                        shrink: true
                      }}
                      value={maintenance.location}
                      margin="normal"
                      onChange={e => onChange('location', e.target.value)}
                      className={classes.input}
                      helperText="Location"
                    />
                    {/*
                    <TextField
                      field="materials"
                      label="Materials Used"
                      value={maintenance.materials}
                      margin="normal"
                      onChange={e => onChange('materials', e.target.value)}
                      className={classes.input}
                      InputProps={{
                        disableUnderline: true,
                        classes: {
                          input: classes.bootstrapInput
                        }
                      }}
                      InputLabelProps={{
                        shrink: true,
                        className: classes.bootstrapFormLabel
                      }}
                    /> */}

                    <Grid container>
                      <Grid item xs={12}>
                        <Paper
                          alignItems="center"
                          style={{ height: 140, width: '95%', margin: 10 }}
                        >
                          <TextField
                            field="comments"
                            value={maintenance.comments}
                            margin="normal"
                            placeholder="Additional Notes"
                            fullWidth
                            multiline
                            onChange={e => onChange('comments', e.target.value)}
                            className={classes.input}
                            style={{ fontSize: 16 }}
                          />
                        </Paper>
                      </Grid>
                    </Grid>
                    {/*     <TextField
                label="Add Images"
                value={maintenance.images}
                margin="normal"
                type="file"
                onChange={e => onChange('images', e.target.value)}
                className={classes.input}
              />
              <TextField
                      label="Create Reminder"
                      value={maintenance.reminderCreated}
                      margin="normal"
                      onChange={e =>
                        onChange('reminderCreated', e.target.value.toString())
                      }
                      className={classes.input}
                    />
      
                    <div>
                      <div>Create Remidner for Next Service</div>
                      <Grid item xs={12} style={{ margin: 20 }}>
                        <CustomSelectionControl
                          value={maintenance.reminderCreated}
                          alignItems="center"
                          checked={maintenances.reminderCreated === true}
                          onChange={e =>
                            onChange('reminderCreated', e.target.value === true)
                          }
                        />
                        </Grid>
                    <CustomSelectionControl
                      label="Create Service Reminder"
                      checked={maintenances.reminderCreated === true}
                      onChange={e =>
                        onChange('reminderCreated', e.target.value)
                      }
                      value={maintenance.reminderCreated}
                    />*/}

                    <TextField
                      label="Create Reminder (Enter Y)"
                      value={maintenance.reminderCreated}
                      margin="normal"
                      onChange={e =>
                        onChange('reminderCreated', e.target.value)
                      }
                      className={classes.input}
                    />

                    <TextField
                      //   label="Hours Due At"
                      value={maintenance.dueAtHours}
                      margin="normal"
                      onChange={e => onChange('dueAtHours', e.target.value)}
                      className={classes.input}
                      helperText="Hours Due At"
                    />
                    <FormControl className={classes.formControl}>
                      <NativeSelect
                        className={classes.selectEmpty}
                        value={maintenance.hrsBefore}
                        label="Hours Before to Remind"
                        margin="normal"
                        onChange={e => onChange('hrsBefore', e.target.value)}
                      >
                        <option value={10}>Hours Before</option>
                        <option value={1}>One</option>
                        <option value={5}>Five</option>
                        <option value={10}>Ten</option>
                        <option value={15}>Fifteen</option>
                        <option value={20}>Twenty</option>
                      </NativeSelect>
                      <FormHelperText>Select Hours</FormHelperText>
                    </FormControl>

                    <TextField
                      label="Entered By"
                      value={maintenance.enteredBy}
                      margin="normal"
                      onChange={e => onChange('enteredBy', e.target.value)}
                      required
                      className={classes.input}
                    />
                    {/* <Link to="/maintenances">
                      <Button type="button">Cancel</Button>
                    </Link>*/}

                    <Button
                      varient="button"
                      color="white"
                      type="submit"
                      aria-label="add"
                      aria-label="Add Crew Member"
                      style={{
                        background:
                          'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                        borderRadius: 3,
                        border: 0,
                        padding: '0 30px',
                        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
                      }}
                    >
                      <SaveIcon /> Save
                    </Button>
                  </form>
                </Paper>
                {isError && (
                  <SnackBar
                    type="error"
                    msg="There was an error saving you maintenance."
                  />
                )}
                {isSaving && (
                  <SnackBar type="info" msg="Saving your maintenance..." />
                )}
              </React.Fragment>
            ) : (
              <p>Adding Maintenance...</p>
            )}
          </Paper>
        </div>
      </center>
    )
  }
}

const mapStateToProps = state => ({
  boat: state.currentBoat,
  boats: state.getBoats,
  reminder: state.newReminder.data,
  maintenance: state.newMaintenance.data,
  isSaving: state.newMaintenance.isSaving,
  isError: state.newMaintenance.isError,
  errMessage: state.newMaintenance.errMessage
})

const mapActionToProps = dispatch => ({
  onGetBoat: () => dispatch(getBoat),
  setBoats: () => dispatch(setBoats),
  onChange: (field, value) =>
    dispatch({
      type: NEW_MAINTENANCE_FORM_UPDATED,
      payload: { [field]: value }
    }),
  createMaintenance: history => e => {
    e.preventDefault()

    dispatch(addMaintenance(history))
    //  dispatch(addReminder(history))
  }
})

const connector = connect(
  mapStateToProps,
  mapActionToProps
)

export default withRouter(
  withDrawer(connector(withStyles(styles)(MaintenanceNew)))
)

{
  /*

;*/
}
