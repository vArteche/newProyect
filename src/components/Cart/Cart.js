import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import './cart.css'

const Cart = () => {
  const { cart, clearCart, totalQuantity, getTotalItems, isCheckingOut, setIsCheckingOut } = useContext(CartContext);

//   if (isCheckingOut) {
//     return <Checkout />;
//   }

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.precio * item.quantity, 0);
  };

  if (totalQuantity === 0) {
    return (
      <div>
        <h1>No hay items en el carrito</h1>
        <Link to="/">Productos</Link>
      </div>
    );
  }

  return (
    <div className="cart">
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
      <h3>Total productos: {getTotalItems()}</h3>
      <h3>Precio total: ${calculateTotalPrice()}</h3>
      <button className="btn" onClick={() => clearCart()}>Limpiar Carrito</button>
      <Link to="/checkout">
      <button className='btn' onClick={() => setIsCheckingOut(true)}>Realizar Pedido</button>
      </Link>
      <Link to='/productos'>
        <button className="btn">Seguir comprando</button>
      </Link>
      
    </div>
  );
};

export default Cart;
