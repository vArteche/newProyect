import React from 'react';
import ItemCount from './ItemCount/ItemCount';

const ItemDetail = ({ id, nombre, categoria, descripcion, precio, stock, img }) => {
    return (
        <article>
            <header className='header'>
                <h2>{nombre}</h2>
            </header>
            <picture>
                <img src={img} alt={`${nombre} - Imagen`} />
            </picture>
            <section>
                <p>{categoria}</p>
                <p>{descripcion}</p>
                <p>${Number(precio)}</p>
                <ItemCount initial={1} stock={stock} />
            </section>
        </article>
    );
};

export default ItemDetail;
