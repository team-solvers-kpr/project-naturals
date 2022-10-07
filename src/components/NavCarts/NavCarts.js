import React from 'react';
import { useSelector } from 'react-redux';
import { selectCart, selectTotalAmount } from '../../redux/cartSlice';
import Cart from './NavCart';

const Carts = () => {
    const cart = useSelector(selectCart);
    console.log(cart)
    return (
        <div>
            {cart.map((item) => <Cart key={item.id} item={item} />)}

        </div>
    );
};

export default Carts;