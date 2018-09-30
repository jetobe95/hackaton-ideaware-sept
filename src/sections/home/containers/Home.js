import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import LandingPageLayout from '../../start/components/landing-page-layout';
import SelectionImages from '../components/selection-image-title';
import logo from '../../../sections/widgets/logo.svg';
export default class Home extends Component {
  render() {
    return (
      <LandingPageLayout>
        <HomeLayout title=' Made For You' subtitle='Music specially selected for you'>
          <div style={{
            display:'flex',
            flexWrap:'wrap'
           
          }}>
          <SelectionImages name='ROCK' image={logo}/>
          <SelectionImages name='p' image={logo}/>
          <SelectionImages name='p' image={logo}/>

          </div>
          
        </HomeLayout>

      </LandingPageLayout>
     
    );
  }
}
