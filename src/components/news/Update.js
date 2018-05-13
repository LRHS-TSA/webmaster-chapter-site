import React, {Component} from 'react'

import { Card, Image } from 'semantic-ui-react'



export default class Update extends Component {
  render() {
    return (
      <Card fluid>
        <Image src={this.props.image} />
        <Card.Content>
          <Card.Header>
            {this.props.header}
          </Card.Header>
          <Card.Meta>
            <span className='date'>
                {this.props.date}
            </span>
          </Card.Meta>
          <Card.Description>
            {this.props.children}
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}