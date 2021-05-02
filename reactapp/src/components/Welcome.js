import React from 'react';
import Logo from '../img/mylogo1024.png';

const Welcome = () => {
  return (
    <div className="content-container">
      <div className="logo-loading-container">
        <img className="logo-loading-breathing logo-loading" src={Logo} alt="RM loading"/>
      </div>
      <div className="welcome-content welcome-content-height welcome-font">
        <div className="fade-in-right-to-left">
          Hi, I am Robert.<br/>
          University Student and<br/>
          aspiring Web Developer.
        </div>
      </div>
    </div>
  )
}

export default Welcome
