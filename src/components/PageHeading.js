import React, { Component } from 'react'
import MenuContent from './MenuContent'

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'

const FixedMenu = () => (
  <Menu fixed='top' size='large'>
    <MenuContent />
  </Menu>
)

export default class PageHeading extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ visible: false })
  showFixedMenu = () => this.setState({ visible: true })

  constructor(props) {
    super(props)
  }

  render() {
    const { visible } = this.state

    return (
      <div>
        { visible ? <FixedMenu /> : null }

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <MenuContent />
              </Menu>
            </Container>

            <Container text>
              <Header
                as='h1'
                content={this.props.title}
                inverted
                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
              />
              <Header
                as='h2'
                content={this.props.subtitle}
                inverted
                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
              />
              { this.props.link != null ?
                <Button primary size='huge'>
                  {this.props.linkLabel}
                  <Icon name='right arrow' />
                </Button> :
                null
               }
            </Container>
          </Segment>
        </Visibility>
      </div>
    )
  }
}
