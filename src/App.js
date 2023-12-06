//componentes
import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Home from "./components/Home";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bulma/css/bulma.css";



function App(){
    return(

        <div>
        <NavBar></NavBar>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route exact path="/productos" element={<ItemListContainer/>}>PRODUCTOS</Route>
            </Routes>
        </BrowserRouter>

        </div>
    );
};
export default App;