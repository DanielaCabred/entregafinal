function realizarPago(e){
    e.preventDefault();


    const nombreTarjeta = document.getElementById("nombreTarjetaInput").value;
    if (!isNaN(nombreTarjeta)) {
        alert("Dato inválido");
        return;
    } else {
        // Continuar con el proceso de pago
    }


    const numeroTarjeta = document.getElementById("card-numberInput").value;
    if (numeroTarjeta.length !== 16 || isNaN(parseInt(numeroTarjeta))) {
        alert("Número de tarjeta inválido");
        return;
    } else {
        // Continuar con el proceso de pago
    }


    const mes = document.getElementById("expiration-date-mesInput").value;
    const anio = document.getElementById("expiration-date-anioInput").value;
    
    
    const fechaActual = new Date();
    const mesActual = fechaActual.getMonth() + 1; 
    const anioActual = fechaActual.getFullYear();
    
    
    if (anio < anioActual || (anio == anioActual && mes < mesActual)) {
        alert("Tarjeta vencida");
        return;
    } else {
        // Continuar con el proceso de pago
    }


    const codigoTarjeta = document.getElementById("CVVInput").value;
    if (codigoTarjeta.length !== 3 || isNaN(parseInt(codigoTarjeta))) {
        alert("Código incorrecto");
    
        return;
    } else {   
        
        // Continuar con el proceso de pago
    }
    pagoExitoso();
};



let form = document.getElementById("form-pago");

function pagoExitoso(){
    Swal.fire({
        title: 'Pago Exitoso',
        text: '',
        icon: 'success',
    }).then(() => {
        form.reset(); 
    });
}


document.getElementById("boton-pago").addEventListener("click",realizarPago);