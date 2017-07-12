import React, { Component } from 'react';
import { render } from 'react-dom';
import Example from '../../src';
import '../../css/default.css';

class Demo extends Component {
  render() {
    const date = '06/29/2018 12:00:00';
    const style = { textAlign: 'center' };
    return (
      <div>
        <h1 style={style}>react-countdown-timer Demo</h1>
        <h2 style={style}>starting {date}</h2>
        <Example date={date} />
        <textarea
          style={{
            width: '100%',
            textAlign: 'center'
          }}
          value={'<Example date={"06/29/2018 12:00:00"} />'}
        />
        <footer style={style}>
          <a
            style={{ color: 'white', fontSize: '20px' }}
            href="https://github.com/blairanderson/react-countdown-timer/"
          >
            GitHub
          </a>
        </footer>
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
