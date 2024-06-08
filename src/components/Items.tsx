import React from "react";
import "./Items.css";
import modelMan from "../assets/Thumbnails/1- Woman/model-women.png";
import modelWoman from "../assets/Thumbnails/2- Man - Optional/Men Jacket.png";

const Items = () => (
  <div className="items">
    <div className="item">
      <img src={modelMan} alt="Model Man" className="model-image" />
      <div className="item-description">Polypo blazer suit</div>
    </div>
    <div className="item">
      <img src={modelWoman} alt="Model Woman" className="model-image" />
      <div className="item-description">Polypo crop top</div>
    </div>
    {/* Add more items as needed */}
  </div>
);

export default Items;
