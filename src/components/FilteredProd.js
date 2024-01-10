import React from "react";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ItemLister from "../components/ItemLister";
import { useParams } from "react-router-dom";

const FilteredProductList = () => {
  const { getProductsByCategory, getAllProducts, loading, error } = useContext(ProductContext);
  const { categoria } = useParams();

  const productos = categoria ? getProductsByCategory(categoria) : getAllProducts();

  if (loading) {
    return <p>Cargando productos...</p>;
  }
console.log(categoria)
  return (
    <div className="card-section">
      {productos.length > 0 ? (
        <ItemLister productos={productos} />
      ) : (
        <p>No se encontraron productos.</p>
      )}
    </div>
  );
};

export default FilteredProductList;
