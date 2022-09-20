import React, { useState } from 'react';
import './SingleHelpPosts.css';


const SingleHelpPosts = ({ post }) => {
    const { postTitle, img, postDescription } = post;
    const [showFullDescription, setFullDescription] = useState(false);
    const showFullDescriptionHandler = () => {
        setFullDescription(!showFullDescription);
    };

    const description = showFullDescription ? postDescription : postDescription.slice(0, 120);

    return (
        <div className="col-md-6 col-lg-3 mt-4 mb-4"
            data-aos="fade-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
        >

            <div className="card" >
                <img src={img} className="card-img-top" alt="postsImage" />
                <div className="card-body" style={{ backgroundColor: "#f4f4f4" }}>
                    <h5 className="card-title blog-title">{postTitle}</h5>
                    <h6 className='blog-post-description'>
                        {description}
                        <span className='readMoreLess-btn' onClick={showFullDescriptionHandler}>
                            {showFullDescription ? "  Show Less" : "  ...Show More"}
                        </span>
                    </h6>
                    <button className='helpPostBtn'>Read More</button>
                </div>

            </div>

        </div>
    );
};

export default SingleHelpPosts;