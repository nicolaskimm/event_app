import React from 'react';
import './ActiveElement.css';

const ActiveElementInfo = (promotedEventInfo) => {

    const promoted = promotedEventInfo.promotedEventInfo;

    return (
        <div className='promotedText'>
            <h1 className='promotedText_organisator'> {promoted.organisator} </h1> 
            <p className='promotedText_date'> {promoted.startDate} - {promoted.endDate} </p>
            <p className='promotedText_place'> {promoted.place}, {promoted.city} </p>  
            <button className='promotedText_button'>show me more</button>   
        </div>

    )
}

export default ActiveElementInfo;