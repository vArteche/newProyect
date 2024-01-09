//componentes
import ItemListContainer from "./pages/ItemListContainer";
import Layout from "./pages/Layout";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bulma/css/bulma.css";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import { ProductProvider } from "./context/ProductContext";
import Checkout from "./components/CheckOut";
import OrderConfirmation from "./pages/OrderConfirm";

function App() {
    return (
        <BrowserRouter>
        <ProductProvider>
        <CartProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<ItemListContainer />} />
                    <Route path="/productos/*" element={<ItemListContainer />} />
                    <Route path="/productos/:productId" element={<ItemDetailContainer />} />
                    <Route path="*" element={<h1>ERROR 404 - NOT FOUND</h1>} />
                    <Route path="productos/categoria/:productoCat" element={<ItemListContainer />} />
                    <Route path="/cart" element={<Cart/>}></Route>
                    <Route path="checkout" element={<Checkout/>}></Route>
                    <Route path="/order-confirmation" element={<OrderConfirmation/>} />
                </Route>
            </Routes>
        </CartProvider>
        </ProductProvider>
        </BrowserRouter>
    );
}



export default App;