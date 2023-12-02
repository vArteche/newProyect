import { useState , useEffect } from "react";
import Toastify from 'toastify-js';
import'./itemCount.css';

function AgregarProducto(){
    const [contador, setContador] = useState(0); 
    useEffect (()=>{
        // Toastify({

        //     text: "Agregado a tu compra!",
            
        //     duration: 3000
            
        //     }).showToast();
    },[contador])

    return(
        <div className="agregarProducto" >
            <button className="button" onClick={()=> setContador(contador-1)}>-</button>
            <p className="agregados">{contador}</p>
            <button id="comprar" className="button" onClick={()=> setContador(contador+1)}>+</button>
            
        </div>
    )
};

export default AgregarProducto;