import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

const Login = () => {
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  })

  const handleSubmit = () => {}

  const handleChange = ({ target: { name, value } }) =>
    setState({ ...state, [name]: value })

  return (
    <Col md={6} className="m-auto">
      {JSON.stringify(state)}
      <Card body className="mt-5">
        <h2 className="text-center">Sign in</h2>
        <Form onSubmit={handleSubmit}>
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
