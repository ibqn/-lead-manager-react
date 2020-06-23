import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({ children, ...rest }) => {
  const auth = useSelector((state) => state.auth)

  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (auth.isLoading) {
          return <h2 className="text-center mt-5">Loading...</h2>
        } else if (auth.isAuthenticated) {
          return children
        }

        return (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }}
    />
  )
}

export default PrivateRoute
