import React from 'react';
import './Experience.css';
import { BsFillCheckCircleFill, BsBookmarkCheckFill, BsFillPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
    return (
        <section id='experience'>
            <h4>What I know?</h4>
            <h2>My Experiences</h2>
            <div className="divider"></div>
            <div className="container experience">
                <div className="front-end">
                    <h3>Frontend Development</h3>
                    <div className="experience-content">
                        <article className="experience-details">
                            <div className="icon">
                                <BsFillPatchCheckFill/>
                            </div>
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience-details">
                            <div className="icon">
                                <BsFillPatchCheckFill/>
                            </div>
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience-details">
                            <div className="icon">
                                <BsBookmarkCheckFill/>
                            </div>
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience-details">
                            <div className="icon">
                                <BsFillPatchCheckFill/>
                            </div>
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience-details">
                            <div className="icon">
                                <BsFillPatchCheckFill/>
                            </div>
                            <div>
                                <h4>Tailwind</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience-details">
                            <div className="icon">
                                <BsBookmarkCheckFill/>
                            </div>
                            <div>
                                <h4>React JS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>          
                    </div>
                </div>
                <div className="back-end">
                    <h3>Backend Development</h3>
                    <div className="experience-content">
                    <article className="experience-details">
                            <div className="icon">
                                <BsBookmarkCheckFill/>
                            </div>
                            <div>
                                <h4>Node</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience-details">
                            <div className="icon">
                                <BsBookmarkCheckFill/>
                            </div>
                            <div>
                                <h4>Express</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience-details">
                            <div className="icon">
                                <BsBookmarkCheckFill/>
                            </div>
                            <div>
                                <h4>Firebase</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience-details">
                            <div className="icon">
                                <BsBookmarkCheckFill/>
                            </div>
                            <div>
                                <h4>MongoDB</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience-details">
                            <div className="icon">
                                <BsFillCheckCircleFill/>
                            </div>
                            <div>
                                <h4>MySQL</h4>
                                <small className='text-light'>Beginner</small>
                            </div>
                        </article>
                        <article className="experience-details">
                            <div className="icon">
                                <BsFillCheckCircleFill/>
                            </div>
                            <div>
                                <h4>TypeScript</h4>
                                <small className='text-light'>Beginner</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;