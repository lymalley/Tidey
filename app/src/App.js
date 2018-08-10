import React from 'react'
import './App.css'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Activities from './pages/activities/index'
import ActivityNew from './pages/activities/new'
import ActivityView from './pages/activities/view'
import ActivitySearch from './pages/activities/search'
import ActivityEdit from './pages/activities/edit'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/activities" component={Activities} />
      <Route exact path="/activities/new" component={ActivityNew} />
      <Route exact path="/activities/:id" component={ActivityView} />
      <Route exact path="/activities/search" component={ActivitySearch} />
      <Route exact path="/activities/:id/edit" component={ActivityEdit} />
    </Switch>
  </BrowserRouter>
)

export default App
