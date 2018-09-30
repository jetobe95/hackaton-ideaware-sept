import React, { Component } from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

const Landing = props => {
  return (
    <div>
      <header className="sh-landing">
        <div className="sh-landing-logo" />
        <div className="sh-landing-content">
          <h1 className="sh-landing-title">the house of music.</h1>
          <p className="sh-landing-p">
            Play and download music on your mobile, tablet and computer.
          </p>
        </div>
        <div className="sh-landing-buttons">
          <NavLink  exact to='/welcome' className="btn-facebook">
            <i className="fab fa-facebook-f" />
            &nbsp;&nbsp;Facebook
          </NavLink>
          <button className="btn-twitter">
            <i className="fab fa-twitter" />
            &nbsp;&nbsp;Twitter
          </button>
          <div className="sh-landing-or">- OR -</div>
          <NavLink 
          
          exact to='/welcome' className="sh-landing-a" href>
            Try without logging in
          </NavLink>
        </div>
      </header>
      <section className="sh-landing-section">
        <div className="sh-landing-section-div">
          <h2>LOREM IPSUM DOLOR SIT AMET.</h2>
        </div>
      </section>
    </div>
  );
};
export default Landing