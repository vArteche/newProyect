import React, { useContext, useState } from 'react';
import ItemCount from './ItemCount/ItemCount';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ id, nombre, categoria, descripcion, precio, stock, img }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);

    const {addItem} = useContext(CartContext)

    const handleOnAdd =(cuantity) => {
        setQuantityAdded(cuantity)
        const item= {
            id, nombre, precio
        }
        addItem(item,cuantity)
    }
    return (
        <article>
            <header className='header'>
                <h2>{nombre}</h2>
            </header>
            <picture>
                <img src={img} alt={`${nombre} - Imagen`} />
            </picture>
            <section>
                <p>{id}</p>
                <p>Categoría: {categoria}</p>
                <p>Acerca de: {descripcion}</p>
                <p> Precio: ${Number(precio)}</p>
                <ItemCount initial={1} stock={stock} />
                <button onClick={handleOnAdd}>Agregar al carrito</button>
                
            </section>
        </article>
    );
};

export default ItemDetail;
