import React from 'react'
import './App.css'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Activities from './pages/activities/index'
import ActivityNew from './pages/activities/new'
import ActivityView from './pages/activities/view'
import ActivitySearch from './pages/activities/search'
import ActivityEdit from './pages/activities/edit'
import BoatNew from './pages/boats/new'
import CrewMemberNew from './pages/crew/new'
import MaintenanceNew from './pages/maintenances/new'
import ReminderNew from './pages/reminders/new'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/activities" component={Activities} />
      <Route exact path="/activities/new" component={ActivityNew} />
      <Route exact path="/activities/:id" component={ActivityView} />
      <Route exact path="/activities/search" component={ActivitySearch} />
      <Route exact path="/activities/:id/edit" component={ActivityEdit} />
      <Route exact path="/boats/new" component={BoatNew} />
      <Route exact path="/crew/new" component={CrewMemberNew} />
      <Route exact path="/maintenances/new" component={MaintenanceNew} />
      <Route exact path="/reminders/new" component={ReminderNew} />
    </Switch>
  </BrowserRouter>
)

export default App
