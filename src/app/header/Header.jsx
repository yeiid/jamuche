"use client";
import {  useState } from "react";
import Carrito from "./Carrito";

import "./header.css";

function Header() {

  const [Active, setActive] = useState(true);

  return (
    <>
      <nav>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2976/2976215.png"
          alt=""
          className="menu"
        />
        <div className="navbar-left">
          {/* <img src={logo} alt="" className="logo" /> */}
          <ul>
            <li>
              <a href="/">INICIO</a>
            </li>
            <li>
              <a href="/">CONTACTO</a>
            </li>
            <li>
              <a href="/">NOSOTROS</a>
            </li>
            <li>
              <a href="/">ESPECIES</a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <ul>
            <div
              className="navbar-shopin-cart"
              onClick={() => setActive(!Active)}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/107/107831.png?w=740&t=st=1675300459~exp=1675301059~hmac=84ee149589a88a88917aeb1200ebd7493e0f3aff0bc1a0e48470b72593c804e3"
                alt=""
                className="carrito"
              />
              <div>{/* <span>{conProduct}</span> */}</div>
            </div>
          </ul>
          <div className={`carrito-display ${Active ? "" : "carrito-hiden"}`}>
            <Carrito

            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
