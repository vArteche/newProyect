import "bulma/css/bulma.css";
import './itemListContainer.css';
import { useState, useEffect } from "react";
import { obtenerItemCat, obtenerItems } from '../components/productos';
import ItemLister from '../components/ItemLister';
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const {productoCat} = useParams();


    useEffect(()=>{
        //conexion a base de datos
        const db = getFirestore();
        const productCollection = collection(db, "productos");
        
        getDocs(productCollection).then(snapshot =>{
                setProductos(snapshot.docs.map(doc=>({id:doc.id, ...doc.data()})))
                setCargando(false)
            })
        },[])
        //filtrar x categoria
        // useEffect(()=>{
        //     const db = getFirestore();
        //     const q = query(
        //         collection(db, "productos"),
        //         where("categoria", "===", {productoCat} )
        //     );
        //     getDocs(q).then((snapshot)=>{
        //         if(snapshot.size === 0){
        //             console.log("no results");
        //         }
        //         setProductos(snapshot.docs.map((doc)=>({id:doc.id, ...doc.data()})));
        //     });
        // },[])

    if (cargando) {
        return <p>Cargando productos...</p>;
    }

    return (
        <div className="card-section">
            {productos.length > 0 ? (
                <ItemLister productos={productos} />
            ) : (
                <p>No se encontraron productos.</p>
            )}
        </div>
    );
};

export default ItemListContainer;
