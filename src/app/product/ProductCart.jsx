"use client";

import { useCart } from "@/context/Usecontext";
import "./product.css";

const ProductCart = ({ product }) => {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <>
      <div className="product-card" key={product.id}>
        <img src={product.img} alt="" />

        <div className="product-info">
          <div>
            <p>{product.name}</p>
            <p>${product.price}</p>
          </div>
        </div>
        <button onClick={() => addToCart()} className="primary-button">
          añadir
        </button>
      </div>
    </>
  );
};

export default ProductCart;
