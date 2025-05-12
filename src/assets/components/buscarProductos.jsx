
import { useState } from "react";

function BuscarProductos({productos})  //FUNCION RECIBE COMO PARAMETRO EL ARRAY DE PRODUCTOS
{
    const [buscarProd,setBuscarProd] = useState(''); //SE USA PARA GUARDAR CADA CAMBIO EN LA BUSQUEDA Y BUSCAR


    const filtrarProductos = productos.filter(p =>
        p.nombre.toLowerCase().includes(buscarProd.toLowerCase()) || p.descripcion.toLowerCase().includes(buscarProd.toLowerCase())
    );


    return(
        <>
        
        </>
    )
}

export default BuscarProductos;