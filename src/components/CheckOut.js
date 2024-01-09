import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { CartContext } from "../context/CartContext";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const Checkout = () => {
const { cart, clearCart } = useContext(CartContext);
const [formData, setFormData] = useState({ name: "", address: "", email: "" });
const navigate = useNavigate();

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
    e.preventDefault();

    // Crear un objeto con la información de la orden
    const orderData = {
    buyer: { ...formData },
    items: cart.map((item) => ({
        id: item.id,
        nombre: item.nombre,
        quantity: item.quantity,
    })),
      total: cart.reduce((total, item) => total + item.precio * item.quantity, 0),
    date: new Date(),
    };

    try {
      // Enviar la orden a Firebase
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    const docRef = await addDoc(ordersCollection, orderData);

    console.log("Orden creada con ID:", docRef.id);

      // Limpiar el carrito después de realizar la orden
    clearCart();

      // Redirigir a la página de confirmación
    navigate("/order-confirmation");
    } catch (error) {
    console.error("Error al procesar la orden:", error);
    }
};

return (
    <div>
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
            <label>
                Nombre:
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <br />
            <label>
                Dirección:
                <input type="text" name="address" value={formData.address} onChange={handleChange} required />
            </label>
            <br />
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <br />
            <button type="submit">Realizar Pedido</button>
        </form>
    </div>
    );
};

export default Checkout;
