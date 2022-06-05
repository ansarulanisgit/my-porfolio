import React from 'react';
import './About.css'
import aboutImg from '../../assets/about-img.png'
import { FaAward, FaUsers } from 'react-icons/fa';
import { VscFolderOpened } from 'react-icons/vsc';

const About = () => {
    return (
        <section id='about'>
            <h4>Who am I?</h4>
            <h2>About Me</h2>
            <div className="divider"></div>
            <div className="container about">
                <div className="about-img">
                    <img src={aboutImg} alt="" />
                </div>
                <div className="about-content">
                    <div className="about-cards">
                        <div className="card">
                            <div className="about-icons">
                                <FaAward/>
                            </div>
                            <h4>Experience</h4>
                            <small>More than two years</small>
                        </div>
                        <div className="card">
                            <div className="about-icons">
                                <FaUsers/>
                            </div>
                            <h4>Clients</h4>
                            <small>150+ Happy Clients</small>
                        </div>
                        <div className="card">
                            <div className="about-icons">
                                <VscFolderOpened/>
                            </div>
                            <h4>Projects</h4>
                            <small>220+ Completed Projects</small>
                        </div>
                    </div>
                    <article>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe adipisci maiores nesciunt. Debitis mollitia repudiandae odit suscipit placeat, ipsam repellat assumenda architecto nemo omnis nobis voluptate? Qui exercitationem impedit minus recusandae eos alias delectus similique.
                    </article>
                    <a href="#contact" className='btn btn-primary'>Let's work together</a>
                </div>
            </div>
        </section>
    );
};

export default About;