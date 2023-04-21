function guardarProductosSeleccionados(productos){
    localStorage.setItem("carrito", JSON.stringify(productos));
}

function cargarProductosSeleccionados (){
    return JSON.parse (localStorage.getItem ("carrito"))|| [];
}


function buscarProducto (id){
    const productos = cargarProductos()
    const producto = productos.find (item =>item.id ===id);
    console.log(producto);
    return producto;
}


function agregarAlCarrito (id){
    
    const carrito = cargarProductosSeleccionados(); 
    const producto = buscarProducto (id);
    carrito.push (producto);        

    guardarProductosSeleccionados(carrito);
    botonCarrito();
}

function productosCarrito (){
    const productos = cargarProductosSeleccionados ()
    return productos.length;
}

function totalGasto(){
    const productos = cargarProductosSeleccionados ();
    return productos.reduce((total,item) => total  += item.precio,0);
}



function botonCarrito() {
    document.getElementById("carrito").innerText = productosCarrito();
}


function vaciarCarrito (){
    localStorage.removeItem ("carrito")
    compraCarrito();
    botonCarrito();
}

function eliminarProducto(id){
    const carrito = cargarProductosSeleccionados()
    const productos = carrito.filter (item =>item.id !== id);
    guardarProductosSeleccionados (productos);
    compraCarrito();
    botonCarrito();
}
function enElCarrito(id){
const carrito = cargarProductosSeleccionados();
return carrito.some (item =>item.id !== id);
}
