import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'

const Header = () => (
  <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    <Navbar.Brand as={Link} to="/" href="/">
      Lead Managers
    </Navbar.Brand>
  </Navbar>
)

export default Header
