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
import { NEW_CREW_FORM_UPDATED, DRAWER_TOGGLED } from '../../constants'
import { addCrewMember } from '../../action-creators/crew'
import lightBlue from '@material-ui/core/colors/blue'
import CustomSnackBar from '../../components/customSnackBar'

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

const CrewMemberNew = props => {
  return (
    <center>
      <div style={{ paddingTop: 56 }} className="container">
        {!props.isFetching ? (
          <React.Fragment>
            <MuiThemeProvider theme={theme}>
              <MenuAppBar title="Add Crew Member" color="primary" />
            </MuiThemeProvider>
            <form
              className="form-horizontal"
              style={{ marginTop: 50 }}
              autocomplete="off"
              onSubmit={props.createCrewMember(props.history)}
            >
              <div className="form-group">
                <TextField
                  label="First Name"
                  value={props.crewMember.firstName}
                  margin="normal"
                  onChange={e => props.onChange('firstName', e.target.value)}
                  required
                  className={props.classes.input}
                />
              </div>
              <TextField
                label="Last Name"
                value={props.crewMember.lastName}
                margin="normal"
                onChange={e => props.onChange('lastName', e.target.value)}
                required
                className={props.classes.input}
              />
              <TextField
                label="Photo"
                value={props.crewMember.image}
                margin="normal"
                type="file"
                onChange={e => props.onChange('image', e.target.value)}
                className={props.classes.input}
              />

              <TextField
                label="Title"
                value={props.crewMember.title}
                margin="normal"
                onChange={e => props.onChange('title', e.target.value)}
                className={props.classes.input}
              />
              <TextField
                label="Email"
                value={props.crewMember.email}
                margin="normal"
                onChange={e => props.onChange('email', e.target.value)}
                className={props.classes.input}
              />
              <TextField
                label="Phone"
                value={props.crewMember.phone}
                margin="normal"
                required
                onChange={e => props.onChange('phone', e.target.value)}
                className={props.classes.input}
              />
              <div>
                <Button
                  variant="extendedFab"
                  color="secondary"
                  type="submit"
                  aria-label="add"
                  className="fab-button"
                >
                  <SaveIcon />
                </Button>
              </div>
            </form>
            {props.isError && (
              <CustomSnackBar message={props.errMessage} snackType="error" />
            )}
            {props.isSaving && (
              <CustomSnackBar message="Saving..." snackType="info" />
            )}
          </React.Fragment>
        ) : (
          <p>Adding Crew Member...</p>
        )}
      </div>
    </center>
  )
}

const mapStateToProps = state => ({
  crewMember: state.newCrewMember.data,
  isSaving: state.newCrewMember.isSaving,
  isError: state.newCrewMember.isError,
  errMessage: state.newCrewMember.errMessage,
  isFetching: state.newCrewMember.isFetching,
  drawer: state.drawer
})

const mapActionToProps = dispatch => {
  return {
    onChange: (key, value) => {
      dispatch({ type: NEW_CREW_FORM_UPDATED, payload: { [key]: value } })
    },
    createCrewMember: history => e => {
      e.preventDefault()
      dispatch(addCrewMember(history))
    },
    closeDrawer: () => {
      dispatch({ type: DRAWER_TOGGLED })
    }
  }
}

const connector = connect(
  mapStateToProps,
  mapActionToProps
)

export default withDrawer(connector(withStyles(styles)(CrewMemberNew)))
