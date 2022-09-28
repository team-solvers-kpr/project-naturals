import React from 'react';
import CustomButton from '../../../../shared/CustomButton/CustomButton';
import './PearlSpotLightTwo.css';

const PearlSpotLightTwo = ({ product }) => {
    const { productName, img, productDesc, productTitle } = product
    return (
        <div>
            <div className='spotLight-2'>
                <div className='spotLight-2-textBox' >
                    <h4 style={{ color: "#00a651", fontWeight: "bolder", marginBottom: "20px" }}>{productName}</h4>
                    <h6 style={{ marginBottom: "20px" }}> <span style={{ color: "#777777", fontWeight: "bold" }}>Create your beauty with</span> <span style={{ color: "#00a651" }} >{productTitle}</span></h6>
                    <p style={{ color: "#777777" }}>{productDesc}</p>
                    <CustomButton title="Shop Now" />
                </div>
                <div className='spotLight-2-img'>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default PearlSpotLightTwo;