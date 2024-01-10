import "bulma/css/bulma.css";
import "./itemListContainer.css";
import FilteredProductList from "../components/FilteredProd";

const ItemListContainer = () => {
  return (
    <div className="card-section">
      <FilteredProductList />
    </div>
  );
};

export default ItemListContainer;
