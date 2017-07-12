import React, { Component } from 'react';
import { render } from 'react-dom';
import Example from '../../src';
import '../../css/default.css';

class Demo extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>react-countdown-timer Demo</h1>
        <Example date={'06/10/2018 12:00:00'} />
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
