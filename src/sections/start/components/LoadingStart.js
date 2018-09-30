import React from 'react';
import './loading-start.css'
import logo from './loading-logo.svg'


const LoadingStart = ({backgroundColor,loadingLogo,children}) => {
    return (
      <div className='loading-start' style={{backgroundColor}}>
           <img src={loadingLogo||logo}/>
           {children}
      </div>
        
 
    );
}

export default LoadingStart;
