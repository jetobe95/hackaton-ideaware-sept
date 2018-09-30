import React from 'react';
import './home-layout.css';
export default ({ children, title, subtitle }) => {
  return (
    <div className="home-layout">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start'
        }}
      >
        <h1 className="title-home-layout">{title}</h1>
        <h3 style={{ color: 'white'}}>
          {subtitle}
        </h3>

        <div />
      </div>
      <div className="home-layout-inner">{children}</div>
    </div>
  );
};
