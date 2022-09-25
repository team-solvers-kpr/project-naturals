import React from 'react';

const CounterButton = ({ style, amount, setAmount }) => {
    const onIncrement = () => {
        // setCount((prev) => prev + 1);
        setAmount(amount + 1);
    };
    const onDecrement = () => {
        if (amount > 0) {
            // setCount((prev) => prev - 1);
            setAmount(amount - 1);
        }
    };
    return (
        <div>
            <div >
                <button onClick={onDecrement} >
                    <span textColor="#c4c4c4">
                        -
                    </span>
                </button>
                <span>{amount}</span>
                <button onClick={onIncrement} >
                    <span textColor="#c4c4c4">
                        +
                    </span>
                </button>
            </div>
        </div>
    );
};

export default CounterButton;