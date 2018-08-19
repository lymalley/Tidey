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
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import classNames from 'classnames'
import SnackBar from '../../components/customSnackBar'

const styles = theme => ({
  input: {
    width: '45%',
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 8
  },
  smInput: {
    width: '25%',
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 8
  },
  lgInput: {
    width: '70%',
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 8
  },
  fullInput: {
    width: '95%',
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 8,
    fontSize: 9,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ]
  },

  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  margin: {
    margin: theme.spacing.unit
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3
  },
  smTextField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 110
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '45%'
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  actions: { justifyContent: 'flex-end', width: '50%' },
  menu: {
    width: 200
  },
  row: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  bootstrapRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3
    }
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 12,
    padding: '10px 12px',
    width: 'calc(100% - 18px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
    }
  },
  bootstrapFormLabel: {
    fontSize: 14
  }
})

class MaintenanceNew extends React.Component {
  state = {
    service: 'Select Service'
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
      isSaving
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
    return (
      <div style={{ paddingTop: '10%' }}>
        <MenuAppBar title="Add Maintenance Log" backArrow={true} />
        <center>
          <Grid conatiner className={classes.root}>
            <form
              style={{ marginTop: '5%' }}
              autocomplete="off"
              onSubmit={createMaintenance(history)}
              className={classes.container}
            >
              <Grid container spacing={12} alignItems="flex-end">
                <Grid item xs={12}>
                  <TextField
                    label="Date"
                    value={maintenance.date}
                    field="date"
                    onChange={e => onChange('date', e.target.value)}
                    required
                    className={classes.smInput}
                    margin="normal"
                  />

                  <TextField
                    label="Boat Name"
                    InputLabelProps={{
                      shrink: true
                    }}
                    value={maintenance.boatName}
                    field="boatName"
                    margin="normal"
                    onChange={e => onChange('boatName', e.target.value)}
                    required
                    className={classes.input}
                  />
                </Grid>
              </Grid>
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
                    onChange={e => onChange('serviceType', e.target.value)}
                    input={<Input name="service" id="service-required" />}
                    required
                    className={classes.input}
                  >
                    {services.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>

                  <TextField
                    field="engineHours"
                    label="Engine Hours"
                    InputLabelProps={{
                      shrink: true
                    }}
                    value={maintenance.engineHours}
                    margin="normal"
                    required
                    onChange={e => onChange('engineHours', e.target.value)}
                    className={classes.smInput}
                    helperText="Currently"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={8} alignItems="flex-end">
                <Grid item xs={12}>
                  <TextField
                    field="performedBy"
                    label="Performed By"
                    InputLabelProps={{
                      shrink: true
                    }}
                    value={maintenance.performedBy}
                    margin="normal"
                    onChange={e => onChange('performedBy', e.target.value)}
                    className={classes.input}
                  />
                  <TextField
                    field="location"
                    label="Location"
                    InputLabelProps={{
                      shrink: true
                    }}
                    value={maintenance.location}
                    margin="normal"
                    onChange={e => onChange('location', e.target.value)}
                    className={classes.input}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12}>
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
                />
              </Grid>
              <Grid container>
                <Grid item xs={12}>
                  <Paper style={{ height: 140, width: '95%' }}>
                    <TextField
                      field="comments"
                      value={maintenance.comments}
                      margin="normal"
                      placeholder="Additional Notes"
                      fullWidth
                      multiline
                      onChange={e => onChange('comments', e.target.value)}
                      className={classes.fullInput}
                    />
                  </Paper>
                </Grid>
              </Grid>
              <TextField
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
                onChange={e => onChange('reminderCreated', e.target.value)}
                className={classes.input}
              />
              <TextField
                label="Entered By"
                value={maintenance.enteredBy}
                margin="normal"
                onChange={e => onChange('enteredBy', e.target.value)}
                required
                className={classes.input}
              />

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
          </Grid>
        </center>

        {isError && (
          <SnackBar
            type="error"
            msg="There was an error saving you maintenance."
          />
        )}
        {isSaving && <SnackBar type="info" msg="Saving your maintenance..." />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  reminder: state.newReminder.data,
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

{
  /*


       //  <TextField
              //  label="Total Maintenance Cost"
               // value={props.maintenance.totalCost}
                //margin="normal"
                //onChange={e => props.onChange('totalCost', e.target.value)}
                //className={props.classes.input}
             // />





import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
});

const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

class Checkout extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep + 1,
    });
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1,
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="absolute" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
              Company name
            </Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography variant="display1" align="center">
              Checkout
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="headline" gutterBottom>
                    Thank you for your order.
                  </Typography>
                  <Typography variant="subheading">
                    Your order number is #2001539. We have emailed your oder confirmation, and will
                    send you an update when your order has shipped.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={this.handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

Checkout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Checkout);*/
}
