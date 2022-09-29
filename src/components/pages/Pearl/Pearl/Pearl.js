import React from 'react';
import PearlBottomBanner from '../PearlBottomBanner/PearlBottomBanner';
import PearlBanner from '../PearlBanner/PearlBanner';
import PearlSpotLight from '../PearlSpotLight/PearlSpotLight';
import PearlTabItems from "../PearlTabItems/PearlTabItems/PearlItemsTab"
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Pearl = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Pearl : Naturals</title>
            </Helmet>
            <PearlBanner />
            <PearlTabItems />
            <PearlSpotLight />
            <PearlBottomBanner />
        </HelmetProvider>
    );
};

export default Pearl;