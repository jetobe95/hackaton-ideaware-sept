import _ from 'lodash';
import React, { Component, Fragment } from 'react';
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
import HomeListMusicContainer from './sections/home/containers/home-list-music';
import { Fetcher } from './redux/actions/actions';
import { connect } from 'react-redux';
import Landing from './sections/landing';
class App extends Component {
  componentDidMount() {
    const { LoadVideos } = this.props
    LoadVideos('Vallenato')
  }
  state={sidebar:false}
  handleSidebar = () => {
    this.setState({sidebar:true})
  }
  
  render() {
    const { state } = this.props;
    console.log({state})
    
    return (
      <BrowserRouter>
        <Fragment>

        {this.state.sidebar&&
          <Sidebar>
            <SoundHouseLogoWithSubtitle />
            <NavLinkContainer />
          </Sidebar>
        
        }

          <Switch>
            <Route  exact path="/" render={()=><Landing />} />
            <Route  exact path="/welcome" render={()=><Welcome handleSidebar={this.handleSidebar}/>} />
            <Route exact path="/loading" component={Apploadingafterlogin} />
            <Route exact path="/Home" component={HomeListMusicContainer} />
           
          </Switch>
          {this.state.sidebar&&
          <AudioPlayer/>
          }
        </Fragment>
      </BrowserRouter>
    );
  }
}
const MapStateToProps = state => {
  return {
    state
  };
};
const MapDispatchToProps = dispatch => {
  return {
    LoadVideos:(q)=>dispatch(Fetcher(q)) 
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(App);


