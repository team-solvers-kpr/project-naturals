import React from 'react';
import pearlBannerImg from "../../../../assests/pearl/banner.png"
const PearlBanner = () => {
    return (
        <div className="container-fluid" >
            <div className='row' >
                <div className='col-md-6'>

                </div>
                <div className='col-md-6'>
                    <img width="100%" height="100%" src={pearlBannerImg} alt="" />
                </div>
            </div>
        </div>

    );
};

export default PearlBanner;