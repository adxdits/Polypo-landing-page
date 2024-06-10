import React from "react";
import "./Footer.css";
import logo from "../assets/Thumbnails/logofooter.png";
import updatedLogo from "../assets/Polypo Logo Updated 3D square zoom in png  - Copy 1 (1).png";
import instagramIcon from "../assets/Social Media Icons/instagram.svg";
import linkedinIcon from "../assets/Social Media Icons/linkedin.svg";
import tiktokIcon from "../assets/Social Media Icons/tiktok.svg";
import twitterIcon from "../assets/Social Media Icons/X.svg";
import vectorStroke from "../assets/Social Media Icons/snapchat.svg";

export const Footer = () => {
  return (
    <div className="component">
      <p className="text-wrapper"> Copyright © 2024, All Right Reserved.</p>
      <div className="div">CONTACT US</div>
      <div className="text-wrapper-2">PRIVACY POLICY</div>
      <div className="text-wrapper-3">TERMS AND CONDITIONS</div>
      <div className="overlap-group">
        <div className="overlap">
          <img className="polypos" alt="Polypo" src={logo} />
          <p className="the-future-of">
            <span className="span">
              The Future of Fashion is Personalized, Interactive, and{" "}
            </span>
            <span className="span">
              <b>All About You!</b>
            </span>
          </p>
        </div>
        <img
          className="polypo-logo-updated"
          alt="Polypo logo updated"
          src={updatedLogo}
        />
        <div className="let-s-talk-wrapper">
          <div className="let-s-talk">LET’S TALK!</div>
        </div>
        <div className="insta-svgrepo-com-wrapper">
          <img
            className="insta-svgrepo-com"
            alt="Insta svgrepo com"
            src={instagramIcon}
          />
        </div>
        <div className="linkedin-svgrepo-com-wrapper">
          <img
            className="linkedin-svgrepo-com"
            alt="Linkedin svgrepo com"
            src={linkedinIcon}
          />
        </div>
        <div className="tiktok-svgrepo-com-wrapper">
          <img
            className="tiktok-svgrepo-com"
            alt="Tiktok svgrepo com"
            src={tiktokIcon}
          />
        </div>
        <div className="x-logo-original-wrapper">
          <img
            className="x-logo-original"
            alt="X logo original"
            src={twitterIcon}
          />
        </div>
        <div className="vector-stroke-wrapper">
          <img
            className="vector-stroke"
            alt="Vector stroke"
            src={vectorStroke}
          />
        </div>
        <div className="text-wrapper-4">WOMAN</div>
        <div className="text-wrapper-5">MAN</div>
        <div className="text-wrapper-6">3D Viewer</div>
        <div className="text-wrapper-7">3D Viewer</div>
        <div className="text-wrapper-8">VTO Tech</div>
        <div className="text-wrapper-9">VTO Tech</div>
        <div className="text-wrapper-10">AR Tech</div>
        <div className="text-wrapper-11">AR Tech</div>
      </div>
    </div>
  );
};

export default Footer;
