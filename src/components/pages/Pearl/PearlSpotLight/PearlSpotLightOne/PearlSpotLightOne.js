import React from 'react';
import CustomButton from '../../../../shared/CustomButton/CustomButton';
import './PearlSpotLightOne.css';

const PearlSpotLightOne = ({ product }) => {
    const { productName, img, productDesc, productTitle } = product
    return (
        <div>
            <div className='spotLight-1 '>
                <div className='spotLight-1-img'>
                    <img src={img} alt="" />
                </div>
                <div className='spotLight-1-textBox' >
                    <h4 style={{ color: "#00a651", fontWeight: "bolder", marginBottom: "20px" }}>{productName}</h4>
                    <h6 style={{ marginBottom: "20px" }}> <span style={{ color: "#777777", fontWeight: "bold" }}>Create your beauty with</span> <span style={{ color: "#00a651" }} >{productTitle}</span></h6>
                    <p style={{ color: "#777777" }}>{productDesc}</p>
                    <CustomButton title="Shop Now" backgroundColor=" #ffffff" color="#00a651" />
                </div>
            </div>
        </div>
    );
};

export default PearlSpotLightOne;