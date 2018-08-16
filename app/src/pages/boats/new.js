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
import SaveIcon from '@material-ui/icons/Save'
import { NEW_BOAT_FORM_UPDATED } from '../../constants'
import { addBoat } from '../../action-creators/boats'
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

const BoatNew = props => {
  return (
    <div style={{ paddingTop: 20 }}>
      <MuiThemeProvider theme={theme}>
        <MenuAppBar title="Add Boat" color="primary" />
      </MuiThemeProvider>
      <form
        style={{ marginTop: 50 }}
        autocomplete="off"
        onSubmit={props.createBoat(props.history)}
      >
        <TextField
          label="Boat Name"
          value={props.boat.name}
          margin="normal"
          onChange={e => props.onChange('name', e.target.value)}
          required
          className={props.classes.input}
        />
        <TextField
          label="Photo"
          value={props.boat.image}
          margin="normal"
          type="file"
          onChange={e => props.onChange('image', e.target.value)}
          className={props.classes.input}
        />

        <TextField
          label="Boat Make"
          value={props.boat.boatMake}
          margin="normal"
          onChange={e => props.onChange('boatMake', e.target.value)}
          required
          className={props.classes.input}
        />

        <TextField
          label="Boat Model"
          value={props.boat.boatModel}
          margin="normal"
          onChange={e => props.onChange('boatModel', e.target.value)}
          className={props.classes.input}
        />
        <TextField
          label="Length"
          value={props.boat.lengthFt}
          margin="normal"
          onChange={e => props.onChange('lengthFt', e.target.value)}
          className={props.classes.input}
        />
        <TextField
          label="Beam"
          value={props.boat.beamFt}
          margin="normal"
          onChange={e => props.onChange('beamFt', e.target.value)}
          className={props.classes.input}
        />

        <TextField
          label="Hull Material"
          value={props.boat.hullMaterial}
          margin="normal"
          onChange={e => props.onChange('hullMaterial', e.target.value)}
          className={props.classes.input}
        />
        <TextField
          label="Number of Engines"
          value={props.boat.numOfEngines}
          margin="normal"
          onChange={e => props.onChange('beamFt', e.target.value)}
          className={props.classes.input}
        />
        <TextField
          label="Engine 1 Make / Model"
          value={props.boat.engine1MakeModel}
          margin="normal"
          onChange={e => props.onChange('engine1MakeModel', e.target.value)}
          className={props.classes.input}
        />

        <TextField
          label="Additional Info"
          value={props.boat.additionalInfo}
          margin="normal"
          onChange={e => props.onChange('additionalInfo', e.target.value)}
          className={props.classes.input}
        />
        <Button
          variant="fab"
          color="primary"
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
  boat: state.newBoat.data,
  isSaving: state.newBoat.isSaving,
  isError: state.newBoat.isError,
  errMessage: state.newBoat.errMessage
})

const mapActionToProps = dispatch => ({
  onChange: (field, value) =>
    dispatch({ type: NEW_BOAT_FORM_UPDATED, payload: { [field]: value } }),
  createBoat: history => e => {
    e.preventDefault()
    dispatch(addBoat(history))
  }
})

const connector = connect(
  mapStateToProps,
  mapActionToProps
)

export default withDrawer(connector(withStyles(styles)(BoatNew)))
