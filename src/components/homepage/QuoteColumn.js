import React, { Component } from 'react'
import {
  Header,
  Grid
} from 'semantic-ui-react'

export default class QuoteColumn extends Component {
  render() {
    return (
      <Grid.Column verticalAlign="center" style={{ paddingBottom: '5em', paddingTop: '5em' }}>
        <Header as='h3'>{ '"' + this.props.quote + '"' }</Header>
        <Header as='h4' textAlign="center" content={this.props.quoteAuthor} subheader={this.props.authorPosition}/>
      </Grid.Column>
    );
  }
}
