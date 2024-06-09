import React from "react";
import "./Items.css";
import model1 from "../assets/Thumbnails/1- Woman/model-women.png";
import model2 from "../assets/Thumbnails/1- Woman/Women - Oversized shirt beige.png";
import model3 from "../assets/Thumbnails/1- Woman/Women - Suit Blazer.png";
import model4 from "../assets/Thumbnails/1- Woman/Women - Sweat short.png";
import model5 from "../assets/Thumbnails/1- Woman/Women - Suit Skirt.png";
import model6 from "../assets/Thumbnails/1- Woman/Women Dress.png";
import model7 from "../assets/Thumbnails/1- Woman/Women Sweat Shirt.png";

const Items = () => (
  <div className="items">
    <div className="item">
      <img src={model1} alt="Model Man" className="model-image" />
      <div className="item-description">POLYPO CROP TOP</div>
    </div>
    <div className="item">
      <img src={model2} alt="Model Woman" className="model-image" />
      <div className="item-description">POLYPO SIMPLE SHIRT</div>
    </div>
    <div className="item">
      <img src={model3} alt="Model Woman" className="model-image" />
      <div className="item-description">POLYPO BLAZER SUIT</div>
    </div>
    <div className="item">
      <img src={model7} alt="Model Woman" className="model-image" />
      <div className="item-description">POLYPO TAGGED SHIRT</div>
    </div>
    <div className="item">
      <img src={model5} alt="Model Woman" className="model-image" />
      <div className="item-description">POLYPO TAGGED SHORTS</div>
    </div>
    <div className="item">
      <img src={model6} alt="Model Woman" className="model-image" />
      <div className="item-description">POLYPO BLAZER SLIRT</div>
    </div>
    <div className="item">
      <img src={model4} alt="Model Woman" className="model-image" />
      <div className="item-description">POLYPO TRICOLOR DRESS</div>
    </div>
  </div>
);

export default Items;
