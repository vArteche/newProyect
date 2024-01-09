import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ id, nombre, precio, quantity, image }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="cart-item">
        <picture>
            <img src={image}></img>
        </picture>
        <p>{nombre}</p>
        <p>Precio: ${precio}</p>
        <p>Cantidad: {quantity}</p>
        <button onClick={() => removeItem(id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;
