mport React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CardHeader from '@material-ui/core/CardHeader'
import { shell } from 'electron'
import Notice from '@material-ui/icons/Notifications'
import Warning from '@material-ui/icons/Warning'
import ErrorIcon from '@material-ui/icons/Error'
import formatDate from '../lib/format-date'
import { addBoat } from '../action-creators/boats';

const styles = {}

type Props = {
	data: WeatherAlert,
	classes: Object,
	timezone: string
}





class Alert extends React.Component{
	render() {
		const { classes, alertAt, reminder } = this.props
		const alertAt = subtract(reminder.dueAtHours, reminder.remindHrsBefore)
			
	

		return (
			<Card className={classes.card}>
				<CardHeader
					title={`${reminder.boatName} due at ${reminder.dueAtHours}`}
					subheader={formatRegions(data.regions)}
					avatar={<AlertIcon severity={data.severity} />}
				/>
				<CardContent>
					<Typography>{data.description}</Typography>
				</CardContent>
				<CardActions>
					<Button
						size="small"
						onClick={shell.openExternal.bind(null, data.uri)}
					>
						Learn More
					</Button>
				</CardActions>
			</Card>
		)
	}
}

export default withStyles(styles)(Alert)

getReminders
{(activity.boatName === reminder.boatName && activity.engineHours >= reminder.alertAt) ? alert('Service Due')}