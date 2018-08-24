import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar'
import { head } from 'ramda'
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Crewtar from '@material-ui/icons/Person'
import PhoneIcon from '@material-ui/icons/PhoneIphoneRounded'
import MailIcon from '@material-ui/icons/MailRounded'
const CrewListItems = crewMember => (
  <div key={crewMember._id}>
    <Grid constainer spacing={12} style={{ padding: 4 }}>
      <Grid item xs={12}>
        <Paper elevation={1}>
          <ListItemIcon>
            <Avatar>
              <Crewtar />
            </Avatar>
          </ListItemIcon>
          <center>
            <ListItemText>
              <Grid item xs={12}>
                <Typography variant="title">
                  {`${crewMember.firstName} ${crewMember.lastName}`}
                </Typography>
              </Grid>
              <Typography variant="caption">{crewMember.title}</Typography>
              <Grid container>
                <Grid item xs={6}>
                  <PhoneIcon /> {crewMember.phoneNumber}
                </Grid>
                <Grid item xs={6}>
                  <MailIcon /> {crewMember.email}
                </Grid>
              </Grid>
            </ListItemText>
          </center>
        </Paper>
      </Grid>
    </Grid>
  </div>
)

export default CrewListItems

{
  /*
const CrewListItems = crewMember => (
  <div key={crewMember._id}>
    <Grid constainer spacing={12} style={{ padding: 4 }}>
      <Grid item xs={12}>
        <Paper elevation={1}>
          <Link to={`/crew/${crewMember._id}`} className="router-link">
            <ListItem button>
              <ListItemIcon>
                <Avatar>{crewMember.image}</Avatar>
              </ListItemIcon>
              <ListItemText>
                <Typography variant="headline">
                  {`${crewMember.firstName} ${crewMember.lastName}`}
                </Typography>
                <Typography variant="caption">{crewMember.title}</Typography>
              </ListItemText>
            </ListItem>
          </Link>
        </Paper>
      </Grid>
    </Grid>
  </div>
)

export default CrewListItems
*/
}
