import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'
import List from '@material-ui/core/List'
import MenuAppBar from '../../components/menuAppBar'
import withDrawer from '../../components/with-drawer'
import CrewListItems from '../../components/crewListItems'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
})

const Crew = props => (
  <div style={{ paddingTop: 56 }}>
    <Paper style={{ background: 'lightGrey' }}>
      <MenuAppBar
        title="Crew"
        addNew
        goToURL="/crew/new"
        history={props.history}
      />

      <div className={props.classes.root} style={{ paddingTop: 20 }}>
        <Grid item xs={12}>
          <List>
            {map(crewMember => CrewListItems(crewMember), props.crew)}
          </List>
        </Grid>
      </div>
    </Paper>
  </div>
)

const mapStateToProps = state => ({
  crew: state.getCrew
})

const connector = connect(mapStateToProps)

export default withDrawer(connector(withStyles(styles)(Crew)))

{
  /*<Link to="/crew/new">
<Button
  varient="extendedFab"
  color="white"
  aria-label="Add Crew Member"
  style={{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  }}
>
  <AddIcon />
</Button>
<Link>
/*/
}
