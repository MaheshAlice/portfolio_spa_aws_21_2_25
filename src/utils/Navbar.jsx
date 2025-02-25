import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
       <nav>
              <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/articles">Articles</Link></li>
                <li><Link to="/about">About</Link></li>
                </ul>
           </nav>
    );
}
