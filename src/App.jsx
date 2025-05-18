
import { useState, useEffect } from "react"; 
import ProductoFormulario from "./assets/components/Formulario"

import BuscarProductos from "./assets/components/buscarProductos"
import ListarProducto from "./assets/components/ProductList"

function App() {

const [productoEditando, setProductoEditando] = useState(null);

const editarProducto = (productoActualizado) => {
  setProductos(productos.map(p => 
    p.id === productoActualizado.id ? productoActualizado : p
  ));
  setProductoEditando(null); // limpiar el modo edición
};

const seleccionarProductoParaEditar = (producto) => {
  setProductoEditando(producto);
};



const [productos, setProductos] = useState([]);

  const agregarProducto = (producto) => {
    setProductos([...productos, producto]);
  };

  //  Este efecto se ejecuta cada vez que cambia el array de productos
  useEffect(() => {
    console.log(" Productos actualizados:", productos);
  }, [productos]);


  return (
    <div>
      <h1>Lista De Productos</h1>
      <ProductoFormulario onAgregar={agregarProducto} 
      onEditar={editarProducto} 
      productoEditando={productoEditando}/>
      <ListarProducto productos={productos} />
      <BuscarProductos productos={productos} 
      onEditarSeleccion={seleccionarProductoParaEditar}/>
    </div>
  )
}

export default App;
