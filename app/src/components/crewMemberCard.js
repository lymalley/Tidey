import React from 'react'
import PropType from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { propOr } from 'ramda'
import { Link } from 'react-router-dom'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import IconButton from '@material-ui/core/IconButton'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Typography from '@material-ui/core/Typography'
import cyan from '@material-ui/core/colors/cyan'
import MoreVertIcon from '@material-ui/icons/MoreVertOutlined'

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  actions: {
    display: 'flex'
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: cyan[500]
  }
})

const CrewMemberCard = data => {
  const { classes, crewMember } = this.props

  return (
    <div>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Crew Member" className={classes.avatar}>
              {crewMember.image}
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={`${crewMember.firstName} ${crewMember.lastName}`}
          subheader={crewMember.title}
        />

        <CardContent>
          <Typography component="p">
            {`Phone: ${crewMember.phone}  Email: ${crewMember.email}`}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default withStyles(styles)(CrewMemberCard)
