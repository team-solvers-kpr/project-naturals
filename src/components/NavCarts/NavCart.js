import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import CounterButton from '../shared/CounterButton/CounterButton';

const Cart = (item) => {
    const { itemName, img1, price, amount, discount } = item.item
    const dispatch = useDispatch();

    const onAmountChange = (value, cartItem) => {
        const cartProduct = {
            ...cartItem,
            quantityPrice: value * Math.round(cartItem.price - (cartItem.price * cartItem.discount / 100)),
            amount: value,
        };

        dispatch(addToCart({ cartProduct }));
    };
    return (
        <div>
            <div className="d-flex mb-3">
                <img width="80px" height="100px" src={img1} alt="" />
                <div>
                    <p className='ms-2'>{itemName}</p>
                    {
                        discount ? (<p className='ms-2'>Price:<span className='ms-1 me-1' style={{ textDecoration: "line-through" }}>{price} </span> {Math.round(price - (price * discount / 100))}</p>) : (
                            <p className='ms-2'>Price: {price}</p>

                        )
                    }
                    <div className='d-flex'>



                        <p className='ms-2'>TOTAL:{
                            discount ? (<span className='ms-2'> {Math.round(price - (price * discount / 100)) * amount}</span>) : (
                                <span className='ms-2'>{price * amount}</span>

                            )
                        }</p>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Cart;