import React from 'react';

const Home = (props) => {
    return (
        <div>
            <h1> witaj na głównej </h1>
            <button onClick={props.readData}>klik</button>
        </div>
        
    )
}

export default Home;