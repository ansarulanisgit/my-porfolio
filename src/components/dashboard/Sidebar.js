import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <ul className='sidebar'>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><Link to='/dashboard/add-portfolio'>Add Portfolio</Link></li>
                <li><Link to='/dashboard/add-testimonial'>Add Testimonial</Link></li>
                <li><Link to='/'>Home</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;