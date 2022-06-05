import React from 'react';
import './Portfolio.css';
import portfolio1 from '../../assets/portfolio1.webp';
import portfolio2 from '../../assets/portfolio2.webp';
import portfolio3 from '../../assets/portfolio3.webp';

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h4>Check my recent works.</h4>
            <h2>My Portfolio</h2>
            <div className="divider"></div>
            <div className="container portfolio">
                <article className="portfolio-item">
                    <div className="portfolio-img">
                        <img src={portfolio1} alt="Portfolio" />
                    </div>
                    <h3>This is portfolio item title</h3>
                    <div className="portfolio-item-buttons">
                        <a href="#home" target='_blank' className="btn">Github</a>
                        <a href="#home" target='_blank' className="btn btn-primary">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio-item">
                    <div className="portfolio-img">
                        <img src={portfolio2} alt="Portfolio" />
                    </div>
                    <h3>This is portfolio item title</h3>
                    <div className="portfolio-item-buttons">
                        <a href="#home" className="btn">Github</a>
                        <a href="#home" className="btn btn-primary">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio-item">
                    <div className="portfolio-img">
                        <img src={portfolio1} alt="Portfolio" />
                    </div>
                    <h3>This is portfolio item title</h3>
                    <div className="portfolio-item-buttons">
                        <a href="#home" className="btn">Github</a>
                        <a href="#home" className="btn btn-primary">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio-item">
                    <div className="portfolio-img">
                        <img src={portfolio1} alt="Portfolio" />
                    </div>
                    <h3>This is portfolio item title</h3>
                    <div className="portfolio-item-buttons">
                        <a href="#home" className="btn">Github</a>
                        <a href="#home" className="btn btn-primary">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio-item">
                    <div className="portfolio-img">
                        <img src={portfolio3} alt="Portfolio" />
                    </div>
                    <h3>This is portfolio item title</h3>
                    <div className="portfolio-item-buttons">
                        <a href="#home" className="btn">Github</a>
                        <a href="#home" className="btn btn-primary">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio-item">
                    <div className="portfolio-img">
                        <img src={portfolio2} alt="Portfolio" />
                    </div>
                    <h3>This is portfolio item title</h3>
                    <div className="portfolio-item-buttons">
                        <a href="#home" className="btn">Github</a>
                        <a href="#home" className="btn btn-primary">Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Portfolio;