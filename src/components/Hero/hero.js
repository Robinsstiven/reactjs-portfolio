import React from "react";
import './hero.css';
import bg from "../../assets/developer-smiling.png"
import dealImg from "../../assets/handshake-svgrepo-com.svg"

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-content">
        <span className="hello">Hello.</span>
        <span className="hero-text">I'm <span className="hero-name">Robin</span> <br/>Web developer and SEO</span>
        <p className="hero-paragraph">I'm a passionate web developer who loves creating engaging user interfaces <br/>and enhancing web SEO. <br/>Let's build something amazing together!</p>
        <a href=""><button className="hero-btn"><img src={dealImg} className="deal-img" alt="deal" />Hire</button></a>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  )
}

export default Hero;