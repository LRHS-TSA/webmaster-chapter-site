import React, { Component } from 'react'
import MenuContent from './MenuContent'

import {
  Container,
  Header,
  Icon,
  Menu,
  Segment
} from 'semantic-ui-react'

import { fadeIn } from 'react-animations';
import { Parallax, Background } from 'react-parallax';
import Radium, {StyleRoot} from 'radium';
import BlurImageLoader from 'react-blur-image-loader';

import { NavLink } from 'react-router-dom'

import Plx from "react-plx";


const styles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}

const parallaxEffect = [
  {
    start: "0%",
    end: "35%",
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: "opacity"
      },
      {
        startValue: 0,
        endValue: -20,
        unit: "%",
        property: "translateY"
      },
    ]
  }
]


export default class PageHeading extends Component {

  render() {
    return (
      <div>
        <Menu inverted pointing fixed='top' size='large' style={{ backgroundColor: '#1b1c1d' }}>
          <MenuContent />
        </Menu>
        <Plx parallaxData={parallaxEffect}>
          <Parallax
            blur={10}
            bgImageAlt=""
            strength={0}
            bgWidth="auto"
            bgHeight="auto"
            className="parallax"
          >
          <Segment
            textAlign='center'
            style={{ minHeight: '100vh', padding: '1em 0em' }}
            vertical

          >
            <Container text>
              <StyleRoot>
                <div style={styles.fadeIn}>
                <Header
                  as='h1'
                  content={this.props.title}
                  inverted={this.props.inverted}
                  style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '40vh' }}
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
          <Background className="parallax-background">
            <BlurImageLoader src={this.props.image}
                          preview={this.props.thumbnail}
                          fullCover={true}
                          maxBlurLevel={10}
                          transitionTime={30}/>
          </Background>
        </Parallax>
      </Plx>
    </div>
   )
  }
}
