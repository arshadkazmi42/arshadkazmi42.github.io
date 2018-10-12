import React, { Component } from 'react';

import { Card } from './components'

import './App.css';
import DATA from './data/data.json';

const appHeaderStyle = {
  'backgroundColor': '#282c34',
  'backgroundImage': `url(${DATA.background_url})`,
  'backgroundSize': 'cover',
  'backgroundRepeat': 'no-repeat',
  'minHeight': '100vh',
  'display': 'flex',
  'flexDirection': 'column',
  'alignItems': 'center',
  'justifyContent': 'center',
  'fontSize': 'calc(10px + 2vmin)',
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
