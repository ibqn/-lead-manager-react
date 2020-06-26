import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Link, Redirect } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import { REGISTER_FAILURE } from '../../reducers/auth/action-types'
import { setError } from '../../reducers/errors/actions'
import { registerUser } from '../../reducers/auth/actions'

const initialState = {
  username: '',
  email: '',
  password: '',
  password2: '',
}

const Register = () => {
  const dispatch = useDispatch()

  const [state, setState] = useState(initialState)

  const { isAuthenticated } = useSelector((state) => state.auth)

  const handleSubmit = (event) => {
    event.preventDefault()

    const { password, password2 } = state
    if (password !== password2) {
      dispatch({ type: REGISTER_FAILURE })
      dispatch(
        setError({ message: 'Passwords do not match', timestamp: Date.now() })
      )
    } else {
      dispatch(registerUser({ password2, ...state }))
      setState({ ...initialState })
    }
  }

  const handleChange = ({ target: { name, value } }) =>
    setState({ ...state, [name]: value })

  if (isAuthenticated) {
    return <Redirect to="/" />
  }

  return (
    <Col md={6} className="m-auto">
      {JSON.stringify(state)}
      <Card body className="mt-5">
        <h2 className="text-center">Sign up</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              type="text"
              name="username"
              onChange={handleChange}
              value={state.username}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              onChange={handleChange}
              value={state.email}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              name="password"
              onChange={handleChange}
              value={state.password}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Repeat password</Form.Label>
            <Form.Control
              required
              type="password"
              name="password2"
              onChange={handleChange}
              value={state.password2}
            />
          </Form.Group>
          <Form.Group>
            <Button type="submit" variant="primary">
              Create account
            </Button>
          </Form.Group>
          <p>
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </Form>
      </Card>
    </Col>
  )
}

export default Register
