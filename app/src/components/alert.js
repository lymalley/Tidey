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

const styles = {}

type Props = {
	data: WeatherAlert,
	classes: Object,
	timezone: string
}

export function formatRegions(regions: Array<string>) {
	/* eslint-disable no-case-declarations */
	switch (regions.length) {
		case 0:
			return
		case 1:
			return regions[0]
		case 2:
			return regions.join(' and ')
		default:
			const last = regions.splice(-1, 1)
			return `${regions.join(', ')}, and ${last}`
		/* eslint-enable no-case-declarations */
	}
}

export const AlertIcon = ({
	severity,
	...props
}: {
	severity: WeatherAlertSeverity
}) => {
	switch (severity) {
		case 'advisory':
			return <Notice {...props} />
		case 'watch':
			return <Warning {...props} />
		case 'warning':
			return <ErrorIcon {...props} />
		default:
	}
}

class Alert extends React.Component<Props> {
	render() {
		const { classes, data } = this.props
		const endTime = formatDate({
			time: data.expires,
			timezone,
			format: 'lll'
		})

		return (
			<Card className={classes.card}>
				<CardHeader
					title={`${data.title} until ${endTime}`}
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