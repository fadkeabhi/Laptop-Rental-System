
import React from "react";
const Product2 = ({ item, onDelete }) => {
  const handleDelete = () => {
    // Delete function with the item ID
    onDelete(item.id);
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "5px", marginBottom: "20px", background: "white" }}>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p>${item.price}</p>
      <img src={item.image} alt={item.title} style={{ width: "100%" }} />
          <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Product2 ;
