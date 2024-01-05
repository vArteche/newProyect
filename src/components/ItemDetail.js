import React, { useContext, useState, useEffect } from 'react';
import ItemCount from './ItemCount/ItemCount';
import { CartContext } from '../context/CartContext';
import { ProductContext } from '../context/ProductContext';

const ItemDetail = ({ id, nombre, categoria, descripcion, precio, stock, img }) => {
    const { addItem } = useContext(CartContext);
    const { getProductById } = useContext(ProductContext);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Aquí deberías llamar a la función del contexto para obtener el producto por ID
        const productData = getProductById(id);
        setProduct(productData);
    }, [getProductById, id]);

    const handleOnAdd = (quantity) => {
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
                <ItemCount stock={product.stock} onAdd={handleOnAdd} />
                <button onClick={() => handleOnAdd(1)}>Agregar al carrito</button>
            </section>
        </article>
    );
};

export default ItemDetail;
