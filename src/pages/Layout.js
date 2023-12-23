import ItemListContainer from "./ItemListContainer";
import NavBar from "../components/navBar/NavBar";
import {Outlet} from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer";

function Layout(){

    return (
        <div>
            <NavBar/>         
            <Outlet></Outlet>
            <footer>
                <p>React</p>
            </footer>
        </div>
    )

}


export default Layout;