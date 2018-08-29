import React from 'react'
import MenuAppBar from '../../components/menuAppBar'
import withDrawer from '../../components/with-drawer'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import CardActions from '@material-ui/core/CardActions'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import MaintenanceListItem from '../../components/maintenanceListItem'

import { getMaintenance } from '../../action-creators/maintenances'
import {
  CardContent,
  Typography
} from '../../../node_modules/@material-ui/core'

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}

class MaintenanceView extends React.Component {
  componentDidMount() {
    const { getMaintenance, match } = this.props
    getMaintenance(match.params.id)
  }
  render() {
    const { history, isLoading, classes, maintenance } = this.props
    return (
      <div style={{ paddingTop: 56 }}>
        <MenuAppBar
          history={history}
          backArrow={true}
          title="Maintenance"
          style={{ padding: 56 }}
        />
        <Card className={classes.card}>
          <CardContent>
            <center>
              <Typography className={classes.title} color="textSecondary">
                {maintenance.date} {maintenance.boat}
              </Typography>
              <Typography className={classes.title} color="textSecondary">
                Engine Hours: {maintenance.engineHours} Service Type:{' '}
                {maintenance.serviceType}
              </Typography>
              <Typography className={classes.title} color="textSecondary">
                {maintenance.performedBy} {maintenance.location}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Additional Notes {maintenance.comments}
              </Typography>
            </center>
            <Typography component="p">
              Entered By {maintenance.enteredBy}
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  maintenance: state.currentMaintenance
})

const mapActionToProps = dispatch => ({
  getMaintenance: id => dispatch(getMaintenance(id))
})

const connector = connect(
  mapStateToProps,
  mapActionToProps
)

export default connector(withStyles(styles)(MaintenanceView))
