import "./skills.css";
import React from "react";
import JsIcon from "../../assets/javascript-svgrepo-com.svg";
import ReactIcon from "../../assets/reactjs-svgrepo-com.svg";
import SeoIcon from "../../assets/seo-1-svgrepo-com.svg";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skill-title">What I do</span>
      <span className="skill-description">I am very commited at creating websites, is what I enjoy the most.</span>
      <div className="skill-cards">
        <div className="skill-card">
          <img src={JsIcon} alt="Javascript-skill" />
          <div className="skill-card-text">
            <h2>Javascript</h2>
            <p>I have created interactive projects taking advantage of all features of the most widespread front-end language.</p>
          </div>
        </div>
        <div className="skill-card">
          <img src={ReactIcon} alt="React-skill" className="react-icon"/>
          <div className="skill-card-text">
            <h2>ReactJS</h2>
            <p>I am taking the user interface to the next level leveraged by the benefits of the library.</p>
          </div>
        </div>
        <div className="skill-card">
          <img src={SeoIcon} alt="Seo-skill" className="seo-icon"/>
          <div className="skill-card-text">
            <h2>SEO</h2>
            <p>Experience enhancing web visibility and position through relevant content and performance improvement.</p>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default Skills;