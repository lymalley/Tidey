import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import rightNow from '../lib/rightNow'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '95%'
  }
})

function TimePickers(props) {
  const { classes } = props

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="time"
        type="time"
        //  className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
        inputProps={{
          step: 300 // 5 min
        }}
      />
    </form>
  )
}

TimePickers.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TimePickers)
