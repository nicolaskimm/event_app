import React from 'react';
import './SingleEvent.css';
import { Link } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
library.add(faPen);


const SingleEvent = (props) => {

    return (
       <li id={props.id} className='single_event'>
        <img src='https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' className='single_event-photo' alt='event'/>
        <h2>{props.organisator}</h2>
        <p>{props.place}, {props.city}</p>
        <p>{props.startDate} - {props.endDate}</p>
        <p>#{props.category}</p>
        <div className='single_event_bottom'>
            <Link to={`/events/${props.id}`} className='single_event_bottom-link' onClick={() => props.checkStuff(props.id)}>learn more </Link>
            <div className='single_event_bottom-buttons'>
                <button className='single_event_bottom-buttons-delete' onClick={props.handleDelete}>x</button>
                <button className='single_event_bottom-buttons-edit'onClick={props.editElement}><FontAwesomeIcon icon={faPen} /></button>
            </div>
        </div>
       </li>
    )
}

export default SingleEvent;