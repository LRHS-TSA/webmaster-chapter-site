import React, { Component } from 'react'

import {
  Image,
  Grid
} from 'semantic-ui-react'

import ClaimText from '../homepage/ClaimText'

export default class OfficerExert extends Component {
  render() {
    return (
     <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
        <Grid.Column width={8}>
            <ClaimText
            header={this.props.name}
            text={this.props.description}
            />
        </Grid.Column>
        <Grid.Column floated='right' width={6}>
            <Image
            bordered
            rounded
            size='large'
            src={this.props.image}
            />
        </Grid.Column>
        </Grid.Row>
     </Grid>
    );
  }
}
