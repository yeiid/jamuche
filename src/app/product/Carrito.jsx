
"use client";
import { useCart } from "@/context/Usecontext";
import "./carrito.css";


const Carrito = () => {
  const { cart, dispatch } = useCart();

  const removeFromCart = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };

  const increaseQuantity = (productId) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: productId });
  };

  const decreaseQuantity = (productId) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: productId });
  };

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };
  function handleBuyClick() {
    // Construir el enlace de WhatsApp con los detalles del carrito
    const cartDetails = cart.map(
      (item) =>
        `${item.quantity} x ${item.name} - $${item.price * item.quantity}`
    );
    const message = `¡Hola! Estoy interesado en comprar:\n${cartDetails.join(
      "\n"
    )}\nTotal: $${calculateTotal()}`;

    // Reemplaza '123456789' con tu número de WhatsApp
    const phoneNumber = "3160457939";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Redirigir a WhatsApp
    window.location.href = whatsappLink;
  }
  return (
    <div className="cart-products">
              <div className="title">
          <h2>JAMUCHE´E</h2>
        </div>
      <div className="carrito-conten">

        {cart.length > 0 ? (
          <>
            <div className="cart-count">
              Total de artículos:{" "}
              {cart.reduce((count, item) => count + item.quantity, 0)}
            </div>
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="carrito-cart">
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="primary-button"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="total-p">
              <p>Total:</p>
              <span>${calculateTotal()}</span>
            </div>
            <button onClick={handleBuyClick} className="secondary-button">
              Comprar
            </button>
          </>

        ) : (
          <div className="cart-close">

          <p>Carrito vacio</p>
          </div>
        )}
      </div>
    </div>
  );
  
};

export default Carrito;
