import React from 'react';

const Cart = (item) => {
    const { itemName, img1, price, amount, quantityPrice } = item.item
    return (
        <div>
            <div className="d-flex mb-3">
                <img width="100" src={img1} alt="" />
                <div>
                    <p className='ms-2'>{itemName}</p>
                    <p className='ms-2'>Price: {price}</p>
                    <p className='ms-2'>Quantity: {amount}</p>
                    <p className='ms-2'>Price: {quantityPrice}</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;