import React, { useState } from 'react';
import { agregarProductos } from "./productos"
import '../css/formulario.css'

const ProductoFormulario= () => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precioUnitario, setPrecioUnitario] = useState('');
    const [descuento, setDescuento] = useState(0);
    const [stock, setStock] = useState('');
    
    const cargarDatos = (event) => {
        event.preventDefault(); 
        agregarProductos(nombre, descripcion, precioUnitario, descuento, stock);

        setNombre('');
        setDescripcion('');
        setPrecioUnitario('');
        setDescuento(0);
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
                placeholder='Descripción del producto'
                id="descripcion"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
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
            <button type="submit">Agregar Producto</button>
        </form>
        </div>
    );
};

export default ProductoFormulario;
