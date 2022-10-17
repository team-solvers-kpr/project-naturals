import React from 'react';
import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/cartSlice';
import Cart from './NavCart';

const Carts = () => {
    const cart = useSelector(selectCart);

    return (
        <div>
            {cart.map((item) => <Cart key={item._id} item={item} />)}

        </div>
    );
};

export default Carts;