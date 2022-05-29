import React, { Component } from 'react';
import { Email, Github, Twitter } from './assets';

import DATA from './data/data.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='profile'>
        <img className='photo' src={DATA.photo_url} alt={DATA.name} />
        <span className='name'>{DATA.name}</span>
        <span className='tag-line'>{DATA.tag_line}</span>
        <div className='image-container'>
          <a href={`mailto:${DATA.email}`} target="_blank" rel="noopener noreferrer">
            <img alt='name' className='image' src={Email} />
          </a>
          <a href={`https://github.com/${DATA.username.github}`} target="_blank" rel="noopener noreferrer">
            <img alt='Github' className='image' src={Github} />
          </a>
          <a href={`https://twitter.com/${DATA.username.twitter}`} target="_blank" rel="noopener noreferrer">
            <img alt='Twitter' className='image' src={Twitter} />
          </a>
        </div>
        <span className='summary' dangerouslySetInnerHTML={{__html: DATA.summary}} />
        <span className='support-tag-line' dangerouslySetInnerHTML={{__html: DATA.patreon}} />
        <div className='support-container'>
          <iframe className='sponsor' src="https://github.com/sponsors/arshadkazmi42/button" title="Sponsor arshadkazmi42" height="35" width="116"></iframe>
        </div>
      </div>
    );
  }
}

export default App;
