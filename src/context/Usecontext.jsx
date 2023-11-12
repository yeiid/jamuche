"use client";

import { createContext, useState } from "react";

export const ContextProduct = createContext({
  allProducts: [],
  setallProducts: () => {},
  Total: 0,
  setTotal: () => {},
  conProduct: 0,
  setconProduct: () => {},
});

export default function ContextProvider({ children }) {
  const [allProducts, setallProducts] = useState([]);
  const [Total, setTotal] = useState(0);
  const [conProduct, setconProduct] = useState(0);

  return (
    <ContextProduct.Provider
      value={{
        allProducts,
        setallProducts,
        Total,
        setTotal,
        conProduct,
        setconProduct,

      }}
    >
      {children}
    </ContextProduct.Provider>
  );
}

