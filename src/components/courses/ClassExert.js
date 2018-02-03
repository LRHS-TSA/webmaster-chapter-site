import React, { Component } from 'react'
import ClaimText from '../homepage/ClaimText'

export default class ClassExert extends Component {
  render() {
    return (
      <div style={{ marginTop: '1em', marginBottom: '1em' }}>
        <ClaimText
          header={this.props.title}
          text={this.props.text}
        />
      </div>
    );
  }
}
