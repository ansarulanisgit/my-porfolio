import React from "react";
import CallToAction from "./CallToAction";
import "./Header.css";
import profilePhoto from "../../assets/profile.png";
import SocialLinks from "./SocialLinks";
import { ImArrowRight2 } from "react-icons/im";
import logo from "../../logo.svg";

const Header = () => {
  return (
    <header id="home">
      <div className="container header">
        <img className="logo" src={logo} alt="" />
        <h4>Hi there, Welcome. I'm</h4>
        <h1>Ansarul Anis</h1>
        <h4 className="text-light">Fullstack React Developer</h4>
        <CallToAction></CallToAction>
        <SocialLinks></SocialLinks>
        <div className="scroll-down">
          <a href="#contact">Scroll Down</a>
          <ImArrowRight2 />
        </div>
        <div className="profile-photo">
          <img src={profilePhoto} alt="Anis" />
        </div>
      </div>
    </header>
  );
};

export default Header;
