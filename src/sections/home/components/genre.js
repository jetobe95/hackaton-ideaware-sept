import React from 'react';
import './genre.css';
import checkbox from '../../../fotos/checkbox.png';
const Genre = ({ image, name,selected=false ,change}) => {
  return (
    <div
      onClick={() => change()}
      className={selected? '.container-genre-selected':"container-genre"}
      style={{
        flexDirection:'column',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        textAlign: 'center',
        backgroundImage: `url(${image})`,
        margin: 7,

        width: 190,
        height: 85,
        backgroundRepeat: 'no-repeat',
        
        border:selected?'border: 1px solid #ffffff':'none',
        backgroundColor: selected? 'rgba(255,255,255,0.9)':'rgba(255,255,255,0)' ,
       
        
      }}
    >
  {selected&&
    <img src={checkbox} className='checkbox-genre' alt=""/>
  
  }
      <p  style={selected?{fontSize:15}:{fontSize:20}} className="Text-image">{name}</p>

      {/* </p> */}
    </div>
  );
};

export default Genre;
