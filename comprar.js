const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("correo");
const mensaje = document.getElementById("warnings")
const form = document.getElementById("form");

form.addEventListener("click", e=>{
    e.preventDefault();
    let warnings= "";
    let entrar = false;
    let regexEmail= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
    mensaje.innerHTML="";
   
    if(nombre.value.length< 5){
        warnings += "No válido, por favor ingrese un nombre mayor de cinco letras <br>";
        entrar= true;
    }
  
    
    if(apellido.value.length< 4){

        warnings += "No válido, ingrese un apellido que contenga cinco letras ó más";
        entrar= true
    }

    if (regexEmail.test(correo.value)){
        warnings += "El correo ingresado no es válido";
        entrar = true;
    }
    if (entrar) {
        mensaje.innerHTML= warnings;
        
    }else{
        mensaje.innerHTML= "Ingreso correctamente"
    }
    
})
function seleccionar(){
    let cant= document.getElementById("cantidad").value;
    let categoria = document.getElementById("categoria").value;
    let descuento;
    let total;

    if (categoria=="Estudiante") {
        descuento = 0.20;
    }else if (categoria== "Trainee") {
        descuento = 0.50;
        
    } else {
        descuento = 0.85;
    }

    total= parseInt(200 * cant * descuento);

    document.getElementById("totalPagar").innerHTML= "Total a pagar: $" + total;
    console.log(total);
} 

const btnResumen = document.getElementById("resumen");
btnResumen.addEventListener("click", seleccionar);

const btnBorrar = document.getElementById("borrar");

btnBorrar.addEventListener("click", function(){
    document.querySelector("#nombre").value = "";
    document.querySelector("#apellido").value = "";
    document.querySelector("#correo").value = "";
    document.querySelector("#cantidad").value = "";
    document.querySelector("#categoria").value = "";
    document.querySelector("#totalPagar").textContent = "";
})
