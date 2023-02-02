const form = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const clave = document.getElementById("clave");
const confirmacion = document.getElementById("confirmacion");
const errorNombre = document.getElementById("error-nombre");
const errorEmail = document.getElementById("error-email");
const errorClave = document.getElementById("error-clave");
const errorConfirmacion = document.getElementById("error-confirmacion");

form.addEventListener("submit", function(event) {
  event.preventDefault();

// VALIDACION NOMBRE
  if (nombre.value === "") {
    errorNombre.textContent = "Rellene este campo";
    errorNombre.style.display = "block";
    nombre.classList.add("invalid");
  } else {
    errorNombre.style.display = "none";
    nombre.classList.remove("invalid");
    nombre.classList.add("valid");
  }

// VALIDACION EMAIL
const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if (email.value === "") {errorEmail.textContent = "Rellene este campo";
errorEmail.style.display = "block";
email.classList.add("invalid");
} 
else if (!regexEmail.test(email.value)) {
errorEmail.textContent = "Email inválido";
errorEmail.style.display = "block";
email.classList.add("invalid");
} 
else {
errorEmail.style.display = "none";
email.classList.remove("invalid");
email.classList.add("valid");
}
// VALIDACION CONTRASEÑA
if (clave.value === "") {
errorClave.textContent = "Rellene este campo";
errorClave.style.display = "block";
clave.classList.add("invalid");
} 
else if (clave.value.length < 8) {
errorClave.textContent = "La contraseña debe tener al menos 8 caracteres";
errorClave.style.display = "block";
clave.classList.add("invalid");
} 
else {
errorClave.style.display = "none";
clave.classList.remove("invalid");
clave.classList.add("valid");
}
// VALIDACION CONFIRMACION
if (confirmacion.value === "") {
errorConfirmacion.textContent = "Rellene este campo";
errorConfirmacion.style.display = "block";
confirmacion.classList.add("invalid");
} 
else if (clave.value !== confirmacion.value) {
errorConfirmacion.textContent = "Las contraseñas no coinciden";
errorConfirmacion.style.display = "block";
confirmacion.classList.add("invalid");
} 
else {
errorConfirmacion.style.display = "none";
confirmacion.classList.remove("invalid");
confirmacion.classList.add("valid");
}
if(confirmacion.classList.value === "valid" && email.classList.value === "valid" && nombre.classList.value === "valid" && clave.classList.value === "valid")
{
  alert("La inscripción ha sido correcta");
  form.submit()
}
})

