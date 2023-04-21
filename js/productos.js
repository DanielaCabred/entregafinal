const productos = [
{
    id: 1,
    nombre: "CEPILLO TRIXIE TAPICERIA Y TEXTILES", 
    precio: 2300, 
    imagen:"cepillo-trixie.png",
},
{
    id: 2, 
    nombre: "SILBATO CLICKER TRIXIE", 
    precio:2100, 
    imagen:"silvato-clicker-trixie.png",
},
{
    id: 3, nombre: "BEBEDERO DE VIAJE TRIXIE", 
    precio: 2156, 
    imagen:"bebedero-viaje-trixie.png", 
},
{
    id: 4, 
    nombre: "CORTAUÑAS TRIXIE GUILLOTINA", 
    precio: 2600, imagen:"cortauñas-trixie.png",
},
{
    id: 5, nombre: "CAMPANA PARA SNACKS TRIXIE", 
    precio: 5100, 
    imagen:"campana-snack-trixie.png",
},
{
    id: 6, nombre: "COLCHONETA SENIOR JACK ANKARA", 
    precio: 4999, 
    imagen:"colchoneta-seniorjack-ankara.png", 
},
{
    id: 7, nombre: "RASCADOR TRIXIE QUESO",
    precio: 6579, imagen:"rascador-queso-trixie.png",
},
{
    id: 8, nombre: "CINTURON DE SEGURIDAD HUND", 
    precio: 3517, 
    imagen:"cinturon-seguridad-hund.png",
},
{
    id: 9, nombre: "CARRITO COCOONING TRAVOIS",  
    precio: 103760, 
    imagen:"carrito-cocooning-travois.png",},
];


let main = document.querySelector('.contenedor');

function crearProductos(){

productos.forEach((item)=>{
main.innerHTML +=`
<div class="card text-center">
<img src="${"img/" + item.imagen}" alt="${item.nombre}" class="card-img-top"
/>
<div class="card-body">
<p class="card-text">${item.nombre}</p>
<p class="card-text">$${item.precio}</p>
<p><button class="btn btn-warning" onclick ="agregarAlCarrito(${item.id});" title="Agregar Producto">Agregar</button>
</div>
</div>`;



})}
crearProductos ()

function guardarProductos (productos){
    localStorage.setItem("productos", JSON.stringify (productos));
}
function cargarProductos (){
    return JSON.parse(localStorage.getItem("productos")) || [];
}

guardarProductos(productos);
botonCarrito();