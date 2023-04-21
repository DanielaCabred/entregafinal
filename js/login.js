function mostrarError(campo) {
   Swal.fire({
   icon: 'error',
   title: 'Error!',
   text: 'Falta completar el Campo: ' + campo
   });
}

function registroExitoso(){
   Swal.fire({
      title: 'Registro Exitoso',
      text: '',
      icon: 'success',
   }).then(() => {
      form.reset(); 
   });
}



class User {
   constructor(nombre, mail, contraseña){
      this.nombre = nombre;
      this.mail = mail;
      this.contraseña = contraseña;
   }
}

let form = document.getElementById("form");
let inputNombre = document.getElementById("nombreInput");
let inputEmail = document.getElementById("emailInput");
let inputContraseña = document.getElementById("passwordInput");

let baseDeDatos = JSON.parse(localStorage.getItem("bd")) || []; 

document.getElementById("boton-registro").addEventListener("click", function(e) {
   e.preventDefault()
   if (inputNombre.value === "" || inputEmail.value === "" || inputContraseña.value === "") {
      mostrarError("nombre, email y contraseña son obligatorios"); 
   } else if (!inputEmail.value.includes('@')){
      mostrarError("Ingrese una dirección de correo electrónico válida");
   }
   else {
      let newUser = new User(inputNombre.value, inputEmail.value, inputContraseña.value);
      baseDeDatos.push(newUser); 
      localStorage.setItem("bd", JSON.stringify(baseDeDatos));
      registroExitoso();
   }

});



