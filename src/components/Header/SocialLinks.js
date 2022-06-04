import React from 'react';
import { BsLinkedin, BsGithub, BsFacebook, BsTwitter } from 'react-icons/bs';

const SocialLinks = () => {
    return (
        <div className='header-socials text-light'>
            <div class="tooltip">
                <a href="#linkedin" target="_blank"><BsLinkedin/></a>
                <div class="right">
                    <h3>LinkedIn</h3>                
                    <i></i>
                </div>
            </div>
            <div class="tooltip">
            <a href="#linkedin" target="_blank"><BsGithub/></a>
                <div class="right">
                    <h3>Github</h3>                
                    <i></i>
                </div>
            </div>
            <div class="tooltip">
            <a href="#linkedin" target="_blank"><BsFacebook/></a>
                <div class="right">
                    <h3>Facebook</h3>                
                    <i></i>
                </div>
            </div>
            <div class="tooltip">
            <a href="#linkedin" target="_blank"><BsTwitter/></a>
                <div class="right">
                    <h3>Twitter</h3>                
                    <i></i>
                </div>
            </div>
            
            
            
        </div>
    );
};

export default SocialLinks;