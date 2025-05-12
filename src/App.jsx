
import { useState, useEffect } from "react"; 
import ProductoFormulario from "./assets/components/Formulario"

import BuscarProductos from "./assets/components/buscarProductos"

function App() {

const [productos, setProductos] = useState([]);

  const agregarProducto = (producto) => {
    setProductos([...productos, producto]);
  };

  //  Este efecto se ejecuta cada vez que cambia el array de productos
  useEffect(() => {
    console.log("🟢 Productos actualizados:", productos);
  }, [productos]);


  return (
    <div>
      <h1>Lista De Productos</h1>
      <ProductoFormulario onAgregar={agregarProducto} />
      <BuscarProductos productos={productos} />
    </div>
  )
}

export default App
