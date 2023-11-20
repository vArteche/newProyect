import CartWidget from './CartWidget';
import "bulma/css/bulma.css";

function NavBarItem(){
    return(
        <ul className='navbar-end is-align-content-end'>
        <li className='navbar-item'><a href='https://www.google.com.ar/' target='blank' className='navbar-item'>HOME</a></li>
        <li className='navbar-item'><a href='https://www.google.com.ar/' target='blank' className='navbar-item'>SOBRE NOSOTROS</a></li>
        <li className='navbar-item'><a href='https://www.google.com.ar/' target='blank' className='navbar-item'>PRODUCTOS</a></li>
        <li className='navbar-item'><CartWidget/></li>
    </ul>
    )
};

export default NavBarItem;