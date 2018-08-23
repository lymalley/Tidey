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

const BoatNew = props => {
  return (
    <div style={{ paddingTop: 20 }}>
      <MenuAppBar title="Add Boat" color="primary" backArrow={true} />

      <form
        style={{ marginTop: 50 }}
        autoComplete="off"
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
          label="Engine Hours"
          value={props.boat.engineHours}
          margin="normal"
          onChange={e => props.onChange('engineHours', e.target.value)}
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
        <br />
        <center>
          <Button
            varient="button"
            color="white"
            type="submit"
            aria-label="add"
            aria-label="Add Crew Member"
            style={{
              background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
              borderRadius: 3,
              border: 0,
              padding: '0 30px',
              boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
            }}
          >
            <SaveIcon /> Save
          </Button>
        </center>
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
