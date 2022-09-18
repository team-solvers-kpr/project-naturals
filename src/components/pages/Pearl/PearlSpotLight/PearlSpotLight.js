import React, { useEffect } from 'react';
import { useState } from 'react';
import PearlSpotLightOne from './PearlSpotLightOne/PearlSpotLightOne';
import PearlSpotLightTwo from './PearlSpotLightOne/PearlSpotLightTwo';

const PearlSpotLight = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('pearlSpotLightItems.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <center >
            <h4 style={{ fontFamily: 'Source Sans Pro ,sans-serif', fontWeight: "bolder", color: "#c19e59" }}>In The Spotlight</h4>
            {
                products.slice(0, 1).map(product => <PearlSpotLightOne key={product.id} product={product}></PearlSpotLightOne>)
            }
            {
                products.slice(1, 2).map(product => <PearlSpotLightTwo key={product.id} product={product}></PearlSpotLightTwo>)
            }
            {
                products.slice(2, 3).map(product => <PearlSpotLightOne key={product.id} product={product}></PearlSpotLightOne>)
            }
        </center>
    );
};

export default PearlSpotLight;