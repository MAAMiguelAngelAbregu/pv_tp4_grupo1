// Archivo con la implementación inicial de la lógica de productos (Miguel Abregú).
// Se optimizó el manejo de productos en App.jsx utilizando una función diferente,
// lo que hace que este archivo sea redundante y candidato a eliminación.

const Productos = [];

const agregarProductos = (nombre,descripcion,precioUnitario,descuento,stock) => {
 if (nombre?.trim() !== "" && descripcion?.trim() !== "" && stock >= 0 && precioUnitario >= 0) {
  // en las siguentes lineas si se cumple la condicion del if se guardan en constantes los datos para posterior agregarlos al elemento nuevoProducto 
    const id =crypto.randomUUID();
    const descuentoDecimal = parseFloat(descuento) / 100 || 0;
    const precioConDescuento = parseFloat(precioUnitario) * (1 - descuentoDecimal);
    const stockEntero = parseInt(stock);
     //parseFloat y parseInt toma una cadena de texto como entrada e intenta convertirla a un número con decimales esto debido a que
     //cuando obtenemos valores de los elementos de un formulario HTML usando document.getElementById('elemento').value o al acceder al event.target.value en React.
    const nuevoProducto = {
     id : id,
     nombre : nombre,
     descripcion : descripcion,
     precioUnitario : parseFloat(precioUnitario),
     descuento : parseFloat(descuento),
     precioConDescuento : precioConDescuento,
     stock : stockEntero,
    }
    // en la siguiente linea se guarda el elemento nuevoProducto en el arreglo Productos
    Productos.push(nuevoProducto);
    console.log("Lista de productos actual:", Productos);

    }
    else{
        console.log("debe agregar todos los campos correspondientes");
    }
    };
   
 export {agregarProductos} ;

