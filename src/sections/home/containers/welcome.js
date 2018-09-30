import React, { Component } from 'react';
import './welcome.css';
import _ from 'lodash';
import data from '../../../datos';
import Genre from '../components/genre';
import { NavLink } from 'react-router-dom';
export default class Welcome extends Component {
  state = {
    sl: false
  };
  render() {
    const { sl } = this.state;
    return (
      <div className="main">
        <div className="" style={{ display: 'flex' }}>
          <div>
            <h1 className="title-select-genres">Welcome, {'Jeffrey'}</h1>
            <h3 style={{ color: 'white', marginTop: 2, marginBottom: 20 }}>
              Select genres of your intereset
            </h3>
          </div>
          <h3 style={{ color: 'white', alignSelf: 'flex-end' }}>
            {sl ? (
              <NavLink 
              onClick={()=>this.props.handleSidebar()}
              className=""  to="/loading">
                {'Continue >> '}
              </NavLink>

            ) : (
              <NavLink 
              
              onClick={()=>this.props.handleSidebar()}
              className="" to="/loading">
                {' '}
                Skip >>{' '}
              </NavLink>
            )}
          </h3>
          <div />
        </div>
        <div className="main-inner">
          {_.map(data, genre => (
            <Genre
              key={genre.id}
              change={() => this.setState({ sl: !sl })}
              selected={this.state.sl}
              {...genre}
            />
          ))}
        </div>
      </div>
    );
  }
}
