import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import portfolio1 from "../../assets/portfolio1.webp";
import portfolio2 from "../../assets/portfolio2.webp";
import portfolio3 from "../../assets/portfolio3.webp";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);

  //Load all portfolio
  useEffect(() => {
    fetch("https://cryptic-shelf-03380.herokuapp.com/portfolio")
      .then((res) => res.json())
      .then((data) => setPortfolio(data));
  }, [portfolio]);

  return (
    <section id="portfolio">
      <h4>Check my recent works.</h4>
      <h2>My Portfolio</h2>
      <div className="divider"></div>
      <div className="container portfolio">
          {
              portfolio.map(item => <article key={item._id} className="portfolio-item">
              <div className="portfolio-img">
                <img src={item.image} alt="Portfolio" />
              </div>
              <h3>{item.title}</h3>
              <div className="portfolio-item-buttons">
                <a href={item.github} target="_blank" className="btn">
                  Github
                </a>
                <a href={item.liveDemo} target="_blank" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>)
          }
        
      </div>
    </section>
  );
};

export default Portfolio;
