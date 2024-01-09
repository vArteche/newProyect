import React from 'react';
import { Link } from 'react-router-dom';

const OrderConfirmation = () => {
return (
    <div>
    <h2>¡Orden Confirmada!</h2>
    <p>Gracias por tu compra. Tu orden ha sido confirmada.</p>
    <p>Recibirás un correo electrónico con los detalles de tu orden.</p>
    <Link to="/">Volver a la página de inicio</Link>
    </div>
);
};

export default OrderConfirmation;
