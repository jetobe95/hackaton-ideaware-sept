import React, { Component } from 'react';
import{NavLink} from 'react-router-dom';
import './nav-link.css'
export default class NavLinkContainer extends Component {
  render() {
    return (
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
    );
  }
}
