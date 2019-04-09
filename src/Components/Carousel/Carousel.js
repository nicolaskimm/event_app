import React from 'react';
import ImageSlide from './ImageSlide';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
library.add(faArrowLeft, faArrowRight);


const Carousel = (props) => {
	
	return (
		<div className="carousel">
			<FontAwesomeIcon icon={faArrowLeft} className='arrow carousel-arrow-left' onClick={ props.previousSlide }/>
			<ImageSlide url={ props.checkPrevious() } />
			<ImageSlide 
				url={ props.imgUrls[props.currentImageIndex] } 
				index={props.currentImageIndex} 
				promotedEventInfo = {props.promotedEvents[props.currentImageIndex]}
			/>
			<ImageSlide url={ props.checkNext() } />
			<FontAwesomeIcon icon={faArrowRight} className='arrow carousel-arrow-right' onClick={ props.nextSlide }/>
		</div>
	);
}

export default Carousel;
