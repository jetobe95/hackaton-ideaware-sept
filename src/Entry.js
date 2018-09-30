import React, { Component, Fragment } from 'react';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import Landing from './sections/landing';
import App from './App';
import HomeLayoutListMusic from './sections/home/components/home-layout-list-music';
import homeListMusic from './sections/home/containers/home-list-music';
import Sidebar from './sections/sidebar/components/sidebar';
import SoundHouseLogoWithSubtitle from './sections/start/components/sound-house-with-subtitle';
import NavLinkContainer from './sections/sidebar/containers/nav-link';

export default class Entry extends Component {
  state={
    sidebar:false
  }
  render() {
    

    return (
      <BrowserRouter>
        {this.state.sidebar&&
          <Sidebar>
          <SoundHouseLogoWithSubtitle />
        </Sidebar>
        }
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/welcome" component={homeListMusic} />
          <Route />
        </Switch>
      </BrowserRouter>
    );
  }
}
