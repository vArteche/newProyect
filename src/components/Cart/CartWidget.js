
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);

  return (
    <div className="cart-widget">
      {/* Otros elementos del carrito */}      
      <span>{getTotalItems()}</span>
    </div>
  );
};

export default CartWidget;
