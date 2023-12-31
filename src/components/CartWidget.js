//librerias
import { useContext } from 'react';
import {BsFillBagHeartFill} from 'react-icons/bs';
import { CartContext } from '../context/CartContext';

function CartWidget(){
    const {totalQuantity} = useContext(CartContext)
    return(
        <Link to="/cart" style={{display: totalQuantity> 0 ? 'block' : 'none'}}>
            <BsFillBagHeartFill>
                {totalQuantity}
            </BsFillBagHeartFill>
        </Link>
    )
;}
export default CartWidget;