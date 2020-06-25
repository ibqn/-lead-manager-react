import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link, Redirect } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

import { loginUser } from '../../reducers/auth/actions'

const initialState = {
  username: '',
  password: '',
}

const Login = () => {
  const [state, setState] = useState(initialState)

  const { isAuthenticated } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('login')
    dispatch(loginUser(state))

    setState({ ...initialState })
  }

  const handleChange = ({ target: { name, value } }) =>
    setState({ ...state, [name]: value })

  if (isAuthenticated) {
    return <Redirect to="/" />
  }
  return (
    <Col md={6} className="m-auto">
      <Card body className="mt-5">
        <h2 className="text-center">Sign in</h2>
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
            <Button type="submit" variant="primary">
              Sign in
            </Button>
          </Form.Group>
          <p>
            Don't have an account yet? <Link to="/register">Sign up</Link>
          </p>
        </Form>
      </Card>
    </Col>
  )
}

export default Login
