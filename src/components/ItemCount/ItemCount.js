import React, { useState } from 'react';
import './itemCount.css';

const ItemCount = ({ stock, onAdd, value }) => {
  const [quantity, setQuantity] = useState(value);

  const handleIncrement = () => {
    if (quantity < stock) {
      setQuantity((prevQuantity) => prevQuantity + 1);
      onAdd(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      onAdd(quantity - 1);
    }
  };

  return (
    <div className="item-count">
      <button className="button" onClick={handleDecrement}>
        -
      </button>
      <p className="quantity">{quantity}</p>
      <button className="button" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default ItemCount;

