import React from 'react';
import { Link } from "react-router-dom";
import './Navigation.css';


class Navigation extends React.Component {
    render(){
        return (
            <nav className='navigation'>
                <ul className='navigation_list'>
                    <li className='navigation_link'>
                        <Link className='singlelink' to='/Home'>Home</Link>
                    </li>
                    <li className='navigation_link'>
                        <Link className='singlelink' to='/Wydarzenia'>Wydarzenia</Link>
                    </li>
                </ul>
            </nav>     
        )   
    }   
}

export default Navigation;