import React from 'react';
import { useSelector } from 'react-redux';
import { selectCart, selectTotalAmount } from '../../redux/cartSlice';
import Cart from './NavCart';

const Carts = () => {
    const cart = useSelector(selectCart);
    console.log(cart)
    const totalAmount = useSelector(selectTotalAmount);
    return (
        <div>
            {cart.map((item) => <Cart key={item.id} item={item} />)}
            <p>SUBTOTAL: {totalAmount}</p>
        </div>
    );
};

export default Carts;