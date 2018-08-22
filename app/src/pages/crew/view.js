import React from 'react'
import ViewAppBar from '../../components/viewAppBar'
import withDrawer from '../../components/with-drawer'
import { isNil } from 'ramda'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Phone from '@material-ui/icons/PhoneIphoneTwoTone'
import Email from '@material-ui/icons/ContactMailTwoTone'
import {
  Card,
  Grid,
  GridList,
  GridListTile,
  CardMedia
} from '@material-ui/core'

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
  media: {
    width: '15%',
    display: 'flex',
    justifyContent: 'space-around'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  }
})

const NoPhoto = () => (
  <img
    alt="Default Photo"
    src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-1/c44.45.551.551/s320x320/578553_105093442978321_741648331_n.jpg?_nc_cat=0&oh=0d869ddb1f8abbb34c48884b21ab4574&oe=5BF47A19"
  />
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
              <ViewAppBar
                history={'/crew'}
                backArrow={true}
                title={`${crewMember.firstName} ${crewMember.lastName}`}
                style={{ padding: 56 }}
              />

              <Card className={classes.root}>
                <Grid item xs={12} className={classes.gridList}>
                  <CardMedia className={classes.media}>
                    {isNil(crewMember.image) ? (
                      <NoPhoto />
                    ) : (
                      <img src={crewMember.image} />
                    )}
                  </CardMedia>
                </Grid>
                <CardContent>
                  <Grid item xs={12}>
                    <Typography>
                      <h2>{`${crewMember.firstName} ${
                        crewMember.lastName
                      }`}</h2>
                    </Typography>
                  </Grid>
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
