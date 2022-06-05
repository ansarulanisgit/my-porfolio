import React from 'react';
import './Footer.css';
import { BsLinkedin, BsGithub, BsFacebook, BsTwitter } from 'react-icons/bs';
import logo from "../../logo.svg";

const Footer = () => {
    return (
        <div>
           <footer>
           <img className="logo" src={logo} alt="" />
               <a href="#" className="footer-logo">Ansarul Anis</a>
               <ul className="permalinks">
                   <li><a href="#">Home</a></li>
                   <li><a href="#about">About</a></li>
                   <li><a href="#experience">Experience</a></li>
                   <li><a href="#services">Services</a></li>
                   <li><a href="#portfolio">Portfolio</a></li>
                   <li><a href="#testimonials">Testimonials</a></li>
                   <li><a href="#contact">Contact</a></li>
               </ul>
               <div className="socials">
                   <a href="#facebook"><BsFacebook/></a>
                   <a href="#twitter"><BsTwitter/></a>
                   <a href="#linedin"><BsLinkedin/></a>
                   <a href="#github"><BsGithub/></a>
               </div>
               <div className="copyright">
                   <p>&copy;2022 Ansarul Anis. All right reserved.</p>
               </div>
           </footer>
        </div>
    );
};

export default Footer;