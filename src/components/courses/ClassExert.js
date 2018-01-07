import React, { Component } from 'react'
import ClaimText from '../homepage/ClaimText'
import {
  Container,
  Header,
  Button,
  Grid,
  Image
} from 'semantic-ui-react'

export default class ClassExert extends Component {
  render() {
    return (
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <ClaimText
              header={this.props.title}
              text={this.props.text}
            />
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image
              rounded
              fluid
              verticalAlign='middle'
              size='big'
              src={this.props.imageLink}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
