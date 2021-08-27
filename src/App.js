const form = document.querySelector("#saludador-form");
const nombre = document.querySelector("#nombre-input");
const edad = document.querySelector("#edad-input");

form.addEventListener("submit",(event)=>{
    var edad_usuario = edad.value;
    if(edad_usuario < 15 ){
        alert("Hola  niñ@  " + nombre.value )
    }else if(edad_usuario < 30){
        alert("Hola joven  "+ nombre.value)
    }else {
        alert("Hola señor@  "+ nombre.value)       
    }
} );