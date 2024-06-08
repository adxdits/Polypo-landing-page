import React from "react";
import "./Footer.css";
import facebookIcon from "../assets/Social Media Icons/tiktok.svg";
import instagramIcon from "../assets/Social Media Icons/instagram.svg";
import twitterIcon from "../assets/Social Media Icons/X.svg";

const Footer = () => (
  <footer className="footer">
    <div className="footer-social">
      <img src={facebookIcon} alt="Facebook" className="social-icon" />
      <img src={instagramIcon} alt="Instagram" className="social-icon" />
      <img src={twitterIcon} alt="Twitter" className="social-icon" />
    </div>
    <div className="footer-text">Copyright © 2024, All Right Reserved.</div>
    <div className="footer-links">
      <span className="contact-us">CONTACT US</span>
      <span className="privacy-policy">PRIVACY POLICY</span>
      <span className="terms-conditions">TERMS AND CONDITIONS</span>
    </div>
  </footer>
);

export default Footer;
