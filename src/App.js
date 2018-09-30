import _ from 'lodash';
import React, { Component } from 'react';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import './App.css';
import data from './datos';
import Genre from './sections/home/components/genre';
import Sidebar from './sections/home/components/sidebar';
import SoundHouseLogoWithSubtitle from './sections/start/components/sound-house-with-subtitle';
import Welcome from './sections/home/containers/welcome';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='browser-router'>
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
            <li>
              <ul>Your Music</ul>
            </li>
          </Sidebar>

          <Switch >
            <Route path="/" component={Welcome} />
            <Route />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
