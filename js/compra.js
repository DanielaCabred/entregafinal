function compraCarrito (){
    const productos = cargarProductosSeleccionados();
    let salida = "";

if (productosCarrito () > 0) {
    salida += `<table class="table">

<tr>
<td colspan = "4" class ="text-end"><button class="btn btn-warning" onclick = "vaciarCarrito()">Vaciar Carrito</button></td>
</tr>`


    for (producto of productos){
            salida += `<tr>
            <td><img src="${"img/" + producto.imagen}" alt="${producto.nombre}" width ="50"/></td>
            <td>${producto.nombre}</td>
            <td>$${producto.precio}</td>

            <td class="text-end"><button class="btn" onclick="eliminarProducto(${producto.id});"><a href = "#"> <img src="img/tacho.png" alt="eliminar producto" widht  ="15"><a/></button>
            </td>
            </tr>`;
        }

        salida += `<tr>
            <td colspan = "2">Total Compra </td>
            <td>$${totalGasto()}</td>
        </tr>`

        salida += `</table>`;

        } else {
                salida = `<div class="alert alert-warning text-center" role="alert">
                Tu carrito está vacio! <a href = "#"> <img src= "img/alert.png" alt="alerta" widht ="15"><a/> 
                </div>` 
                }
    document.getElementById ("productos").innerHTML= salida
}


compraCarrito (); 
botonCarrito();


function finalizarCompra(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
        title: '¿Deseas Continuar?',
        text: "",
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: '¡Si, ir a pagar!', 
        cancelButtonText: '¡No, seguir comprando!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "./pago.html";
    
        swalWithBootstrapButtons.fire(
            'Continuar',
            'Ir a pagar.',
            'success'
        )
        } else if (
        
        result.dismiss === Swal.DismissReason.cancel
        ) {

            window.location.href = "./index.html";
        swalWithBootstrapButtons.fire(
            'Cancelar',
            'Seguir comprando :)',
            'info'
        )
        }
    })
}

document.getElementById("boton-compra").addEventListener("click", finalizarCompra);


