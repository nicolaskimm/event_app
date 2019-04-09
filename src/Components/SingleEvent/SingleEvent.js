import React from 'react';
import './SingleEvent.css';


const SingleEvent = (props) => {

    return (
       <li id={props.id} className='single_event' onClick={props.checkStuff}>
        <img src='https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' className='single_event-photo' alt='event'/>
        <h2>{props.organisator}</h2>
        <p>{props.place}, {props.city}</p>
        <p>{props.startDate} - {props.endDate}</p>
        <p>#{props.category}</p>
        <button onClick={props.handleDelete}>x</button>
        <button onClick={props.editElement}>edit</button>
       </li>
    )
}

export default SingleEvent;