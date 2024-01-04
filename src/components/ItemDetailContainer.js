import React, { useEffect, useState } from "react";
import { obtenerItemId, obtenerItems} from "./productos"; 
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
import {doc, getDoc, getFirestore} from "firebase/firestore"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const [cargando, setCargando] = useState(true);
    const {id} = useParams();


    useEffect(() => {
        const db = getFirestore();
        const product = doc(db, "productos", "Ho4AUepZtyiXVIrHmwcx")
        getDoc(product).then(snapshot =>{
            if(snapshot.exists()){
                setProducto({id:snapshot.id, ...snapshot.data()})
                setCargando(false)
            }
        })
    },[]);

    if (cargando) {
        return <p>Cargando producto...</p>;
    }

    
    return (
        <div className="ItemDetail">
            {producto && <ItemDetail {...producto} />}
        </div>
    );
}

export default ItemDetailContainer;
