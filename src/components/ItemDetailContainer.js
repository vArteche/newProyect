import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import './itemDetail.css'

const ItemDetailContainer = () => {
  const { productId } = useParams();
console.log("productId:",productId)
  const { getProductById, loading, error } = useContext(ProductContext);
console.log("loading:", loading)
console.log("error:", error)
  const producto = getProductById(productId);

  if (loading) {
    return <p>Cargando producto...</p>;
  }

  if (!producto) {
    return <p>No se encontró el producto.</p>;
  }

  return (
    <div className="ItemDetail">
      <ItemDetail
        id={producto.id}
        nombre={producto.nombre}
        categoria={producto.categoria}
        descripcion={producto.descripcion}
        precio={producto.precio}
        stock={producto.stock}
        img={producto.img}
      />
    </div>
  );
};

export default ItemDetailContainer;
