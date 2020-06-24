import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

import { logoutUser } from '../../reducers/auth/actions'

const Header = () => {
  const { isAuthenticated, user, token } = useSelector((state) => state.auth)

  const dispatch = useDispatch()

  const handleLogout = () => {
    console.log('logout and token', token)
    dispatch(logoutUser(token))
  }

  const authLinks = () => (
    <>
      <Nav.Link as={Link} to="/login" href="/login">
        sign in
      </Nav.Link>
      <Nav.Link as={Link} to="/register" href="/register">
        sign up
      </Nav.Link>
    </>
  )

  const userLinks = ({ username }) => (
    <>
      <Navbar.Text className="mr-sm-2">
        Welcome <b>{username}</b>
      </Navbar.Text>
      <Button onClick={handleLogout} variant="outline-primary">
        sign out
      </Button>
    </>
  )

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand as={Link} to="/" href="/">
        Lead Managers
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          {isAuthenticated ? userLinks(user) : authLinks()}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
