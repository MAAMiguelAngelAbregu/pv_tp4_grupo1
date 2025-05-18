
import { useState, useMemo } from "react";

function BuscarProductos({productos, onEditarSeleccion})  //FUNCION RECIBE COMO PARAMETRO EL ARRAY DE PRODUCTOS
{
    const [buscarProd,setBuscarProd] = useState(''); //SE USA PARA GUARDAR CADA CAMBIO EN LA BUSQUEDA Y BUSCAR

    const filtrarProductos = useMemo(() => {
    return productos.filter(p =>
        p.nombre.toLowerCase().includes(buscarProd.toLowerCase()) || p.descripcion.toLowerCase().includes(buscarProd.toLowerCase())
    );
    }, [productos, buscarProd]);

    return(
         <div>
      <input
        type="text"
        placeholder="Buscar por nombre o marca"
        value={buscarProd}
        onChange={(e) => setBuscarProd(e.target.value)}
      />
      <ul>
        {filtrarProductos.map(producto => (
          <li key={producto.id}>
            {producto.nombre} - {producto.marca} - ${producto.precioConDescuento.toFixed(2)} - Stock: {producto.stock}
            <button onClick={() => onEditarSeleccion(producto)} className="boton-chico"
              >Editar Producto</button>
          </li>
        ))}
      </ul>
    </div>
    );
}

export default BuscarProductos;