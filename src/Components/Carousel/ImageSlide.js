import React from 'react';
import ActiveElementInfo from './ActiveElement';

const ImageSlide = ({ url, index, promotedEventInfo }) => {

  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    
    <div className='carousel-item-container'>
      <div 
        className={index || index === 0 ? "activeSlide" : "image-slide"}
        style={styles}
      >
      </div>
      {index || index === 0 
        ? <ActiveElementInfo
            promotedEventInfo = {promotedEventInfo}
          />
        : ''
      }
    </div>
  );
}

export default ImageSlide;