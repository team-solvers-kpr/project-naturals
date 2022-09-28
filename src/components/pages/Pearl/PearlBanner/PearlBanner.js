import React from 'react';
import pearlBannerImg from "../../../../assests/pearl/banner.png";

const PearlBanner = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-5'>

                </div>
                <div className='col-md-7' >
                    <img style={{ width: "100%" }} src={pearlBannerImg} alt="" />
                </div>
            </div>
        </div>

    );
};

export default PearlBanner;