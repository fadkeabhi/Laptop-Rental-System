import react from "react";
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import SIgn_img from './SIgn_img'
import { useNavigate } from 'react-router-dom'
import { getAuth , signOut } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../utils/firebaseConfig"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Additem = ()=>{
    const { cart } = useSelector((state) => state);
  const [logindata, setLoginData] = useState([]);

  const history = useNavigate();

  // check if user authenticated
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);
  const user = auth.currentUser;
  if (user) {
    console.log('User email:', user);
  } else {
    console.log('No user is currently signed in.');
    history("/login");
  }
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
    const back =()=>{
        history("/login/admin")
       }
    const userlogout = () => {
        signOut(auth)
        .then(() => {
          console.log('User logged out successfully');
        })
        .catch((error) => {
          console.error('Error logging out:', error);
        });
        localStorage.removeItem("user_login")
        history("/login");
      }  ///
      /// firebase setup  
      const [inpval, setInpval] = useState({
        name: "",
        email: "",
        date: "",
        password: ""
    })

      const { itemtitle, desc, url, price } = inpval;
      //get function 
       const getdata =(e) => {

       }
      //add function 
 const addData = async (e) =>{ 
    if (itemtitle === "") {
        toast.error(' name field is must !', {
            position: "top-center",
        });
    } else if (desc === "") {
        toast.error('Description field is must', {
            position: "top-center",
        });
    } if (price === "" && isNaN(Number(price))) {
        toast.error('Please enter a valid price', {
          position: "top-center",
        });
    } else if (url === "") {
        toast.error('url field is must', {
            position: "top-center",
        });
    }

 }
   const addback=()=>{
     history("/login/admin")
     toast.success("items added successfully..!", {
        position: toast.POSITION.TOP_CENTER,
      });
   }
 
    return (<><div style={{ background: "#333", color: "white", height: "50px", display: "flex", position: "fixed", width: "100%", top: "0", zIndex: "1000" }}>
    <div style={{ width: "75%", margin: "auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div>
        <div style={{ display: "flex", alignItems: "left", gap: "2rem", textDecoration: "none" }}>
          <p className="text-xl uppercase">
            <span className="text-3xl text-green-400">M</span>ag Laptop Rental Services
          </p>
          <p className="text-xl">
            <span className="text-3xl text-400">Admin </span>
          </p>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <Button onClick={back}>Back</Button>
        <Button onClick={userlogout}>LogOut</Button>
      </div>
    </div>
  </div>
   <div className="container mt-3">
   <section className='d-flex justify-content-between'>
       <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
           <h3 className='text-center col-lg-6'>Add New Items</h3>
           <Form >
               <Form.Group className="mb-3 col-lg-6" controlId="itemtile">
                   <Form.Control type="text" name='itemtitle' onChange={getdata} placeholder="Item Name" />
               </Form.Group>
               <Form.Group className="mb-3 col-lg-6" controlId="desc">

                   <Form.Control type="text" name='desc' onChange={getdata} placeholder="Enter Description of Item" />
               </Form.Group>

               <Form.Group className="mb-3 col-lg-6" controlId="price">

                   <Form.Control onChange={getdata} name='price' type="number"  placeholder="Enter Price"/>
               </Form.Group>

               <Form.Group className="mb-3 col-lg-6" controlId="image">

                   <Form.Control type="url" name='url' onChange={getdata} placeholder="Enter The Url Of Image" />
               </Form.Group>
               <Button variant="primary" className='col-lg-6' onClick={ addback} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                   Add This Item 
               </Button>
           </Form>
           
       </div>
       <SIgn_img />
   </section>
   <ToastContainer />
</div></>
)
};
export default Additem;