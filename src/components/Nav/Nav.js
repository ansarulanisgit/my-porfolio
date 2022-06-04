import React, { useState } from 'react';
import './Nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { ImCodepen } from 'react-icons/im';
import { RiServiceLine } from 'react-icons/ri';
import { MdWorkspacesOutline, MdOutlineDashboardCustomize } from 'react-icons/md';
import { TbMessageCircle } from 'react-icons/tb';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
    return (
        <div>
            <nav>
                <div class="tooltip">
                    <a onClick={() => setActiveNav("#")} className={activeNav === '#'? 'active' : ''} href="#home"><AiOutlineHome/></a>
                    <div class="top">
                        <h3>Home</h3>                        
                        <i></i>
                    </div>
                </div>
                <div class="tooltip">
                    <a onClick={() => setActiveNav("#about")} className={activeNav === '#about'? 'active' : ''} href="#about"><AiOutlineUser/></a>
                    <div class="top">
                        <h3>About</h3>                        
                        <i></i>
                    </div>
                </div>
                <div class="tooltip">
                    <a onClick={() => setActiveNav("#experience")} className={activeNav === '#experience'? 'active' : ''} href="#experience"><ImCodepen/></a>
                    <div class="top">
                        <h3>Experience</h3>                        
                        <i></i>
                    </div>
                </div>
                <div class="tooltip">
                    <a onClick={() => setActiveNav("#services")} className={activeNav === '#services'? 'active' : ''} href="#services"><RiServiceLine/></a>
                    <div class="top">
                        <h3>Services</h3>                        
                        <i></i>
                    </div>
                </div>
                <div class="tooltip">
                    <a onClick={() => setActiveNav("#portfolio")} className={activeNav === '#portfolio'? 'active' : ''} href="#portfolio"><MdWorkspacesOutline/></a>
                    <div class="top">
                        <h3>Portfolio</h3>                        
                        <i></i>
                    </div>
                </div>
                <div class="tooltip">
                    <a onClick={() => setActiveNav("#contact")} className={activeNav === '#contact'? 'active' : ''} href="#contact"><TbMessageCircle/></a>
                    <div class="top">
                        <h3>Contact</h3>                        
                        <i></i>
                    </div>
                </div>
                <div class="tooltip">
                    <a onClick={() => setActiveNav("#dashboard")} className={activeNav === '#dashboard'? 'active' : ''} href="#contact"><MdOutlineDashboardCustomize/></a>
                    <div class="top">
                        <h3>Dashboard</h3>                        
                        <i></i>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;