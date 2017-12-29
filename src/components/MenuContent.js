import React from 'react'

import {
  Container,
  Menu,
} from 'semantic-ui-react'

import { NavLink } from 'react-router-dom'

export default () => (
  <Container>
    <NavLink exact to="/" activeClassName="active" className="item">Home</NavLink>
    <Menu.Item as='a'>Program</Menu.Item>
    <NavLink to="/courses" activeClassName="active" className="item">Courses</NavLink>
  </Container>
)
