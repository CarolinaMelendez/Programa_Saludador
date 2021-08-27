const form = document.querySelector("#saludador-form");
const nombre = document.querySelector("#nombre-input");
const edad = document.querySelector("#edad-input");

form.addEventListener("submit",(event)=>{
    alert("Hola  " + nombre.value )
} );