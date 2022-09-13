import React, { useEffect, useState } from 'react';
import SingleHelpPosts from '../SingleHelpPosts/SingleHelpPosts'
const HelpPosts = () => {
    const [posts, setPosts] = useState([]);
    const [visible, setVisible] = useState(3);

    const showMoreItems = () => {
        setVisible((prevVisible) => prevVisible + 3);
    };

    const showLessItems = () => {
        setVisible((prevVisible) => prevVisible = 3);
    };

    useEffect(() => {
        fetch('HelpPost.json')
            .then(res => res.json())
            .then(data => setPosts(data))
    })

    return (
        <>
            <h2 className='text-center testimonial-title'><span className='testimonial-title-span'>Natural Help</span> Post</h2>
            <div className='container'>
                <div className='row '>

                    {
                        posts.slice(0, visible).map(post => <SingleHelpPosts key={post.id} post={post} />)
                    }

                </div>
                <div className='m-4'>
                    {
                        (posts || []).length > visible && (

                            <div class="col-md-12  text-center">
                                <button onClick={showMoreItems} class="btn btn-success w-50">Load More</button>
                            </div>
                        )

                    }
                    {
                        (posts || []).length < visible && (

                            <div class="col-md-12 text-center">
                                <button onClick={showLessItems} class="btn btn-success w-50">Load Less</button>
                            </div>
                        )
                    }
                </div>

            </div>
        </>
    );
};

export default HelpPosts;