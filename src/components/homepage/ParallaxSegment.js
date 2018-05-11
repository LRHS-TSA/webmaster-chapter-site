import React, { Component } from 'react'
import {
  Segment
} from 'semantic-ui-react'

import Plx from "react-plx";

export default class ParallaxSegment extends Component {
  render() {
    return (
        <Plx parallaxData={this.props.parallaxEffect}>
            <Segment style={this.props.segmentStyle} vertical>
                {this.props.children}
            </Segment>
        </Plx>
    )
  }
}
