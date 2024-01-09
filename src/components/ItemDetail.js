import React, { useContext, useState, useEffect } from 'react';
import ItemCount from './ItemCount/ItemCount';
import { CartContext } from '../context/CartContext';
import { ProductContext } from '../context/ProductContext';

const ItemDetail = ({ id, nombre, categoria, descripcion, precio, stock, img }) => {
    const { addItem } = useContext(CartContext);
    const { getProductById } = useContext(ProductContext);
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const productData = getProductById(id);
        setProduct(productData);
    }, [getProductById, id]);

    const handleOnAdd = () => {
        const item = {
            id,
            nombre,
            precio
        };
        addItem(item, quantity);
    };

    if (!product) {
        return <p>Cargando producto...</p>;
    }

    return (
        <article className="item-detail">
            <header className='header'>
                <h2>{product.nombre}</h2>
            </header>
            <picture>
                <img src={product.img} alt={`${product.nombre} - Imagen`} />
            </picture>
            <section>
                <p>{product.id}</p>
                <p>Categoría: {product.categoria}</p>
                <p>Acerca de: {product.descripcion}</p>
                <p>Precio: ${Number(product.precio)}</p>
                <ItemCount stock={product.stock} onAdd={setQuantity} value={quantity} />
                <button onClick={() => handleOnAdd()} disabled={product.stock === 0}>
                    Agregar al carrito
                </button>
            </section>
        </article>
    );
};

export default ItemDetail;
