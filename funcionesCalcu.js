//Primeros creamos las variables  y obtenemos los elementos  pantalla y botonsito

/*Queryselector selecciona al primer elemento del dom que tiene la clase .display
QuerySelectorAll selecciona a todos los elementos del dom con la clase .btn */  
let pantalla=document.querySelector(".display")
let botonsito=document.querySelectorAll(".btn")

/* La variable Botonsito contiene todos  los botones, le aplicamos el metodo foreach
para que a cada boton  se le agregue el evento click y con textconten que al darle click
al boton extraiga el contenido de dicho boton*/
botonsito.forEach(boton=> {
boton.addEventListener('click', ()=>{
let botonApretado = boton.textContent;
/*Hacemos una validacion si presionamos el boton C el contenido 
de la pantalla va ser 0*/
if (boton.id === "C") {
    pantalla.textContent ="0";
    return; 
}
/* si presionamos el boton delet  la flechita <--
y el contenido de la pantalla contiene 1 caracter
se va volver cero, si no con el metodo slice va extraer o cortar parte
de la cadena de caracteres desde el indice (0,-1) con el menos recorta de atras
hacia adelante
*/
if (boton.id ==="delet") {
    if (pantalla.textContent.length===1) {
        pantalla.textContent="0";
        
    } else{
    pantalla.textContent=pantalla.textContent.slice(0,-1)
    
}
return;
    
}
/*Si presionamos el boton igual,
al contenido de la pantalla le aplicamos eval que convierte una cadena texto 
y la convierte en una expresion matematica ej "8+8=16" */
if (boton.id ==="igual") {
    pantalla.textContent=eval(pantalla.textContent)
    return;
    
}
/*si el contenido de pantalla es igual a cero 
el contenido de pantalla sera remplazado por el boton que sea presionado
y si no es iguall cero ej es 8 con el += se le agregar otro valor o contenido
al ser presionado el boton*/
if (pantalla.textContent === "0"){
pantalla.textContent= botonApretado;

}else{
pantalla.textContent+= botonApretado;
}

})


})


function Calcular() {
    /*Primero hacemos una funcion luego creamos las variables para obtener los datos caja1,caja2
    agregamos .value para obtener el valor que digite el usuario 
    */ 
    
    let totalDeCompra = document.getElementById("caja1").value;
    let porcentajePropina = document.getElementById("caja2").value;


    /* Luego hacemos las variables para sacar el porcentaje
     que es el totalDeCompra por el porcentaje divido entre 100
    */
    let porcentaje = porcentajePropina / 100;
    let resultado1 = totalDeCompra * porcentaje;

     /*llamamos al elemento con el id resultado aplicamos
     innerhtml para modificar el contenido del elemento
     y pueda mostrar el valor del resultado1 */
    document.getElementById('resultad1').innerHTML = " El porcentaje es " + porcentaje +  " % " + " La cuenta es ₡" + totalDeCompra + " y el total con la propina incluida es ₡" + resultado1
    }

    

