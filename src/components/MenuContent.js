import React from 'react'
import {
  Container,
  Menu,
} from 'semantic-ui-react'

export default () => (
  <Container>
    <Menu.Item as='a' active>Home</Menu.Item>
    <Menu.Item as='a'>Program</Menu.Item>
    <Menu.Item as='a'>Classes</Menu.Item>
  </Container>
)
