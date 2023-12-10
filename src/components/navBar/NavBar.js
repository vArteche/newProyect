
//componentes
import logoNeca from './loguito.jpg'
//estilos
import "bulma/css/bulma.css";
import './navBar.css';
import { Link, NavLink } from 'react-router-dom';


function NavBar (){
    return(
        <>
            <div className='navbar-brand'>
                <div className='navbar-start'>
                    <picture>
                        <Link to="/">
                            <img src={logoNeca} alt="logoNeca"></img>
                        </Link>
                    
                    </picture>
                </div>    
                <div className='navbar-end'>
                                        <nav>
                        <NavLink to="/productos">TODOS LOS PRODUCTOS</NavLink>
                        <NavLink to={'/categoria/terror'}>TERROR</NavLink>
                        <NavLink to={'/categoria/oldToons'}>OLD TOONS</NavLink>
                        <NavLink to={'/categoria/series'}>SERIES</NavLink>
                        
                    </nav>
                </div>

                
                </div>
        </>
    );
};

export default NavBar;