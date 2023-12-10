import "bulma/css/bulma.css";
import './itemListContainer.css';
import { useState, useEffect } from "react";
import { obtenerItemCat, obtenerItems } from './productos';
import ItemLister from './ItemLister';
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [productoCat] = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productosObtenidos = productoCat ? await obtenerItemCat(productoCat) : await obtenerItems();
                setProductos(productosObtenidos);
            } catch (error) {
                console.error('Error al obtener productos:', error);
            } finally {
                setCargando(false);
            }
        };

        fetchData();
    }, []);

    if (cargando) {
        return <p>Cargando productos...</p>;
    }

    return (
        <div className="card-section">
            {productos.length > 0 ? (
                <ItemLister productos={[productos]} />
            ) : (
                <p>No se encontraron productos.</p>
            )}
        </div>
    );
};

export default ItemListContainer;
