import "bulma/css/bulma.css";
import './itemListContainer.css';
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ItemLister from '../components/ItemLister';
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { getAllProducts, getProductsByCategory, loading, error } = useContext(ProductContext);
  const { productoCat } = useParams();

  const productos = productoCat ? getProductsByCategory(productoCat) : getAllProducts();

  if (loading) {
    return <p>Cargando productos...</p>;
  }

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

export default ItemListContainer;
