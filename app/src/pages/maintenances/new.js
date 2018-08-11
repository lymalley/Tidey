import React from 'react'
import withDrawer from '../../components/with-drawer'
import MenuAppBar from '../../components/menuAppBar'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'

const styles = theme => ({
  input: {
    width: '50%',
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 8
  }
})

const MaintenanceNew = props => {
  return (
    <div style={{ paddingTop: 56 }}>
      <MenuAppBar title="Add Maintenance" />
      <h2>foo</h2>
    </div>
  )
}

export default withDrawer(withStyles(styles)(MaintenanceNew))
