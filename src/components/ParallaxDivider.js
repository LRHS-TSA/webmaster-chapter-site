import React, { Component } from 'react'

import { Parallax, Background } from 'react-parallax';
import BlurImageLoader from 'react-blur-image-loader';

export default class ParallaxDivider extends Component {
  render() {
    return (
        <Parallax
        bgImageAlt="parallax"
        strength={this.props.strength}
        bgWidth="auto"
        bgHeight="auto"
        className="parallax"
        >
            <div style={{height: 250}}> </div>
            <Background className="parallax-background">
              <BlurImageLoader src={this.props.image}
                            preview={this.props.thumbnail}
                            fullCover={true}
                            maxBlurLevel={10}
                            transitionTime={30}/>
            </Background>
        </Parallax>
    );
  }
}
