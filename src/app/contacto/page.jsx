
"use client"
import { useState, useEffect } from "react";


const Contact = ({ data }) => {
  const [contacto, setContacto] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nombre", contacto.nombre);
    formData.append("correo", contacto.correo);
    formData.append("mensaje", contacto.mensaje);

    fetch("/contacto", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("Mensaje enviado correctamente");
        } else {
          alert("Ocurrió un error al enviar el mensaje");
        }
      });
  };

  useEffect(() => {
    setContacto(data);
  }, [data]);

  return (
    <section className="contact">
      <h2>Contacto</h2>

      <div className="info">
        <p>Dirección: {contacto.direccion}</p>
        <p>Teléfono: {contacto.telefono}</p>
        <p>Correo electrónico: {contacto.correo}</p>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={contacto.nombre}
          onChange={(e) => setContacto({ ...contacto, nombre: e.target.value })}
        />
        <input
          type="email"
          name="correo"
          placeholder="Correo electrónico"
          value={contacto.correo}
          onChange={(e) => setContacto({ ...contacto, correo: e.target.value })}
        />
        <input
          type="text"
          name="mensaje"
          placeholder="Mensaje"
          value={contacto.mensaje}
          onChange={(e) => setContacto({ ...contacto, mensaje: e.target.value })}
        />
        <button type="submit">Enviar</button>
      </form>

      <div className="fondo-animado">
        <img src="/assets/cactus.jpg" alt="Cactus" />
      </div>
    </section>
  );
};

export default Contact;
