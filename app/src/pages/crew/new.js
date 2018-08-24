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
import {
  NEW_CREW_FORM_UPDATED,
  DRAWER_TOGGLED,
  SET_IMAGE
} from '../../constants'
import { addCrewMember } from '../../action-creators/crew'
import Grid from '@material-ui/core/Grid'
import { compose, path, head } from 'ramda'
import CustomSnackBar from '../../components/customSnackBar'
import classNames from 'classnames'
import Paper from '@material-ui/core/Paper'
import { grey200, grey600 } from 'material-ui/styles/colors'

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
    color: 'theme.palette.text.secondary',
    background: grey600
  }
})

const CrewMemberNew = props => {
  return (
    <center>
      <div style={{ paddingTop: 56 }} className="container">
        {!props.isFetching ? (
          <React.Fragment>
            <MenuAppBar
              history={props.history}
              title="Add Crew Member"
              history={props.history}
              backArrow={true}
            />
            <Paper classNames={props.classes.paper} style={{ padding: 10 }}>
              <Grid container>
                <form
                  className={props.classes.root}
                  style={{ marginTop: 40 }}
                  autoComplete="off"
                  onSubmit={props.createCrewMember(props.history)}
                >
                  <div className="form-group">
                    <Grid conatianer>
                      <Grid item xs={12}>
                        <TextField
                          label="First Name"
                          value={props.crewMember.firstName}
                          margin="normal"
                          onChange={e =>
                            props.onChange('firstName', e.target.value)
                          }
                          required
                          className={props.classes.input}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          label="Last Name"
                          value={props.crewMember.lastName}
                          margin="normal"
                          onChange={e =>
                            props.onChange('lastName', e.target.value)
                          }
                          required
                          className={props.classes.input}
                        />
                      </Grid>
                      {/* <input
                        id="upload"
                        //ref="upload"
                        type="file"
                        accept="image/*"
                        onInput={e => {
                          props.crewMember.image(e)
                        }}
                        onClick={e => (e.target.value = null)}
                      />*/}

                      {/*      <Grid item xs={12}>
                        <TextField
                          buttonText="Add Photo"
                          label="Photo"
                          value={props.crewMember.image}
                          margin="normal"
                          singleImage
                          type="file"
                          onChange={e =>
                            props.onChange('image', e.target.value)
                          }
                        />
                        </Grid>*/}

                      <Grid item xs={12}>
                        <TextField
                          label="Title"
                          value={props.crewMember.title}
                          margin="normal"
                          onChange={e =>
                            props.onChange('title', e.target.value)
                          }
                          className={props.classes.input}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          label="Email"
                          value={props.crewMember.email}
                          margin="normal"
                          onChange={e =>
                            props.onChange('email', e.target.value)
                          }
                          className={props.classes.input}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          label="Phone"
                          value={props.crewMember.phoneNumber}
                          margin="normal"
                          required
                          onChange={e =>
                            props.onChange('phoneNumber', e.target.value)
                          }
                          className={props.classes.input}
                        />
                      </Grid>

                      <Grid item xs={12}>
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
                          <SaveIcon
                            className={classNames(
                              props.classes.leftIcon,
                              props.classes.iconSmall
                            )}
                          />
                          Save
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                </form>
              </Grid>
            </Paper>
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
  crewMember: state.newCrewMember,
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
