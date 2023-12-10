import { useState } from "react";
import { obtenerItemCat } from "./productos";

const clasificacion =() =>{
    const [listado, setListado] = useState([]);
listado = obtenerItemCat()
}

export default clasificacion;