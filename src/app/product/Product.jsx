"use client"
import { useContext } from "react";

import './product.css';
import Cart from "./Cart";
import {ContextProduct} from "@/context/Usecontext";

export default  function Product () {
  const context = useContext(ContextProduct);

  const {
    allProducts,
    setTotal,
  } = context;

  const addProduct = (product) => {
    // Verifica si el producto ya está en el carrito.
    const found = allProducts.find(p => p.id === product.id);
  
    // Si el producto ya está en el carrito, actualiza la cantidad y el precio.
    if (found) {
      found.cantidad = Math.max(found.cantidad + 1, 1);
      // found.precio = product.precio;
    } else {
      // Si el producto no está en el carrito, lo agrega.
      allProducts.push(product);
    }

    const totalPrice = allProducts.reduce((acc, product) => {
      return acc + product.precio * product.cantidad;
    }, 0);
    setTotal(totalPrice);
   };

   console.log(allProducts)

  return(
    <>
    <Cart addProduct={addProduct}/>
    </>
  )
};

