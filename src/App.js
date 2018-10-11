import React, { Component } from 'react';

import { Card } from './components'

import './App.css';
import DATA from './data/data.json';

const appHeaderStyle = {
  'background-color': '#282c34',
  'background-image': `url(${DATA.background_url})`,
  'background-size': 'cover',
  'background-repeat': 'no-repeat',
  'min-height': '100vh',
  'display': 'flex',
  'flex-direction': 'column',
  'align-items': 'center',
  'justify-content': 'center',
  'font-size': 'calc(10px + 2vmin)',
  'color': 'white'
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header style={appHeaderStyle}>
          <Card />
        </header>
      </div>
    );
  }
}

export default App;
