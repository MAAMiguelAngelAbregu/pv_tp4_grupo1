import React from "react";
function productoItem({producto, onEditarSeleccion }){
    return(
        <li>
            {producto.nombre} - {producto.marca} -
            ${producto.precioConDescuento.toFixed(2)} - stock: {producto.stock}
            <button onClick={() => onEditarSeleccion(producto)} className="boton-chico">
                Modificar 
            </button>

        </li>
        
    );
}
export default productoItem;