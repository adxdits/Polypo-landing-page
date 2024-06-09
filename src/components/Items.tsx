import React from "react";
import "./Items.css";
import modelMan from "../assets/Thumbnails/1- Woman/model-women.png";
import modelWoman from "../assets/Thumbnails/2- Man - Optional/Men Jacket.png";

const Items = () => (
  <div className="items">
    <div className="item">
      <img src={modelMan} alt="Model Man" className="model-image" />
      <div className="item-description">POLYPO CROP TOP</div>
    </div>
    <div className="item">
      <img src={modelWoman} alt="Model Woman" className="model-image" />
      <div className="item-description">POLYPO SIMPLE SHIRT</div>
    </div>
    <div className="item">
      <img src={modelWoman} alt="Model Woman" className="model-image" />
      <div className="item-description">POLYPO SIMPLE SHIRT</div>
    </div>
    <div className="item">
      <img src={modelWoman} alt="Model Woman" className="model-image" />
      <div className="item-description">POLYPO SIMPLE SHIRT</div>
    </div>
    <div className="item">
      <img src={modelWoman} alt="Model Woman" className="model-image" />
      <div className="item-description">POLYPO SIMPLE SHIRT</div>
    </div>
    <div className="item">
      <img src={modelWoman} alt="Model Woman" className="model-image" />
      <div className="item-description">POLYPO SIMPLE SHIRT</div>
    </div>
  </div>
);

export default Items;
