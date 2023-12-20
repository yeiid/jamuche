"use client";
import { useState } from "react";
import Product from "../product/Product";
import './home.css'
import Carrito from "../product/Carrito";


const Home = () => {

  const [Active, setActive] = useState(true);
  return (
    <>
      
      <div className="navbar-shopin-cart" onClick={() => setActive(!Active)}>
        
        <img
          src="https://cdn-icons-png.flaticon.com/512/107/107831.png?w=740&t=st=1675300459~exp=1675301059~hmac=84ee149589a88a88917aeb1200ebd7493e0f3aff0bc1a0e48470b72593c804e3"
          alt=""
          className="carrito"
        />
      </div>
      <div className={`carrito-display ${Active ? "" : "carrito-hiden"}`}>
      <Carrito />
      </div>
        <Product />

    </>
  );
};

export default Home;
