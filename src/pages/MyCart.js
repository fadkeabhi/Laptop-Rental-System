import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';

const MyCart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: "30px", marginTop: "50px", background: "#f0f0f0", zIndex: "10" }}>
        {cart.length > 0 ? (
          <div style={{ width: "75%", margin: "auto", display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "48%", padding: "20px", height: "30%" }}>
              {cart.map((item, index) => (
                <CartItem key={item.id} item={item} itemIndex={index} />
              ))}
            </div>

            <div style={{ width: "48%", padding: "40px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div style={{ fontWeight: "bold", color: "#1f9d55", textTransform: "uppercase" }}>Your Cart</div>
              <div style={{ fontSize: "2rem", color: "#1f9d55", fontWeight: "bold", textTransform: "uppercase", marginTop: "10px" }}>Summary</div>
              <p style={{ fontWeight: "bold", marginTop: "20px" }}>Total Items: <span style={{ fontWeight: "normal" }}>{cart.length}</span></p>
              <div>
                <p>Total Amount: <span style={{ fontWeight: "bold" }}>${totalAmount}</span></p>
                <button style={{ marginTop: "20px", padding: "10px", backgroundColor: "#1f9d55", color: "white", fontWeight: "bold", borderRadius: "5px" }}>
                  CheckOut Now
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <h1 style={{ fontWeight: "bold", fontSize: "2rem" }}>Cart Empty</h1>
            <Link to="/login/Home" style={{ textDecoration: "none" }}>
              <button style={{ backgroundColor: "#1f9d55", padding: "10px", borderRadius: "5px", marginTop: "20px", color: "white", fontWeight: "bold", cursor: "pointer" }}>
                Shop Now
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCart;
