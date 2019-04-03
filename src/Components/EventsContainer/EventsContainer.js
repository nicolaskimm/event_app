import React from 'react';
import SingleEvent from '../SingleEvent/SingleEvent';

import './EventsContainer.css';
import 'react-dates/initialize';

import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';


const EventsContainer = (props) => {
    let eventsColl = props.eventsik.map((item, index) => (
        <SingleEvent
            key = {index}
            id = {item.id}
            title = {item.title}
            organisator = {item.organisator}
            description = {item.description}
            place = {item.place}
            startDate = {item.startDate}
            endDate = {item.endDate}
            category = {item.category}
            onClick = {props.onClick}
            handleDelete = {props.handleDelete}
            checkStuff = {props.checkStuff}
        />
    ))

    return (

        <div className='events_main'>        
            <div className='inputs'>
                    <input placeholder='event title' name='title' onChange={props.handleValue} value={props.title} />
                    <input placeholder='organisator' name='organisator' onChange={props.handleValue} value={props.organisator} />
                    <input placeholder='description' name='description' onChange={props.handleValue} value={props.description} />
                    <input placeholder='where' name='place' onChange={props.handleValue} value={props.place} />
                    <div className='datepick'>
                        <DateRangePicker 
                            onDatesChange={({ startDate, endDate }) => props.handleDate(startDate, endDate)} 
                            startDateId="startDate"
                            endDateId="endDate"
                            startDate={props.startDate}
                            endDate={props.endDate}
                            focusedInput = {props.focusedInput}
                            onFocusChange={props.onFocusChange} 
                            daySize={30}
                            numberOfMonths={1}
                            small={true}
                            noBorder={true}
                        />
                    </div>
                    <input placeholder='category' name='category' onChange={props.handleValue} value={props.category} />
                    <button onClick={props.addEvent}>add</button>
                    <button onClick={props.checkStuff}>read</button>
                </div>
                <input type="text" className="inputSearch" name='search' placeholder='title' onChange={props.handleValue} value={props.search}/> 
                <ul className='events_list'>
                    {eventsColl}
                </ul>
        </div>
    );
};

export default EventsContainer;