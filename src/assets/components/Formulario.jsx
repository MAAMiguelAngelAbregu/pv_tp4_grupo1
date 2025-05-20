
import React, { useState , useEffect } from 'react'
import '../css/formulario.css'


const ProductoFormulario = ({ onAgregar , onEditar , productoEditando}) => {
    const [nombre, setNombre] = useState('');
    const [marca, setMarca] = useState('');
    const [precioUnitario, setPrecioUnitario] = useState('');
    const [descuento, setDescuento] = useState('');
    const [stock, setStock] = useState('');
    const [id,setId] = useState(1);
    
    useEffect(() => {
        if (productoEditando) {
            setNombre(productoEditando.nombre);
            setMarca(productoEditando.marca);
            setPrecioUnitario(productoEditando.precioUnitario);
            setDescuento(productoEditando.descuento);
            setStock(productoEditando.stock);
        }
    }, [productoEditando]);


    const cargarDatos = (event) => {
        event.preventDefault(); 
        
    const descuentoDecimal = parseFloat(descuento) / 100 || 0;
    const precioConDescuento = parseFloat(precioUnitario) * (1 - descuentoDecimal);
    const stockEntero = parseInt(stock);

    const productoFinal = {
      id: productoEditando ? productoEditando.id : id,
      nombre,
      marca,
      precioUnitario: parseFloat(precioUnitario),
      descuento: parseFloat(descuento),
      precioConDescuento,
      stock: stockEntero,
      estado: true
    };

    if (productoEditando){ 
        onEditar(productoFinal);
    }
    else
    {
    onAgregar(productoFinal);
    setId(id+1)
    }
     // Limpiar campos
    setNombre('');
    setMarca('');
    setPrecioUnitario('');
    setDescuento('');
    setStock('');
  };
    
    return (
        <div className="formu-container">
        <form onSubmit={cargarDatos}>
            <input
                type="text"
                placeholder='Nombre del producto'
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder='Marca del producto'
                id="marca"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
                required
            />            
            <input
                type="number"
                placeholder='$$'
                id="precioUnitario"
                value={precioUnitario}
                onChange={(e) => setPrecioUnitario(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder='Porcentaje de descuento'
                id="descuento"
                value={descuento}
                onChange={(e) => setDescuento(e.target.value)}
            />
            <input
                type="number"
                placeholder='Stock disponible '
                id="stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                required
            />
            <button type="submit">
          {productoEditando ? "Guardar Cambios" : "Agregar Producto"}
        </button>
        </form>
        </div>
    );
};

export default ProductoFormulario;
