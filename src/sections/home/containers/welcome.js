import React, { Component } from 'react';
import './welcome.css';
import _ from 'lodash';
import data from '../../../datos';
import Genre from '../components/genre';
export default class Welcome extends Component {
  render() {
    return (
      <div className="main">
        <div className="">
          <h1 className="title-select-genres">Welcome,Andrés</h1>
          <h3>Select genres of your intereset</h3>
        </div>
        <div className="main-inner">
          {_.map(data, genre => (
            <Genre key={genre.id} {...genre} />
          ))}
        </div>
      </div>
    );
  }
}
