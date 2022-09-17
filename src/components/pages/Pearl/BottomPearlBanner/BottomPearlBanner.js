import React from 'react';
import bottomBanner from "../../../../assests/pearl/banner-2.png";
import './BottomPearlBanner.css';
import icon1 from '../../../../assests/pearl/icon-1.png';
import icon2 from '../../../../assests/pearl/icon-2.png';

const BottomPearlBanner = () => {
    return (
        <div>
            <div style={{ backgroundColor: "black" }}>
                <center>
                    <img className='bottomPearlBannerImg' src={bottomBanner} alt="" />
                </center>
            </div>
            <div className='container'>
                <p className='text-center bottomPearlBannerText'>"PEARL" a Bangladeshi organic brand launched with a range of pure and natural products. We believe that beauty doesn't rinse off but it can <br /> be enhanced by the touch if natural ingredients.</p>
                <p className='text-center bottomPearlBannerText2'>PEARL by Naturals</p>
                <div className='pearlIcons'>
                    <a href="https://www.facebook.com/" rel="noreferrer" target="_blank" >  <img src={icon1} alt="" /></a>
                    <a href="https://www.instagram.com/" rel="noreferrer" target="_blank" >  <img src={icon2} alt="" /></a>
                </div>
            </div>

        </div >
    );
};

export default BottomPearlBanner;