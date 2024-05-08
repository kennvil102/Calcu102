let pantalla=document.querySelector(".display")
let botonsito=document.querySelectorAll(".btn")

botonsito.forEach(boton=> {
    boton.addEventListener('click', ()=>{
    const botonApretado = boton.textContent;
    
    if (pantalla.textContent==="0") {
        pantalla.textContent=botonApretado;
        
    }else{
        pantalla.textContent += botonApretado;

    }if (boton.id ==="c") {
        pantalla.value="0";
        

        
        
    }
    

    })

})




