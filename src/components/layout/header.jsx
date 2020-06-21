import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Header = () => (
  <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    <Navbar.Brand as={Link} to="/" href="/">
      Lead Managers
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/login" href="/login">
          sign in
        </Nav.Link>
        <Nav.Link as={Link} to="/register" href="/register">
          sign up
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
