import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import './nav-link.css';
export default class NavLinkContainer extends Component {
  render() {
    return (
      <Fragment>
        <input
          type="text"
          placeholder="Search"
          style={{
            backgroundColor: '#252525',
            color: 'white',
            border: 'none',
            borderBottom: 'white',
            borderBottomWidth: 10,
            width: '100%',
            margin: 0,
            padding: 0
          }}
        />
        <ul>
          <li>
            <NavLink exact to="/Home" activeClassName="active-link">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink exact to="/browser" 
            
            activeClassName="active-link">Browse</NavLink>
          </li>
        </ul>
        <br/>
          <p className="title-side-bar" activeClassName="active-link">Your music</p>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active-link">My songs</NavLink>
          </li>
          <li>
            <NavLink exact to="/">Artist</NavLink>
          </li>
        </ul>
        <br/>
          <p className="title-side-bar">Playlists</p>
        <ul>
          <li>
            <NavLink exact to="/"> + Create a playlist</NavLink>
          </li>
         
        </ul>
      </Fragment>
    );
  }
}
