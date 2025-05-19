
import { useState, useEffect } from "react"; 
import ProductoFormulario from "./assets/components/Formulario"

import BuscarProductos from "./assets/components/buscarProductos"
import ListarProducto from "./assets/components/ProductList"
import '../src/assets/css/principal.css'

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

  const nuevoProductos = (nuevo) => {
    setProductos(nuevo);
  }
  return (
    <div className="container-principal">
      <div className="container-formulario">
      <h1>Lista De Productos</h1>
      <ProductoFormulario onAgregar={agregarProducto} 
      onEditar={editarProducto} 
      productoEditando={productoEditando}/>
      <ListarProducto productos={productos} />
      </div>
      <div className="container-buscar">
        <h1>Buscar Productos</h1>
        <BuscarProductos productos={productos} onEditarSeleccion={seleccionarProductoParaEditar} nprod={nuevoProductos}/>
      </div>
    </div>
  )
}

export default App;
