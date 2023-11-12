"use client"
import { useContext } from "react";

import './product.css';
import Cart from "./Cart";
import {ContextProduct} from "@/context/Usecontext";

export default  function Product () {
  const context = useContext(ContextProduct);

  const {
    allProducts,
    setallProducts,
    conProduct,
    setconProduct,
    Total,
    setTotal,
  } = context;

  const addProduct = (product) => {
    // Verifica si el producto ya está en el carrito.
    const found = allProducts.find(p => p.id === product.id);
  
    // Si el producto ya está en el carrito, actualiza la cantidad.
    if (found) {
      found.cantidad = Math.max(found.cantidad + 1, 1);
      setTotal(Total + product.precio * found.cantidad);
    } else {
      // Si el producto no está en el carrito, lo agrega.
      allProducts.push(product);
      setTotal(Total + product.precio);
      console.log(Total)
    }
  };

  return(
    <>
    <Cart addProduct={addProduct}/>
    </>
  )


};

