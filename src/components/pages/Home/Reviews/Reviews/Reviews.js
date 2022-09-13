import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SingleReview from '../SingleReview/SingleReview';
import './Reviews.css'

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    const responsive = {
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 3,
            partialVisibilityGutter: 20
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
        }
    };
    return (
        <>
            <h2 className='text-center testimonial-title'><span className='testimonial-title-span'>What our</span>  Happy Customers say</h2>
            <div className='container review-container'>
                <Carousel
                    className='container'
                    autoPlay
                    autoPlaySpeed={3000}
                    centerMode={false}
                    containerClass="container-with-dots"
                    dotListClass=""
                    infinite
                    minimumTouchDrag={80}
                    pauseOnHover
                    responsive={responsive}
                    rewind={false}
                    slidesToSlide={1}
                    arrows={false}
                >
                    {
                        reviews.map(review => <SingleReview key={review.id} review={review}></SingleReview>)
                    }
                </Carousel>

            </div>
        </>

    );
};

export default Reviews;