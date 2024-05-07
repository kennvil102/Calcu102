let pantalla=document.querySelector(".display")
let botonsito=document.querySelectorAll(".btn")

botonsito.forEach(boton=> {
    boton.addEventListener('click', ()=>{
        console.log(boton.textContent)

    })

})