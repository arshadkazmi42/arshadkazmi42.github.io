import React, { Component } from 'react';

import { Email, Github, LinkedIn, Twitter, Project } from '../../assets';

import DATA from '../../data/data.json';
import './style.css';

const topStyle = {
  height: '70%',
  'border-top-left-radius': '10px',
  'border-top-right-radius': '10px',
  'overflow': 'hidden',
  'background-image': `url(${DATA.background_url})`,
  'background-size': 'cover',
  'background-repeat': 'no-repeat'
};


class Card extends Component {

  render() {
    return (
      <React.Fragment>
        <div className='card'>
          <div style={topStyle}>
            <a href={`https://github.com/${DATA.username.github}`}>
              <button class='button-complete-profile'>Complete Profile</button>
            </a>
          </div>
          <div className='bottom'>
            <div className='bottom-column'>
              <div className='bottom-column-left'>
                <h1>{DATA.name}</h1>
                <h2>{`@${DATA.username.github}`}</h2>
                <hr />
                <div className='social-box'>
                  <a href={`https://github.com/${DATA.username.github}`}>
                    <img className='icon' src={Github} alt='Github' />
                  </a>
                  <a href={`https://twitter.com/${DATA.username.twitter}`}>
                    <img className='icon' src={Twitter} alt='Twitter' />
                  </a>
                  <a href={`https://www.linkedin.com/in/${DATA.username.linkedin}`}>
                    <img className='icon' src={LinkedIn} alt='LinkedIn' />
                  </a>
                  <a href={`mailto:${DATA.email}`}>
                    <img className='icon' src={Email} alt='Email' />
                  </a>
                </div>
              </div>
              <div className='bottom-column-right'>
                {
                  DATA.projects.map((project) => {
                    return (
                      <div className='bottom-right-box'>
                        <div class='bottom-right-row'>
                          <img className='icon' src={Project} alt='Pull Request' />
                          <div style={{marginLeft: '5px', padding: 'auto'}}>
                            <a className='project-name' href={project.url}>{project.name}</a>
                            <h2><u>Language:</u> {project.language}</h2>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
                <h2 className='view-more'><a href={`https://github.com/${DATA.username.github}?tab=repositories`}>View More</a></h2>
              </div>
            </div>
          </div>
        </div>
        <img class='profile' src={DATA.photo_url} alt='arshad' />
      </React.Fragment>
    )
  }
}

export default Card;