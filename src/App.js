//componentes
import ItemListContainer from "./pages/ItemListContainer";
import Layout from "./pages/Layout";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bulma/css/bulma.css";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";



function App() {
    return (
        <BrowserRouter>
        <CartProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<ItemListContainer />} />
                    <Route path="/productos/*" element={<ItemListContainer />} />
                    <Route path="/productos/:itemId" element={<ItemDetailContainer />} />
                    <Route path="*" element={<h1>ERROR 404 - NOT FOUND</h1>} />
                    <Route path="productos/categoria/:productoCat" element={<ItemListContainer />} />
                    <Route path="/cart" element={<Cart/>}></Route>
                </Route>
            </Routes>
        </CartProvider>

        </BrowserRouter>
    );
}



export default App;