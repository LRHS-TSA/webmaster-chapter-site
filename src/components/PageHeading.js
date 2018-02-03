import React, { Component } from 'react'
import MenuContent from './MenuContent'

import {
  Container,
  Header,
  Icon,
  Menu,
  Segment,
  Visibility,
  Image
} from 'semantic-ui-react'

import { fadeIn } from 'react-animations';
import { Parallax, Background } from 'react-parallax';
import Radium, {StyleRoot} from 'radium';

import { NavLink } from 'react-router-dom'


const styles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}


export default class PageHeading extends Component {

  render() {
    return (
      <div>
        <Menu inverted pointing fixed='top' size='large' style={{ backgroundColor: '#1b1c1d' }}>
          <MenuContent />
        </Menu>
        <Parallax
          blur={10}
          bgImage={this.props.image}
          bgImageAlt="the cat"
          strength={300}
        >
        <Segment
          textAlign='center'
          style={{ minHeight: 700, padding: '1em 0em' }}
          vertical

        >
          <Container text>
            <StyleRoot>
              <div style={styles.fadeIn}>
              <Header
                as='h1'
                content={this.props.title}
                inverted={this.props.inverted}
                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
              />
              <Header
                as='h2'
                content={this.props.subtitle}
                inverted={this.props.inverted}
                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
              />
              </div>
            </StyleRoot>
            { this.props.link != null ?
              <NavLink to="/program" className="ui huge primary button" style={{marginTop: '1em'}}>
                {this.props.linkLabel}
                <Icon name='right arrow' />
              </NavLink> :
              null
              }
          </Container>
        </Segment>
      </Parallax>
    </div>
   ) 
  }
}
