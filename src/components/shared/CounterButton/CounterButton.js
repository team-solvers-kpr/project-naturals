import React from 'react';
import './CounterButton.css';

const CounterButton = ({ amount, setAmount }) => {
    // const [count, setCount] = useState(initialVal || 0);
    const onIncrement = () => {
        // setCount((prev) => prev + 1);
        setAmount(amount + 1);
    };
    const onDecrement = () => {
        if (amount > 1) {
            // setCount((prev) => prev - 1);
            setAmount(amount - 1);
        }
    };
    return (
        <div>
            <div className='counterBtn'>

                <span className='btn' onClick={onDecrement} >
                    <span className='decrementBtn' >
                        -
                    </span>
                </span>

                <span style={{ cursor: "default" }}>{amount}</span>

                <span className=' btn' onClick={onIncrement} >
                    <span className='incrementBtn' >
                        +
                    </span>
                </span>

            </div>
        </div>
    );
};

export default CounterButton;