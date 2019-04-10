import React from 'react';
import './EventsContainer.css';
import SingleEvent from '../SingleEvent/SingleEvent';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';


const EventsContainer = (props) => {
    let eventsColl = props.eventsik.map((item, index) => (
        <SingleEvent
            key = {index}
            id = {item.id}
            organisator = {item.organisator}
            description = {item.description}
            place = {item.place}
            city = {item.city}
            startDate = {item.startDate}
            endDate = {item.endDate}
            category = {item.category}
            handleDelete = {props.handleDelete}
            checkStuff = {props.checkStuff}
            editElement = {props.editElement}
        />
    ))

    return (

        <div className='events_main'>        
            <div className='inputs'>
                <input placeholder='event title' name='title' onChange={props.handleValue} value={props.title} />
                <input placeholder='organisator' name='organisator' onChange={props.handleValue} value={props.organisator} />
                <input placeholder='description' name='description' onChange={props.handleValue} value={props.description} />
                <input placeholder='where' name='place' onChange={props.handleValue} value={props.place} />
                <input placeholder='city' name='city' onChange={props.handleValue} value={props.city} />
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
                        displayFormat={'DD-MM-YYYY'}
                        withPortal = {true}
                    />
                </div>
                <select name='category' onChange={props.handleValue}>
                    <option value='film'>Film</option>
                    <option value='muzyka'>Muzyka</option>
                    <option value='sztuka'>Sztuka</option>
                </select>
                <button onClick={props.addEvent}>add</button>
                <button onClick={props.checkStuff}>read</button>
            </div>
            <input type="text" className="inputSearch" name='search' placeholder='search' onChange={props.handleValue} value={props.search}/> 
            <ul className='events_list'>
                {eventsColl}
            </ul>
        </div>
    );
};

export default EventsContainer;