
import ItemCount from './ItemCount/ItemCount'

function Item ({nombre, definicion,coleccion, img}){
    return(
        
        <div className="column is-4 producto">
            <div className="card-img">
                <img src={img} alt="imagen producto"></img>
            </div>
            <div className="descripcion">
                <span>
                 {nombre} – {definicion} – {coleccion}
                </span>
            </div>
            <div className="card-content">
                <p></p>
                <ItemCount/>
            </div>
        </div>
    )
};
export default Item;