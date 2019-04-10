import React from 'react';
import './Navigation.css';
import { Link } from "react-router-dom";


class Navigation extends React.Component {
    render(){
        return (
            <nav className='navigation'>
                <ul className='navigation_list'>
                    <li className='navigation_link'>
                        <Link className='singlelink' to='/'>Home</Link>
                    </li>
                    <li className='navigation_link'>
                        <Link className='singlelink' to='/Wydarzenia'>Events</Link>
                    </li>
                    <li className='navigation_link'>
                        <Link className='singlelink' to='/test'>Test</Link>
                    </li>
                    <li className='navigation_link'>
                        <Link className='singlelink' to='/Wydarzenia'>Events</Link>
                    </li>
                </ul>
            </nav>     
        )   
    }   
}

export default Navigation;