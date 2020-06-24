import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Header, Alerts } from './components/layout'
import { Dashboard } from './components/leads'
import { Register, Login } from './components/accounts'
import { PrivateRoute } from './components/auth'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { loadUser } from './reducers/auth/actions'

const App = () => {
  const { token } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('app')
    dispatch(loadUser(token))
  }, [dispatch, token])

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
