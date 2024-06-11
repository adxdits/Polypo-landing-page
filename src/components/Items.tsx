// Items.js

import React, { useState, useEffect } from "react";
import "./Items.css";

const Items = () => {
  const [items, setItems] = useState([]);
  const [newImage, setNewImage] = useState("");
  const [newId, setId] = useState("");
  const [newDescription, setNewDescription] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/product")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const handleAddItem = (e) => {
    e.preventDefault();
    setId(newId + 1);
    const newItem = {
      Id: newId,
      name: newDescription,
      description: newDescription,
      image_url: newImage,
    };
    fetch("http://127.0.0.1:5000/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((response) => response.json())
      .then((data) => {
        setItems([...items, data]);
        setNewImage("");
        setNewDescription("");
      });
  };

  return (
    <div>
      <div className="items">
        {items.map((item) => (
          <div key={item.id} className="item">
            <img
              src={item.image_url}
              alt={item.description}
              className="model-image"
            />
            <div className="item-description">{item.description}</div>
          </div>
        ))}
      </div>
      <form onSubmit={handleAddItem} className="add-item-form">
        <input
          type="text"
          placeholder="Image URL"
          value={newImage}
          onChange={(e) => setNewImage(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          required
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default Items;
