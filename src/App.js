import _ from 'lodash';
import React, { Component ,Fragment} from 'react';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import './App.css';

import Sidebar from './sections/sidebar/components/sidebar';
import SoundHouseLogoWithSubtitle from './sections/start/components/sound-house-with-subtitle';
import Welcome from './sections/home/containers/welcome';
import NavLinkContainer from './sections/sidebar/containers/nav-link';
import AudioPlayer from './sections/player/player';
import Apploadingafterlogin from './sections/start/containers/App-loading-after-login';
import Home from './sections/home/containers/Home';
import SongDetailsComponent from './sections/widgets/song-details-component';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Sidebar>
            <SoundHouseLogoWithSubtitle />
            <NavLinkContainer/>

            <li>
              <ul>Your Music</ul>
            </li>
          </Sidebar>

          <Switch>
            <Route exact  path="/" component={SongDetailsComponent} />
            <Route  exact path="/loading" component={Apploadingafterlogin} />
            <Route />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
