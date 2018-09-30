import React, { Component, Fragment } from 'react';
import './App.css';
import LoadingStart from './sections/start/components/LoadingStart';
import LandingPageLayout from './sections/start/components/landing-page-layout';
import SoundHouseLogoWithSubtitle from './sections/start/components/sound-house-with-subtitle';
import title from './title.svg';
import Apploadingafterlogin from './sections/start/containers/App-loading-after-login';
import Genre from './sections/home/components/genre';
import Sidebar from './sections/home/components/sidebar';
import data from './datos.json';

import _ from 'lodash';
import { Router, Switch, NavLink, BrowserRouter } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Sidebar>
            <SoundHouseLogoWithSubtitle />

            <li>
              <ul>
                <input
                  type="text"
                  placeholder="Search"
                  style={{
                    backgroundColor: '#252525',
                    color: 'white',
                    border: 'none',
                    width: '100%',
                    margin: 0,
                    padding: 0
                  }}
                />
              </ul>
              <ul>
                <NavLink to="/" activeClassName="active-link">
                  Home
                </NavLink>
              </ul>
              <ul>
                <NavLink to="/">Browse</NavLink>
              </ul>
              <ul>
                <NavLink to="/">Your Music</NavLink>
              </ul>
            </li>
          </Sidebar>

          <div className="main">
            {_.map(data.genres,(genre)=><Genre {...genre}/>)}
           
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
