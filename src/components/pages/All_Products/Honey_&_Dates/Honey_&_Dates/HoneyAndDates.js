import React from 'react';
import { useSelector } from 'react-redux';
import { selectHoneyAndDates } from '../../../../../redux/allNaturalProductSlice';
import HoneyAndDate from '../Honey_&_Date/HoneyAndDate';

const HoneyAndDates = () => {
    const honeyAndDates = useSelector(selectHoneyAndDates);
    console.log(honeyAndDates)
    return (
        <div className='container'>
            <div className="row">
                {
                    honeyAndDates.filter(category => category.category === "Honey & Dates").slice(0, 8).map((shopItem) =>
                        <HoneyAndDate key={shopItem._id} shopItem={shopItem} />
                    )
                }
            </div>
        </div>
    );
};

export default HoneyAndDates;