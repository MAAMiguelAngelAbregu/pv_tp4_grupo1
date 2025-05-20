
const DeleteProductos = ({productosArray,pid,nuevoproducto}) => {

    const eliminarProducto = () =>{
        const nuevo = productosArray.map((p) => p.id === pid ? {...p,estado: false}:p);
        nuevoproducto(nuevo);
    }

    return(
        <>
        <div className="container-delete">
            <button onClick={eliminarProducto}>Eliminar</button>
        </div>
        </>
    )
}

export default DeleteProductos;