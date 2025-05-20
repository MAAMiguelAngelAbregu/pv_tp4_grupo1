import { useState } from "react";
import ProductoItem from "./productoItem";

function ListarProducto({ productos }) { 
  const [mostrarLista, setMostrarLista] = useState(false);

//esta funcion cambia el estado para que la lista se muestre
  const handleMostrar = () => {
    setMostrarLista(true);
  };

// esta funcion cambia el estado para que la lista se oculte
  const handleOcultar = () => {
    setMostrarLista(false);
  };
//si la lista de productos no tiene objetos returna lista vacia como mensaje
  if (productos.length === 0) {
    return (
    <div>
        <p>lista  vacía</p>
    </div>
    );
  } else {   // si la lista de productos tiene objetos returna 
    return (
      <div>
        {!mostrarLista && (
          <button onClick={handleMostrar}>Mostrar lista</button>
        )}
        {mostrarLista && (
          <button onClick={handleOcultar}>Ocultar lista</button>
        )}
        {mostrarLista && (
          <ul>
            {productos.map((p) => p.estado === true ? (<li><ProductoItem producto={p}/></li>) : '')}
          </ul>
        )}
      </div>
    );
  }
}
           
export default ListarProducto;