import { useState } from "react";

function BuscarProductos({productos})  //FUNCION RECIBE COMO PARAMETRO EL ARRAY DE PRODUCTOS
{
    const [buscarProd,setBuscarProd] = useState(''); //SE USA PARA GUARDAR CADA CAMBIO EN LA BUSQUEDA Y BUSCAR

    const filtrarProductos =  productos.filter(p =>
        p.nombre.toLowerCase().includes(buscarProd.toLowerCase()) || p.descripcion.toLowerCase().includes(buscarProd.toLowerCase())
    );

    return(
         <div>
      <input
        type="text"
        placeholder="Buscar por nombre o descripción"
        value={buscarProd}
        onChange={(e) => setBuscarProd(e.target.value)}
      />
      <ul>
        {filtrarProductos.map(producto => (
          <li key={producto.id}>
            {producto.nombre} - {producto.descripcion} - ${producto.precioConDescuento.toFixed(2)} - Stock: {producto.stock}
          </li>
        ))}
      </ul>
    </div>
    );
};

export default BuscarProductos;