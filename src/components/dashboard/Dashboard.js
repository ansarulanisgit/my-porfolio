import React from 'react';
import './Dashboard.css'
import AllPortfolio from './portfolio/AllPortfolio';
import Sidebar from './Sidebar';
import AllTestimonial from './testomonials/AllTestimonial';

const Dashboard = () => {
    return (
        <div className='container'>
            <div className="dashboard">
                <div className="sidebar">
                    <Sidebar></Sidebar>
                </div>
                <div className="content">
                    <AllPortfolio></AllPortfolio>
                    <AllTestimonial></AllTestimonial>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;