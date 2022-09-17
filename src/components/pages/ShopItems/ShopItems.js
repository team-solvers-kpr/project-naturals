import React, { useEffect, useState } from 'react';
import ShopItem from './ShopItem';
const ShopItems = () => {
    const [shopItem, setShopItem]= useState([])
    useEffect(()=>{
        fetch('shopItem.json')
        .then(res => res.json())
        .then(data =>setShopItem(data) )
    },[])
    return (
        <div className='container'>
            <h1>This is our shop item compo</h1>
            <div class="row row-cols-1 row-cols-md-4 g-4">
                {
                  shopItem.map(item =><ShopItem key={shopItem.id} item={item}></ShopItem> )
                }
            </div> 

        </div>
    );
};

export default ShopItems;