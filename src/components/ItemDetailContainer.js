import React, { useEffect, useState } from "react";
import { obtenerItemId } from "./productos"; 
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    const {itemId} = useParams();

    useEffect(() => {
        obtenerItemId(itemId)
            .then(response => {
                setProducto(response);
            })
            .catch(error => {
                console.log(error);
            });
    }, [itemId]);

    return (
        <div className="ItemDetail">
            {producto && <ItemDetail {...producto} />}
        </div>
    );
}

export default ItemDetailContainer;
