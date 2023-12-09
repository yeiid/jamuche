"use client"
import { useCart } from '@/context/Usecontext';

export default function PasarelaDePago  ()  {
  const { cart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleFinishPurchase = () => {
    // Construir el enlace de WhatsApp con los detalles del carrito
    const cartDetails = cart.map(item => `${item.quantity} x ${item.name} - $${item.price * item.quantity}`);
    const message = `¡Hola! Estoy interesado en comprar:\n${cartDetails.join('\n')}\nTotal: $${calculateTotal()}`;

    // Reemplaza '123456789' con tu número de WhatsApp
    const phoneNumber = '123456789';
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Redirigir a WhatsApp
    window.location.href = whatsappLink;
  };

  return (
    <div className="pasarela-container">
      <h2>Pasarela de Pago</h2>
      {/* Renderizar los detalles del carrito */}
      {cart.map((item) => (
        <div key={item.id} className="pasarela-item">
          <p>{item.quantity} x {item.name}</p>
          <p>${item.price * item.quantity}</p>
        </div>
      ))}
      <div className="total-p">
        <p>Total:</p>
        <span>${calculateTotal()}</span>
      </div>
      <p>
        ¡Gracias por elegir nuestros cactus! Para completar la compra,
        te redirigiremos a WhatsApp para finalizar la transacción.
      </p>
      {/* Botón para finalizar la compra */}
      <button onClick={handleFinishPurchase} className="finish-purchase-button">
        Finalizar Compra
      </button>
    </div>
  );
};
