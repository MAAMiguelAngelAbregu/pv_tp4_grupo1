
function ProductoItem({producto}){
    return(
        <li>
            Id: {producto.id} - Nombre: {producto.nombre} - Marca: {producto.marca} -
            Descuento: ${producto.precioConDescuento.toFixed(2)} - Stock: {producto.stock}
        </li>
        
    );
}
export default ProductoItem;