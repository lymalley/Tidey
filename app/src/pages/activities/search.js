{
  /*import React from 'react'
import withDrawer from '../../components/with-drawer'
import MenuAppBar from '../../components/menuAppBar'
import { map } from 'ramda'
import { connect } from 'react-redux'
import List from '@material-ui/core/List'
import ActivityListItems from '../../components/activityListItems'
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search'

const styles = theme => ({
  input: {
    width: '50%',
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 8
  }
})

const activitySearch = props => {
  const { classes, history } = props
  return
  ;<div style={{ paddingTop: 56 }}>
    <MenuAppBar title="Activities" history={history} />
    <TextField
      label={SearchIcon}
      value={SearchTxt}
      onChange={e => onTextFieldChange(e.target.value)}
      margin="normal"
      required
      style={classes.input}
    />
    <List>
      {map(activity => ActivityListItems(activity), props.activities)}
    </List>
  </div>
}

const mapStateToProps = state => ({
  resources: state.activities
})

const connector = connect(mapStateToProps)

export default withDrawer(connector(ActivitySearch))*/
}
