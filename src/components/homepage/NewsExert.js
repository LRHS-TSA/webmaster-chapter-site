import React, { Component } from 'react'
import {
  Container,
  Header,
  Button
} from 'semantic-ui-react'

export default class ClaimText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Header as='h3' style={{ fontSize: '2em' }}>{ this.props.header }</Header>
        <p style={{ fontSize: '1.33em' }}>
          { this.props.exert }
        </p>
        <Button as='a' size='large'>View</Button>
      </Container>
    );
  }
}
