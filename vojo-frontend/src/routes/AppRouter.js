import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Edit from '../views/Edit';

import Homepage from '../views/Homepage'
import List from '../views/List';
import Login from '../views/Login'

export default function AppRouter () {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/list' component={List} />
        <Route exact path='/edit' component={Edit} />
      </Switch>
    </Router>
  );
}
