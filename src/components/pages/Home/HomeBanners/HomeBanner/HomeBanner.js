import React from 'react';
import './HomeBanner.css'


const HomeBanner = ({ banner }) => {
    const { img1, img2, img3, img4 } = banner

    return (
        <div
            id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">
            <div className="carousel-inner" >
                <div className="carousel-item active" >
                    <img src={img1} className="d-block homeBannerImg w-100" alt="..." />
                </div>
                <div className="carousel-item ">
                    <img src={img2} className="d-block homeBannerImg w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={img3} className="d-block homeBannerImg w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={img4} className="d-block homeBannerImg w-100" alt="..." />
                </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default HomeBanner;