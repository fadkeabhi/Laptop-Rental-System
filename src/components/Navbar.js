import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import  { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  const [logindata, setLoginData] = useState([]);


  const history = useNavigate();

  const [show, setShow] = useState(false);

  var todayDate = new Date().toISOString().slice(0, 10);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Birthday = () => {
      const getuser = localStorage.getItem("user_login");
      if (getuser && getuser.length) {
          const user = JSON.parse(getuser);
      
          setLoginData(user);

          const userbirth = logindata.map((el, k) => {
              return el.date === todayDate
          });

          if (userbirth) {
              setTimeout(() => {
                  console.log("ok");
                  handleShow();
              }, 3000)
          }
      }
  }

  const userlogout = ()=>{
      localStorage.removeItem("user_login")
      history("/login");
  }

  useEffect(() => {
      Birthday();
  }, [])

  return (logindata.length === 0 ? "errror" :
    <div style={{ background: "#333", color: "white", height: "50px", display: "flex", position: "fixed", width: "100%", top: "0", zIndex: "1000" }}>
      <div style={{ width: "75%", margin: "auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
     
                        
                       
        <div>
          <div style={{ display: "flex", alignItems: "left", gap: "2rem", textDecoration: "none" }}>
          <p className="text-xl uppercase">
              <span className="text-3xl text-green-400">M</span>ag Laptop Rental Services
            </p>
            <p className="text-xl">
              <span className="text-3xl text-400">{logindata[0].name}</span>
            </p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <Button onClick={userlogout}>LogOut</Button>
          <NavLink to="/login/Home/mycart" style={{ textDecoration: "none" }}>
            <div style={{ position: "relative", cursor: "pointer" }}>
              <AiOutlineShoppingCart style={{ fontSize: "2rem" }} />
              {cart.length > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-5px",
                    right: "-10px",
                    backgroundColor: "#34d399",
                    color: "white",
                    fontSize: "0.8rem",
                    width: "20px",
                    height: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%",
                    animation: "bounce 1s infinite",
                  }}
                >
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
