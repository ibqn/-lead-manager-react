import React from 'react'

import { Header, Alerts } from './components/layout'
import { Dashboard } from './components/leads'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container">
        <Alerts />
        <Switch>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
