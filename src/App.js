const form = document.querySelector("#saludador-form");
const nombre = document.querySelector("#nombre-input");
const edad = document.querySelector("#edad-input");
const genero = document.querySelector("#genero-input");

// COLUMNAS: 0-> mujer ; 1 -> Hombre -> ; 2 -> otro
// FILA: 0-> edad<15 ; 1 -> edad<30 -> ; 2 -> edad>29
const saludo_menor15 = ["niña ","niño ","  "];
const saludo_menor30 = ["señorita ","joven ","  "];
const saludo_mayor30 = ["señora ","señor ","  "];

const saludo_formalidad = [saludo_menor15,saludo_menor30,saludo_mayor30];

const saludo_horario = ["Buenos dias","Buenas tardes","Buenas noches"];

const saludo_completo = [saludo_horario,saludo_formalidad];

form.addEventListener("submit",(event)=>{
    var hoy = new Date();
    var indice_hora = 0;
    if( hoy.getHours()  > 12 && hoy.getHours()  < 18 ){
        indice_hora = 1;
    }else if( hoy.getHours()  > 18 ){
        indice_hora = 2;
    }


    var indice_genero = 0;
    if( genero.value == "Hombre"){
        indice_genero = 1;
    }else if( genero.value == "Otro"){
        indice_genero = 2;
    }

    var indice_edad = 0;
    if( edad.value > 14 && edad.value < 30){
        indice_edad = 1;
    }else if( edad.value > 29 ){
        indice_edad = 2;
    }
    
    alert(saludo_horario[indice_hora]+" "+ saludo_formalidad[indice_edad][indice_genero]+" "+nombre.value);
} );

