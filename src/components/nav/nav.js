import React from 'react';
import { Link } from 'react-router-dom';

import './nav.css';

function Nav() {
    return (
        <nav className='nav'>
            <ul className='nav-link'>
                <Link to="/">
                    <li>Home</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
