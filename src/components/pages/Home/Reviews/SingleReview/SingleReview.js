import React from 'react';
import "./SingleReview.css";

const SingleReview = ({ review }) => {
    const { name, img, testimonial, occupation } = review;

    return (
        <div className='mt-5 '>
            <center>
                <img src={img} alt="" />
            </center>
            <p className='testimonial-name'>{name} <span className='ms-1'>|</span> <span className='ms-2 testimonial-occupation'>{occupation} </span>

            </p>
            <center>
                <div class="here"></div>
            </center>
            <p className='testimonial'>{testimonial}</p>
        </div>
    );
};

export default SingleReview;