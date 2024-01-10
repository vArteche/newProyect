
import { Link } from 'react-router-dom';

const Item = ({id, nombre, img, stock}) =>{
    return(
        
        <div className=" container">
            <div className='row producto'>
                <div className="col-6 card-img">
                    <img src={img} alt="imagen producto" className='img-fluid'></img>
                </div>
                <div className="col-6 descripcion">
                    <p>{nombre}</p>
                    <Link to ={`/productos/${id}`} className='masInfo'>VER DETALLES</Link>
                    <p>Stock disponible: {stock}</p>
                </div>
            </div>

        </div>
    )
};
export default Item;