import React, { useState, useEffect } from "react";
import "./Items.css";

const Items = () => {
  const [items, setItems] = useState([]);
  const [newImage, setNewImage] = useState("");
  const [newDescription, setNewDescription] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/product")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const handleAddItem = (e) => {
    e.preventDefault();
    const newItem = {
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

  const handleDeleteItem = (id) => {
    fetch(`http://127.0.0.1:5000/product/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        setItems(items.filter((item) => item.id !== id));
      } else {
        console.error("Failed to delete item");
      }
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
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
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
