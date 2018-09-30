import React from 'react';
import './genre.css';
import logo from './indie.png';
var sectionStyle = {
  backgroundImage: 'url(' + logo + ')'
};

const styl = image => ({
  width: '100%',
  height: 'auto',
  backgroundImage: `"url("${image}")"`
});
const Genre = ({ image, name }) => {
  return (
    <div
    className='container-genre'
      style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        textAlign:"center",
        backgroundImage: `url(${logo})`,

        
        width: 190,
        height: 85,
        backgroundRepeat: 'no-repeat'
      }}
    >
      <p className='Text-image'>{name}</p>

      {/* </p> */}
    </div>
  );
};

export default Genre;
