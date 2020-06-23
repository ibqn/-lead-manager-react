import React from 'react'
import { Route } from 'react-router-dom'

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return children
      }}
    />
  )
}

export default PrivateRoute
