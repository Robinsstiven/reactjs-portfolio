import React from "react";
import './portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2 className="experience-title">My portfolio</h2>
      <span className="experience-description">Experience description lorem ipsum</span>
      <div className="experience-imgs">
        <img src="" alt="" className="experience-img" />
        <img src="" alt="" className="experience-img" />
      </div>
      <button className="portfolio-btn">see more</button>
    </section>
  );
}

export default Portfolio;