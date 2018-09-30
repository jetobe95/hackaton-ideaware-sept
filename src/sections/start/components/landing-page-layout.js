import React from 'react'
import './loading-start.css';
const LandingPageLayout = ({children,backgroundColor}) => {
  return (
    <div className='landing-page-layout' style={{backgroundColor,zIndex:0}}>
      {children}
    </div>
  )
}

export default LandingPageLayout
