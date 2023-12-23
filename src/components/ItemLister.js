import React from "react";
import Item from "../pages/Item";

const ItemLister = ({ productos }) => {
    return (
        <div>
            {productos.map((prod) => (
                <Item
                    key={prod.id}
                    id={prod.id}
                    nombre={prod.nombre}
                    definicion={prod.descripcion}
                    coleccion={prod.categoria}
                    img={prod.Image}
                    stock={prod.stock}
                />
            ))}
        </div>
    );
};

export default ItemLister;