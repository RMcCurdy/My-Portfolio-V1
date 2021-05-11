import React from 'react';
import PixelArt from '../img/myPicNew.png';

const Welcome = () => {
    return (
        <div className='content-container'>
            <div className='logo-loading-container'>
                {/* <img className="logo-loading-breathing logo-loading" src={Logo} alt="RM loading"/> */}
            </div>
            <div className='welcome-content welcome-content-height welcome-font'>
                <div className='welcome-words fade-in-right-to-left'>
                    Hi, I'm Robert. <br />
                    University Student and <br />
                    aspiring Web Developer.
                </div>
                <img
                    className='welcome-image fade-in-left-to-right'
                    src={PixelArt}
                    alt='My Pixel Art'
                />
            </div>
        </div>
    );
};

export default Welcome;
