//pendientes en el archivo: resolver ruta del logo

//componentes
import NavBarItem from '../NavBarItem';
import logoNeca from './loguito.jpg'
//estilos
import "bulma/css/bulma.css";
import './navBar.css';


function NavBar (){
    return(
        <>
            <div className='navbar-brand'>
                <div className='navbar-start'>
                    <img src={logoNeca} alt="logoNeca"></img>
                </div>
                <div>
                    <NavBarItem/>
                </div>
            </div>  
        </>
    );
};

export default NavBar;