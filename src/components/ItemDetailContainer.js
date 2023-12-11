import React, { useEffect, useState } from "react";
import { obtenerItemId, obtenerItems} from "./productos"; 
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const [cargando, setCargando] = useState(true);
    const {itemId} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productosObtenidos = itemId ? await obtenerItemId(itemId) : await obtenerItems();
                setProducto(productosObtenidos);
            } catch (error) {
                console.error('Error al obtener productos:', error);
            } finally {
                setCargando(false);
            }
        };

        fetchData();
    }, [itemId]);

    if (cargando) {
        return <p>Cargando producto...</p>;
    }

    
    return (
        <div className="ItemDetail">
            {producto && <ItemDetail {...producto} />}
        </div>
    );
}

export default ItemDetailContainer;
