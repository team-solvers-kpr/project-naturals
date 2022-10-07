import React from 'react';
import './NavCartCounterButton.css';

const NavCartCounterButton = ({ amount, setAmount }) => {

    const onIncrement = () => {
        setAmount(amount + 1);
    };
    const onDecrement = () => {
        if (amount > 1) {
            setAmount(amount - 1);
        }
    };
    return (
        <div>
            <div className='NavCounterBtn'>
                <span className='NavBtn' onClick={onDecrement} >
                    <span className='NavDecrementBtn' >
                        -
                    </span>
                </span>

                <span style={{ cursor: "default" }}>{amount}</span>

                <span className=' NavBtn' onClick={onIncrement} >
                    <span className='NavIncrementBtn' >
                        +
                    </span>
                </span>

            </div>
        </div>
    );
};
export default NavCartCounterButton;