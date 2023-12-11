
import { Link } from 'react-router-dom';

const Item = ({id, nombre, definicion,coleccion, img, stock}) =>{
    return(
        
        <div className="producto">
            <div className="card-img">
                <img src={img} alt="imagen producto"></img>
            </div>
            <div className="descripcion">
                <p>{nombre}</p>
                <Link to ={`/productos/${id}`} className='masInfo'>VER DETALLES</Link>
                <p>Stock disponible: {stock}</p>
            </div>
            <div className="card-content">
            </div>
        </div>
    )
};
export default Item;