import React from 'react';
import { useSelector } from 'react-redux';
import { selectHoneyAndDates } from '../../../../../redux/allNaturalProductSlice';



const HoneyAndDates = () => {
    const honeyAndDates = useSelector(selectHoneyAndDates);
    console.log(honeyAndDates)
    return (
        <div>
            <h2>This is Honey & Dates</h2>
        </div>
    );
};

export default HoneyAndDates;