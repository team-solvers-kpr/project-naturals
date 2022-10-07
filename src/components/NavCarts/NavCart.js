import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, deleteFromCart } from '../../redux/cartSlice';
import NavCartCounterButton from '../shared/NavCartCounterButton/NavCartCounterButton';
import { MdCancel } from "@react-icons/all-files/md/MdCancel";

import './NavCart.css';
import swal from 'sweetalert';
import { toast } from 'react-toastify';

const Cart = (item) => {
    const { itemName, img1, price, amount, discount, id } = item.item
    const dispatch = useDispatch();

    const onAmountChange = (value, cartItem) => {

        const cartProduct = {
            ...cartItem,
            quantityPrice: value * Math.round(cartItem.price - (cartItem.price * cartItem.discount / 100)), amount: value,
        };
        dispatch(addToCart({ cartProduct }));
    };

    const handleDelFromCart = (cartItem) => {


        swal("Remove from Cart Warning", "Do you really want to remove this item?", "warning", {
            buttons: {
                cancel: "No",
                catch: {
                    text: "Yes",
                    value: "catch",
                },
            },
        })
            .then((value) => {
                switch (value) {
                    case "catch":
                        dispatch(deleteFromCart({ id: cartItem.id }))
                        toast.warning(`${itemName} কার্ট থেকে রিমুভ করা হয়েছে`)
                        break;
                    default: ;
                }
            });
    }
    return (
        <div>
            <div className="d-flex">
                <div>
                    <img className='navCartImg' src={img1} alt="" />

                </div>
                <div>
                    <div className='navCartNameAndItemDel'>
                        <span className='navCartName'>{itemName}</span>
                        <MdCancel onClick={() => handleDelFromCart(item.item)} className='navItemDel' />
                    </div>

                    {
                        discount ? (<span className='navCartPrice'>Price:<span className='ms-1 me-1' style={{ textDecoration: "line-through" }}>{price} </span> {Math.round(price - (price * discount / 100))}</span>) : (
                            <span className=' navCartPrice'>Price: {price}</span>

                        )
                    }
                    <div className='navCounterBtnAndPrice mt-1'>
                        <div>
                            <NavCartCounterButton
                                amount={amount} setAmount={(value) => {
                                    onAmountChange(value, item.item);
                                }} />
                        </div>


                        <div className='mt-1'>
                            <p className='ms-2 navCounterPrice'>৳{
                                discount ? (<span className=''> {Math.round(price - (price * discount / 100)) * amount}</span>) : (
                                    <span className='ms-1 '>{price * amount}</span>
                                )
                            }</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Cart;