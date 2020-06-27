import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Header, Alerts } from './components/layout'
import { Dashboard } from './components/leads'
import { Register, Login } from './components/accounts'
import { PrivateRoute } from './components/auth'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { loadUser } from './reducers/auth/actions'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])

  return (
    <Router>
      <Header />
      <div className="container">
        <Alerts />
        <Switch>
          <PrivateRoute exact path="/">
            <Dashboard />
          </PrivateRoute>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
