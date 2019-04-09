import React from 'react';
import './Home.css';
import Carousel from '../Carousel/Carousel';

const Home = (props) => {
    return (
        <div className='mainPage'>
            <h1 className='mainPage_title'> iventi. </h1>
            <div className='mainPage_carousel'>
                <Carousel 
                    imgUrls = {props.imgUrls}
                    promotedEvents = {props.promotedEvents}
                    currentImageIndex = {props.currentImageIndex}
                    previousSlide = {props.previousSlide}
                    nextSlide = {props.nextSlide}
                    checkNext = {props.checkNext}
                    checkPrevious = {props.checkPrevious} 
                />
            </div>                
        </div>
    )
}

export default Home;