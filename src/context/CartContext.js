import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    clearCart: () => {},
    totalQuantity: 0,
    getTotalItems: () => {},
    isCheckingOut: false,   // Nuevo estado para manejar si se está realizando el checkout
    setIsCheckingOut: () => {},  // Nuevo método para establecer isCheckingOut
  });
  

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [isCheckingOut, setIsCheckingOut] = useState(false);

    const addItem = (item, quantity) => {
        if (item && !isInCart(item.id)) {
            setCart(prov => [...prov, { ...item, quantity }]);
        } else {
            console.error('El producto ya fue agregado o el objeto item es nulo/undefined');
        }
    };
    

    const removeItem = (itemId) =>{
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () =>{
        setCart([])
    }

    const isInCart = (itemId) =>{
        return cart.some(prod => prod.id === itemId)
    }
    const getTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
      };

      const contextValue = {
        cart,
        clearCart,
        totalQuantity: getTotalItems(),
        getTotalItems,
        isCheckingOut,
        setIsCheckingOut,
        addItem,
        removeItem,
      };
    
      return (
        <CartContext.Provider value={contextValue}>
          {children}
        </CartContext.Provider>
      );
};
