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
          <div className="footer">
            <a class="github-button" href="https://github.com/arshadkazmi42/arshadkazmi42.github.io/subscription" data-icon="octicon-eye" aria-label="Watch arshadkazmi42/arshadkazmi42.github.io on GitHub">Watch</a>
            &nbsp;&nbsp;<a className="github-button footer-item" href="https://github.com/arshadkazmi42/arshadkazmi42.github.io" data-icon="octicon-star" aria-label="Star arshadkazmi42/arshadkazmi42.github.io on GitHub">Star</a>
            &nbsp;&nbsp;<a className="github-button footer-item" href="https://github.com/arshadkazmi42" aria-label="Follow @arshadkazmi42 on GitHub">Follow @arshadkazmi42</a>
            &nbsp;&nbsp;<a class="github-button" href="https://github.com/arshadkazmi42/arshadkazmi42.github.io/fork" data-icon="octicon-repo-forked" aria-label="Fork arshadkazmi42/arshadkazmi42.github.io on GitHub">Fork</a>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
