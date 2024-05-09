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

