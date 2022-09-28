import React, { useEffect, useState } from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';

const HomeBanners = () => {

    const [banners, setBanners] = useState([]);
    useEffect(() => {
        fetch('HomeBanner.json')
            .then(res => res.json())
            .then(data => setBanners(data))
    }, [])

    return (
        <div>
            {banners.map(banner => <HomeBanner key={banner.id} banner={banner} />
            )}
        </div>
    );
};

export default HomeBanners;