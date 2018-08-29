import React from 'react'
import MenuAppBar from '../../components/menuAppBar'
import withDrawer from '../../components/with-drawer'
import { connect } from 'react-redux'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import lightBlue from '@material-ui/core/colors/lightBlue'
import Card from '@material-ui/core/Card'
import { Link } from 'react-router-dom'
import ReminderListItem from '../../components/reminderListItems'
import AlertAt from '../../lib/setAlert'
import { getReminder } from '../../action-creators/reminders'
import { withRouter } from 'react-router-dom'
import {
  CardContent,
  Typography
} from '../../../node_modules/@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: lightBlue
  }
})

class ReminderView extends React.Component {
  componentDidMount() {
    const { getReminder, match } = this.props
    getReminder(match.params.id)
  }
  render() {
    const { history, isLoading } = this.props
    return (
      <div style={{ paddingTop: 56 }}>
        <center>
          <MuiThemeProvider theme={theme}>
            <MenuAppBar
              // history={history}
              //  backArrow={true}
              //  edit={true}
              //  goToURL='/reminders'
              title="Reminder"
              style={{ padding: 56 }}
            />
          </MuiThemeProvider>
          {isLoading ? (
            <p>...Loading</p>
          ) : (
            <Card>
              <CardContent>
                Remind At
                <ReminderListItem />
              </CardContent>
            </Card>
          )}
        </center>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  reminder: state.currentReminder
})

const mapActionToProps = dispatch => ({
  getReminder: id => dispatch(getReminder(id))
})

const connector = connect(
  mapStateToProps,
  mapActionToProps
)

export default withDrawer(connector(ReminderView))
