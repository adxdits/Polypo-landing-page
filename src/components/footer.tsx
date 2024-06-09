import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";
import socialIcon from "../assets/Social Media Icons/X.svg";
import purpleLogo from "../assets/Polypo Logo Updated 3D square zoom in png  - Copy 1 (1).png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <img src={logo} alt="Polypo Logo" className="logo" />
        <p>
          The Future of Fashion is Personalized, Interactive, and All About You!
        </p>
        <div className="footer-links">
          <div className="category">
            <h4>WOMAN</h4>
            <ul>
              <li>3D Viewer</li>
              <li>VTO Tech</li>
              <li>AR Tech</li>
            </ul>
          </div>
          <div className="category">
            <h4>MAN</h4>
            <ul>
              <li>3D Viewer</li>
              <li>VTO Tech</li>
              <li>AR Tech</li>
            </ul>
          </div>
        </div>
        <div className="social-media">
          <a href="#">
            <img src={socialIcon} alt="Instagram" />
          </a>
          <a href="#">
            <img src={socialIcon} alt="LinkedIn" />
          </a>
          <a href="#">
            <img src={socialIcon} alt="TikTok" />
          </a>
          <a href="#">
            <img src={socialIcon} alt="Snapchat" />
          </a>
        </div>
        <button className="contact-button">LET'S TALK!</button>
      </div>
      <div className="footer-bottom">
        <img src={purpleLogo} alt="Purple U Logo" className="purple-logo" />
        <p>&copy; 2024 Polypo. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
