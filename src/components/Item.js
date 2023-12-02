
import ItemCount from './ItemCount/ItemCount'

function Item ({props}){
    const {nombre, definicion, coleccion, img} = props;
    return(
        
        <div className="container">
        <div className="column is-4">
            <div className="card-img">
                <img src={img} alt="imagen producto"></img>
            </div>
            <div className="card-header-title is-centered">
                <span>
                 {nombre} – {definicion} – {coleccion}
                </span>
            </div>
            <div className="card-content">
                <p></p>
                <ItemCount/>
            </div>
        </div>
    </div>
    )
};
export default Item;