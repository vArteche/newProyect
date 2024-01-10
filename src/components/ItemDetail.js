import React, { useContext, useState, useEffect } from 'react';
import ItemCount from './ItemCount/ItemCount';
import { CartContext } from '../context/CartContext';
import { ProductContext } from '../context/ProductContext';

const ItemDetail = ({ id, nombre, categoria, descripcion, precio, stock, Image }) => {
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
            precio,
            Image
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
            <div className='descripcion'>
                {product && <img className='imgDetail' src={product.image} alt={`${product.nombre} - Imagen`} />}


            <section className='textDescription'>
                <p>Categoría: {product.categoria}</p>
                <p>Acerca de: {product.descripcion}</p>
                <p>Precio: ${Number(product.precio)}</p>
                <ItemCount stock={product.stock} onAdd={setQuantity} value={quantity} />
                <button onClick={() => handleOnAdd()} disabled={product.stock === 0} className='addtocart'>
                    Agregar al carrito
                </button>
            </section>
            </div>
            
        </article>
    );
};

export default ItemDetail;
