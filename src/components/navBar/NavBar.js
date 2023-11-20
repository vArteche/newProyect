//pendientes en el archivo: resolver ruta del logo

//componentes
import NavBarItem from '../NavBarItem';
// import logo from '.../assets/loguito.jpg';
//estilos
import "bulma/css/bulma.css";
import './navBar.css';


function NavBar (){
    return(
        <>
            <div className='navbar-brand'>
                <div className='navbar-start'>
                    <img src={''} alt="logoNeca"></img>
                </div>
                <div>
                    <NavBarItem/>
                </div>
            </div>  
        </>
    );
};

export default NavBar;