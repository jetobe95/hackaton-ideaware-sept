import React from 'react';

export default ({ image, name }) => {
  return (
    <div
      className={selected ? '.container-genre-selected' : 'container-genre'}
      style={{
        backgroundImage: `url(${image})`
      }}
    >
      <p className="Text-image-selection">{name}</p>

    
    </div>
  );
};
