import React, { Component, Fragment } from 'react';
import LandingPageLayout from '../components/landing-page-layout';
import Loading from './App-loading-after-login-logo.png';
import './App-loading.css';
import SoundHouseLogoWithSubtitle from '../components/sound-house-with-subtitle';
export default class Apploadingafterlogin extends Component {
  render() {
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
