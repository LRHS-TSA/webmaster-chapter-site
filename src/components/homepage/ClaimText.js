import React, { Component } from 'react'
import {
  Container,
  Header
} from 'semantic-ui-react'

export default class ClaimText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Header as='h3' style={{ fontSize: '2em' }}>{this.props.header}</Header>
        <p style={{ fontSize: '1.33em' }}>
          {this.props.text}
        </p>
      </Container>
    );
  }
}
