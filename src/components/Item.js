
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount/ItemCount'
const Item = ({id, nombre, definicion,coleccion, img, stock}) =>{
    return(
        
        <div className="column is-4 producto">
            <div className="card-img">
                <img src={img} alt="imagen producto"></img>
            </div>
            <div className="descripcion">
                <p>{nombre}</p>
                <Link to ={`/productos/${id}`}>VER DETALLES</Link>
                <p>Stock disponible: {stock}</p>
            </div>
            <div className="card-content">
                <ItemCount/>
            </div>
        </div>
    )
};
export default Item;