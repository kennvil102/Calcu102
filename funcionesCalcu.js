/* Primeros creamos las variables pantalla y botonsito*/ 

/*Queryselector selecciona al primer elemento del dom que tiene la clase .display
QuerySelectorAll selecciona a todos los elementos del dom con la clase .btn */  
let pantalla=document.querySelector(".display")
let botonsito=document.querySelectorAll(".btn")

botonsito.forEach(boton=> {
boton.addEventListener('click', ()=>{
let botonApretado = boton.textContent;

if (boton.id === "C") {
    pantalla.textContent ="0";
    return;    
}

if (boton.id ==="delet") {
    if (pantalla.textContent.length===1) {
        pantalla.textContent="0";
        
    } else{
    pantalla.textContent=pantalla.textContent.slice(0,-1)
    
}
return;
    
}

if (boton.id ==="igual") {
    pantalla.textContent=eval(pantalla.textContent)
    return;
    
}
if (pantalla.textContent === "0"){
pantalla.textContent= botonApretado;

}else{
pantalla.textContent+= botonApretado;
}

})


})


function Calcular() {
    /*Primero hacemos las variables para obtener los datos caja1,caja2
    agregamos .value para obtener el valor que digite el usuario 
    */ 
    
    let totalDeCompra = document.getElementById("caja1").value;
    let porcentajePropina = document.getElementById("caja2").value;


    /* Luego hacemos las variables para sacar el porcentaje
     que es el totalDeCompra por el porcentaje divido entre 100
    */
    let porcentaje = porcentajePropina / 100;
    let resultado1 = totalDeCompra * porcentaje;
    document.getElementById('resultad1').innerHTML = resultado1
    }

    

