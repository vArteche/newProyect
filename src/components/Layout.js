import ItemListContainer from "./ItemListContainer";
import NavBar from "./navBar/NavBar";
import {Outlet} from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";

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