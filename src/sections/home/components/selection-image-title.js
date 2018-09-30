import React from 'react';
import './selection-image.css'
export default ({ image, name }) => {
  return (
    <div
      className='container-selection'
      style={{
        backgroundImage: `url(${image})`
      }}
    >
      <p className="Text-image-selection">{name}</p>

    
    </div>
  );
};
