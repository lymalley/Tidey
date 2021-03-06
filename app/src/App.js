import React, { Component } from 'react'
import './App.css'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Activities from './pages/activities/index'
import ActivityNew from './pages/activities/new'
import ActivityView from './pages/activities/view'
//import ActivitySearch from './pages/activities/search'
import ActivityEdit from './pages/activities/edit'
//import Boats from './pages/boats'
//import BoatNew from './pages/boats/new'
//import BoatView from './pages/boats/view'
//import Crew from './pages/crew/index'
//import CrewMemberNew from './pages/crew/new'
//import CrewMemberView from './pages/crew/view'
import Maintenances from './pages/maintenances/index'
import MaintenanceNew from './pages/maintenances/new'
import MaintenanceView from './pages/maintenances/view'
import Reminders from './pages/reminders/index'
import ReminderNew from './pages/reminders/new'
import ReminderView from './pages/reminders/view'
//import ReminderDelete from './pages/reminders/delete'
import ReminderEdit from './pages/reminders/edit'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/activities" component={Activities} />
          <Route exact path="/activities/new" component={ActivityNew} />
          <Route exact path="/activities/:id" component={ActivityView} />
          <Route exact path="/activities/:id/edit" component={ActivityEdit} />
          {/*  <Route exact path="/activities/search" component={ActivitySearch} />
         
         <Route exact path="/boats" component={Boats} />
          <Route exact path="/boats/new" component={BoatNew} />
          <Route exact path="/boats/:id" component={BoatView} />
          <Route exact path="/crew" component={Crew} />
          <Route exact path="/crew/new" component={CrewMemberNew} />
    <Route exact path="/crew/:id" component={CrewMemberView} />*/}
          <Route exact path="/maintenances" component={Maintenances} />
          <Route exact path="/maintenances/new" component={MaintenanceNew} />
          <Route exact path="/maintenances/:id" component={MaintenanceView} />
          <Route exact path="/reminders" component={Reminders} />
          <Route exact path="/reminders/new" component={ReminderNew} />
          <Route exact path="/reminders/:id" component={ReminderView} />

          <Route exact path="/reminders/:id/edit" component={ReminderEdit} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
