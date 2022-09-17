import React, { useEffect, useState } from 'react';
import SingleHelpPosts from '../SingleHelpPosts/SingleHelpPosts'
import './HelpPost.css';


const HelpPosts = () => {
    const [posts, setPosts] = useState([]);
    const [visible, setVisible] = useState(4);

    const showMoreItems = () => {
        setVisible((prevVisible) => prevVisible + 4);
    };

    const showLessItems = () => {
        setVisible((prevVisible) => prevVisible = 4);
    };

    useEffect(() => {
        fetch('HelpPost.json')
            .then(res => res.json())
            .then(data => setPosts(data))
    })

    return (
        <>
            <h2 className='text-center testimonial-title'><span className='testimonial-title-span'>Naturals Help</span> Post</h2>
            <div className='container'>
                <div className='row '>

                    {
                        posts.slice(0, visible).map(post => <SingleHelpPosts key={post.id} post={post} />)
                    }

                </div>
                <div className='m-4'>
                    {
                        (posts || []).length > visible && (

                            <div className="col-md-12  text-center">
                                <button onClick={showMoreItems} className="helpLoad-btn">Load More</button>
                            </div>
                        )

                    }
                    {
                        (posts || []).length < visible && (

                            <div className="col-md-12 text-center">
                                <button onClick={showLessItems} className="helpLoad-btn">Load Less</button>
                            </div>
                        )
                    }
                </div>

            </div>
        </>
    );
};

export default HelpPosts;