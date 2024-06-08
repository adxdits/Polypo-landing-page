import React from "react";
import "./WelcomeMessage.css";
import mainImage from "../assets/Main image/cmd98_white_mannequin_e7883e2f-82e9-430a-b53c-d8472dfc5e08.png";

const WelcomeMessage = () => (
  <div className="cont">
    <div className="text">
      <h4 className="little">WHAT TO TRY</h4>
      <h1 className="welcome-message">
        Step Into the Future of Online Shopping with Polypo
      </h1>
    </div>
    <img src={mainImage} alt="Main Visual" className="main-image" />
  </div>
);

export default WelcomeMessage;
