"use client";
import "./carrito.css";
import { useContext } from "react";
import { ContextProduct } from "@/context/Usecontext";

// export default function Carrito() {
//   const context = useContext(ContextProduct);

//   const { allProducts, Total } = context;

//   return (
//     <div className="cart-products" id="products-id">
//       {allProducts ? (
//         <>
//           <div className="carrito-info">
//             <div className="title">
//               <h2>PAUCHY</h2>
//             </div>
//             <div className="carrito-conten">
//               <p>CANTIDAD</p>
//               <p>PRECIO</p>
//               <p>PRODUCTO</p>
//             </div>
//             {allProducts.map((product) => (
//               <div className="carrito-cart" key={product.id}>
//                 <p>{product.cantidad}</p>
//                 <p>{product.precio}</p>
//                 <p>{product.name}</p>
//               </div>
//             ))}
//           </div>
//           <div className="total-p">
//             <p>TOTAL</p>
//             <span>{Total}</span>
//           </div>
//           <div className="botones">
//             <button className="secondary-button cart-button">COMPRAR</button>
//             <button className="secondary-button cart-button">
//               vaciar cariito
//             </button>
//           </div>
//         </>
//       ) : (
//         <div className="carrito-footer">
//           <p>Carrito vacío - comience a comprar!</p>
//         </div>
//       )}
//     </div>
//   );
// }


export default function Carrito() {
  const context = useContext(ContextProduct);

  const { allProducts, Total } = context;

  const handleBuy = () => {
    // Envia un pedido al servidor.
  };

  const handleEmptyCart = () => {
    // Elimina todos los productos del carrito.
    context.setallProducts([]);
    context.setTotal([]);
  };

  return (
    <div className="cart-products" id="products-id">
      {allProducts ? (
        <>
          <div className="carrito-info">
            <div className="title">
              <h2>PAUCHY</h2>
            </div>
            <div className="carrito-conten">
              <p>CANTIDAD</p>
              <p>PRECIO</p>
              <p>PRODUCTO</p>
            </div>
            {allProducts.map((product) => (
              <div className="carrito-cart" key={product.id}>
                <p>{product.cantidad}</p>
                <p>{product.precio}</p>
                <p>{product.name}</p>
              </div>
            ))}
          </div>
          <div className="total-p">
            <p>TOTAL</p>
            <span>{Total}</span>
          </div>
          <div className="botones">
            <button className="secondary-button cart-button" onClick={handleBuy}>
              COMPRAR
            </button>
            <button
              className="secondary-button cart-button"
              onClick={handleEmptyCart}
            >
              vaciar cariito
            </button>
          </div>
        </>
      ) : (
        <div className="carrito-footer">
          <p>Carrito vacío - comience a comprar!</p>
        </div>
      )}
    </div>
  );
};