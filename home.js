let menu = document.getElementById("menu")
let nav = document.querySelector("nav")


menu.addEventListener("click", ()=>{
    nav.classList.toggle("hidden")
    nav.classList.toggle("flex")
    nav.classList.toggle("flex-col")
    nav.classList.toggle("absolute")
    nav.classList.toggle("top-0")
    nav.classList.toggle("right-0")
    nav.classList.toggle("mt-12")
    
})


const nombreUsuario = localStorage.getItem("nombreUsuario")
if(nombreUsuario !=null){
        inicioUsuario.textContent=""
        registroSalir.textContent=""
        const clone = templateSesion.content.cloneNode(true)
        clone.getElementById("user").textContent = nombreUsuario
        ux.appendChild(clone)
        
}
document.addEventListener('click', (e) =>{
    
    if(e.target.matches("#salir")){
        console.log("salimos")
        localStorage.removeItem("nombreUsuario")
        localStorage.removeItem("usuarioActual")
        localStorage.removeItem("administraMenu")
        
    }
})

