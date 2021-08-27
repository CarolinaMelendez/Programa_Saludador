const form = document.querySelector("#saludador-form");
const nombre = document.querySelector("#nombre-input");
const edad = document.querySelector("#edad-input");
const genero = document.querySelector("#genero-input");

// FILA: 0-> mujer ; 1 -> Hombre -> ; 2 -> otro
// COLUMNA: 0-> edad<15 ; 1 -> edad<30 -> ; 2 -> edad>29
const saludo_menor15 = ["Hola niña","Hola niño","Hola"];
const saludo_menor30 = ["Hola señorita","Hola joven","Hola"];
const saludo_mayor30 = ["Buenas señora","Buenas señor","Buenas"];

form.addEventListener("submit",(event)=>{
    var indice_saludo = 0;
    if( genero.value == "Hombre"){
        indice_saludo = 1;
    }else if( genero.value == "Otro"){
        indice_saludo = 2;
    }
    

    if(edad.value < 15 ){
        alert(saludo_menor15[indice_saludo]+" " + nombre.value )
    }else if(edad.value < 30){
        alert(saludo_menor30[indice_saludo]+" "+ nombre.value)
    }else {
        alert(saludo_mayor30[indice_saludo]+" " + nombre.value)       
    }
} );

