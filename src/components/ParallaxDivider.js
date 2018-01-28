import React, { Component } from 'react'

import { Parallax } from 'react-parallax';

export default class ParallaxDivider extends Component {
  render() {
    return (
        <Parallax
        bgImage={this.props.image}
        bgImageAlt="parallax"
        strength={this.props.strength}
        style={{marginTop: '4em', marginBottom: '4em'}}
        >
            <div style={{height: 250}}> </div>
        </Parallax>
    );
  }
}
