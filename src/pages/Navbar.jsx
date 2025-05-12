import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

    return (
        <div>
            <ul className='navbar-list'>
                <li><Link to='/'><strong>Home</strong></Link></li>
                <li><Link to='/about'><strong>About</strong></Link></li>
                <li><Link to='/projects'><strong>Projects</strong></Link></li>
                <li><Link to='/achievements'><strong>Achievements</strong></Link></li>
                <li><Link to='/contacts'><strong>Contacts</strong></Link></li>
            </ul>
        </div>
    )
} 

export default Navbar;