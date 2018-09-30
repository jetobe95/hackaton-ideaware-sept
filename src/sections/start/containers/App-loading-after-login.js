import React, { Component, Fragment } from 'react';
import LandingPageLayout from '../components/landing-page-layout';
import Loading from './App-loading-after-login-logo.png';
import './App-loading.css';
import {Redirect} from 'react-router-dom'
import SoundHouseLogoWithSubtitle from '../components/sound-house-with-subtitle';
export default class Apploadingafterlogin extends Component {
  state={
    loading:true
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({loading:false})
    }, 2000);
  }
  render() {

    if(!this.state.loading){
      return <Redirect to='/Home'/>
    }
    return (
      <Fragment>
        <SoundHouseLogoWithSubtitle />

        <LandingPageLayout backgroundColor="#DD166B">
          <img className="Logo-app-loading" src={Loading} />
        </LandingPageLayout>
      </Fragment>
    );
  }
}
