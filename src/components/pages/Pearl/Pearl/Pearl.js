import React from 'react';
import PearlBottomBanner from '../PearlBottomBanner/PearlBottomBanner';
import PearlBanner from '../PearlBanner/PearlBanner';
import PearlSpotLight from '../PearlSpotLight/PearlSpotLight';
import PearlTabItems from "../PearlTabItems/PearlTabItems/PearlItemsTab"

const Pearl = () => {
    return (
        <div>
            <PearlBanner />
            <PearlTabItems />
            <PearlSpotLight />
            <PearlBottomBanner />
        </div>
    );
};

export default Pearl;