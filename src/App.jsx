import BuscarProductos from "./assets/components/buscarProductos"
import SearchProductos from "./assets/components/buscarProductos"

function App() {
  return (
    <div>
      <h1>Hola a Todos</h1>
      <BuscarProductos productos={productos}/>{/* ACA EN PRODUCTOS DENTRO DE LAS LLAVES SE DEBE PONER EL NOMBRE DEL ARRAY DE PRODUCTOS */}
    </div>
  )
}

export default App
