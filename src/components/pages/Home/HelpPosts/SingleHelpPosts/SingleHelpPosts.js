import React from 'react';

const SingleHelpPosts = ({ post }) => {
    const { postTitle, img, postDescription } = post
    return (
        <div className="col-md-6 col-lg-4 mt-4">
            <img src={img} class="card-img-top" alt="..." />
            <div class="card" >
                <div class="card-body">
                    <h5 class="card-title">{postTitle}</h5>
                    <p class="card-text">{postDescription}</p>

                </div>
            </div>

        </div>
    );
};

export default SingleHelpPosts;