import React from 'react'
import MenuAppBar from '../../components/menuAppBar'
import withDrawer from '../../components/with-drawer'
import { isEmpty } from 'ramda'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import lightBlue from '@material-ui/core/colors/lightBlue'
import { Card, Grid, GridList, GridListTile } from '@material-ui/core'

import CrewListItem from '../../components/crewListItems'

import { getCrewMember } from '../../action-creators/crew'
import {
  CardContent,
  Typography
} from '../../../node_modules/@material-ui/core'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  }
})

const NoPhoto = () => (
  <img alt="Default Photo of dog on a Boat" src="jack_boating2.jpg" />
)

class CrewMemberView extends React.Component {
  componentDidMount() {
    const { getCrewMember, match } = this.props
    getCrewMember(match.params.id)
  }
  render() {
    const { history, crewMember, classes, match } = this.props
    return (
      <React.Fragment>
        {match.params.id === crewMember._id ? (
          <div style={{ paddingTop: 56 }}>
            <center>
              <MenuAppBar
                history={history}
                backArrow={true}
                title="Crew Member"
                style={{ padding: 56 }}
              />

              <Card className={classes.root}>
                <GridList cellHeight={160} className={classes.gridList}>
                  <GridListTile cols={2} style={{ height: 'auto' }}>
                    {isEmpty(crewMember.image) ? (
                      <NoPhoto />
                    ) : (
                      <img src={crewMember.image} />
                    )}
                  </GridListTile>
                  <GridListTile>
                    <Grid item xs>
                      <Typography>
                        <h2>{`${crewMember.firstName} ${
                          crewMember.lastName
                        }`}</h2>
                      </Typography>
                    </Grid>
                  </GridListTile>
                </GridList>
                <CardContent>
                  <CrewListItem />
                </CardContent>
              </Card>
            </center>
          </div>
        ) : (
          'Loading...'
        )}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  crewMember: state.currentCrewMember
})

const mapActionToProps = dispatch => ({
  getCrewMember: id => dispatch(getCrewMember(id))
})

const connector = connect(
  mapStateToProps,
  mapActionToProps
)

export default withDrawer(connector(withStyles(styles)(CrewMemberView)))
