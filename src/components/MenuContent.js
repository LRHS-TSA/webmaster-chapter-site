import React from 'react'

import {
  Container,
  Menu,
  Image
} from 'semantic-ui-react'

import { NavLink } from 'react-router-dom'

import logo from '../assets/logo.svg'

export default () => (
  <Container>
    <Menu.Item header><Image src={logo} size='tiny' verticalAlign='middle' /></Menu.Item>
    <NavLink exact to="/" activeClassName="active" className="item">Home</NavLink>
    <NavLink to="/program" activeClassName="active" className="item">Program</NavLink>
    <NavLink to="/courses" activeClassName="active" className="item">Courses</NavLink>
  </Container>
)
