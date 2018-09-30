import React from 'react';
import './home-layout.css';
export default ({ children, title, subtitle }) => {
  return (
    <div className="home-layout">
      <div  style={{ display: 'flex',flexDirection:'column',alignItems:'center' }}>
        <h1 className="title-select-genres">{title}</h1>
        <h3 style={{ color: 'white', marginTop: 2, marginBottom: 20 }}>
          {subtitle}
        </h3>

        <div />
      </div>
      <div className="home-layout-inner">{children}</div>
    </div>
  );
};
