import React, { createContext, useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

export const ProductContext = createContext({
  products: [],
  loading: true,
  error: null,
  getAllProducts: () => [],
  getProductsByCategory: (category) => [],
  getProductById: (productId) => null,
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const db = getFirestore();
        const productCollection = collection(db, "productos");
        const snapshot = await getDocs(productCollection);

        if (snapshot.size > 0) {
          setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        } else {
          setError("No se encontraron datos");
        }

        setLoading(false);
      } catch (error) {
        console.error("Error al obtener productos:", error);
        setError("Error al obtener productos");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getAllProducts = () => {
    return products;
  };

  const getProductsByCategory = (productoCat) => {
    return products.filter((product) => product.categoria === productoCat);
  };

  const getProductById = (productId) => {
    return products.find((product) => product.id === productId) || null;
};

  return (
    <ProductContext.Provider
      value={{ products, loading, error, getAllProducts, getProductsByCategory, getProductById }}
    >
      {children}
    </ProductContext.Provider>
  );
};
