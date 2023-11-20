import lagoNess from '../assets/img/lagoness.jpg'

import ItemCount from './ItemCount/ItemCount'
import productos from './productos';


function Item ({item}){
    return(
        <div className="container">
        <div className="column is-4">
            <div className="card-img">
                <img src={lagoNess} alt="mounstro del lago ness"></img>
            </div>
            <div className="card-header-title is-centered">
                <span>
                    –  – 
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