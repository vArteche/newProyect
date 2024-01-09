import logoNeca from './loguito.jpg';
import "bulma/css/bulma.css";
import './navBar.css';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { BsFillBagHeartFill } from 'react-icons/bs';
import CartWidget from '../Cart/CartWidget';

function NavBar() {
  const { getTotalItems } = useContext(CartContext);

  return (
    <>
      <div className='navbar-brand'>
        <div className='navbar-start'>
          <picture>
            <Link to="/">
              <img src={logoNeca} alt="logoNeca"></img>
            </Link>
          </picture>
        </div>
        <div className='navbar-end navbar-menu'>
          <nav>
            <NavLink to="/productos">TODOS LOS PRODUCTOS</NavLink>
            <NavLink to={'/categoria/terror'}>TERROR</NavLink>
            <NavLink to={'/categoria/oldToons'}>OLD TOONS</NavLink>
            <NavLink to={'/categoria/series'}>SERIES</NavLink>
            <NavLink to={'/cart'}>
              <BsFillBagHeartFill />
              <span className="cart-quantity">{getTotalItems()}</span>
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
}

export default NavBar;
