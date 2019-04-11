import React from 'react';
import './SingleEventInfo.css';
import uuidv5 from 'uuid';

const SingleEventInfo = (props) => {

    const iv = [
        {
          id: uuidv5(),
          imgUrl: 'https://images.pexels.com/photos/175658/pexels-photo-175658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          organisator: 'Nick Cave',
          description: 'xyz',
          place: 'Torwar',
          city: 'Warsaw',
          startDate: '1 czerwca 2018',
          endDate: '2 czerwca 2018',
          category: 'muzyka',
        },
    ]

    console.log(iv)

    const styles = {
        backgroundImage: `url(${iv[0].imgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    
    return (
        <div className='singleEventInfo'>
            <div className='singleEventInfo-up'>
                <div className='singleEventInfo_left'>
                    <div className='singleEventInfo_left-photo' style={styles}></div>
                </div> 
                <div className='singleEventInfo_right'>
                    <h1 className='singleEventInfo_right-text'>{iv[0].organisator}</h1>
                    <h3 className='singleEventInfo_right-text'>{iv[0].startDate} - {iv[0].endDate}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit tellus, interdum id fermentum vitae, imperdiet at erat. 
                    Mauris facilisis arcu id elit laoreet, nec condimentum est ornare. Sed iaculis sem felis, non lobortis leo suscipit eget. 
                    Proin facilisis lacus vel mi pretium tincidunt. In at quam non justo porta finibus a dictum nisi. Vestibulum luctus aliquam sagittis. 
                    Mauris tristique ligula sed bibendum pulvinar. Ut id odio elementum, scelerisque neque a, elementum ante. 
                    Curabitur id nisl ornare, faucibus ex tempor, aliquam neque. Maecenas ac augue sollicitudin ligula elementum aliquam. 
                    Vivamus volutpat cursus fermentum. Vivamus velit lacus, vestibulum vel lorem at, pharetra convallis velit. 
                    Nullam hendrerit ac quam id rutrum. Cras euismod ipsum ut mi faucibus, ut pharetra sapien feugiat.    
                    </p>
                </div>
            </div>
            <h2>Where</h2>
            <hr></hr>
        </div>
    )
}

export default SingleEventInfo;