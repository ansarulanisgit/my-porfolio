import React from 'react';
import './Services.css';
import { BsCheck2Square } from 'react-icons/bs';

const Services = () => {
    return (
        <section id='services'>
            <h4>What I offer?</h4>
            <h2>My Services</h2>
            <div className="divider"></div>
            <div className="container services">
                <article className="service">
                    <div className="service-head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <div className="service-body">
                        <ul className="service-list">
                            <li>
                                <BsCheck2Square className='service-list-icon'/>
                                <p>Front end web design</p>
                            </li>
                            <li>
                                <BsCheck2Square className='service-list-icon'/>
                                <p>Front end web design. Backend development</p>
                            </li>
                            <li>
                                <BsCheck2Square className='service-list-icon'/>
                                <p>Front end web design</p>
                            </li>
                            <li>
                                <BsCheck2Square className='service-list-icon'/>
                                <p>Front end web design. Backend development</p>
                            </li>
                            <li>
                                <BsCheck2Square className='service-list-icon'/>
                                <p>Front end web design</p>
                            </li>
                            <li>
                                <BsCheck2Square className='service-list-icon'/>
                                <p>Front end web design. Backend development</p>
                            </li>
                        </ul>
                    </div>
                </article>
                <article className="service">
                    <div className="service-head">
                        <h3>React App Design</h3>
                    </div>
                    <div className="service-body">
                    <ul className="service-list">
                            <li>
                                <BsCheck2Square className='service-list-icon'/>
                                <p>Front end web design</p>
                            </li>
                            <li>
                                <BsCheck2Square className='service-list-icon'/>
                                <p>Front end web design. Backend development</p>
                            </li>
                            <li>
                                <BsCheck2Square className='service-list-icon'/>
                                <p>Front end web design</p>
                            </li>
                            <li>
                                <BsCheck2Square className='service-list-icon'/>
                                <p>Front end web design. Backend development</p>
                            </li>
                            <li>
                                <BsCheck2Square className='service-list-icon'/>
                                <p>Front end web design</p>
                            </li>
                            <li>
                                <BsCheck2Square className='service-list-icon'/>
                                <p>Front end web design. Backend Design</p>
                            </li>
                        </ul>
                    </div>
                </article>
                <article className="service">
                    <div className="service-head">
                        <h3>Mobile App Design</h3>
                    </div>
                    <div className="service-body">
                    <ul className="service-list">
                            <li>
                                <BsCheck2Square className='service-list-icon'/>
                                <p>Front end web design</p>
                            </li>
                            <li>
                                <BsCheck2Square className='service-list-icon'/>
                                <p>Front end web design. Backend development</p>
                            </li>
                            <li>
                                <BsCheck2Square className='service-list-icon'/>
                                <p>Front end web design</p>
                            </li>
                            <li>
                                <BsCheck2Square className='service-list-icon'/>
                                <p>Front end web design. Backend development</p>
                            </li>
                            <li>
                                <BsCheck2Square className='service-list-icon'/>
                                <p>Front end web design</p>
                            </li>
                            <li>
                                <BsCheck2Square className='service-list-icon'/>
                                <p>Front end web design. Backend development</p>
                            </li>
                        </ul>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Services;