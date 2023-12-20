"use client";

import { useState, useEffect } from "react";
import "./cart.css";

const SpeciesSection = ({ especies }) => {
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    setMostrar(true);
  }, [especies]);

  return (
    <section className="species">
      <div className="species-container">
        <h2>Especies</h2>

        {mostrar && (
          <div className="species-list">
            {especies.map((especie, index) => (
              <div key={index} className="species-item">
                <img src={especie.imagen} alt={especie.nombre} />
                <h3>{especie.nombre}</h3>
                <p>{especie.descripcion}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SpeciesSection;
