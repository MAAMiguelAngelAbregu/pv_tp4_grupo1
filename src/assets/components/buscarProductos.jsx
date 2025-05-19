import { useState } from "react";
import DeleteProductos from "./productDelete";

function BuscarProductos({productos, onEditarSeleccion,nprod})  //FUNCION RECIBE COMO PARAMETRO EL ARRAY DE PRODUCTOS
{
    const [buscarProd,setBuscarProd] = useState(''); //SE USA PARA GUARDAR CADA CAMBIO EN LA BUSQUEDA Y BUSCAR

    const filtrarProductos =  productos.filter(p =>
        p.nombre.toLowerCase().includes(buscarProd.toLowerCase()) || p.id === parseInt(buscarProd)
    );

    const nuevoprod = (nuevo)=>{
      nprod(nuevo);
    }

    return(
         <div className="container-buscar-secundario">
      <input
        type="text"
        placeholder="Buscar por nombre o id"
        value={buscarProd}
        onChange={(e) => setBuscarProd(e.target.value)}
      />
      <ul>
        {filtrarProductos.map(producto => producto.estado == true ? (
          <li key={producto.id}>
          Id: {producto.id} - Nombre: {producto.nombre} - Marca: {producto.marca} -
            Descuento: ${producto.precioConDescuento.toFixed(2)} - Stock: {producto.stock}
            <button onClick={() => onEditarSeleccion(producto)} className="boton-chico">Editar</button>
            <DeleteProductos pid={producto.id} productosArray={productos} nuevoproducto={nuevoprod} />
          </li>
        ) : '' )}
      </ul>
    </div>
    );
};

export default BuscarProductos;