import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ id, nombre, precio, quantity, Image }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="cart-item">
        <p>{nombre}</p>
        <p>Precio: ${precio}</p>
        <p>Cantidad: {quantity}</p>
        <button className="btn" onClick={() => removeItem(id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;
