let iniciar = document.getElementById("iniciar")
let correoIniciar = document.getElementById("correoIniciar")
let contraseñaIniciar = document.getElementById("contraseñaIniciar")
let formularioIniciar = document.getElementById("formularioIniciar")
let sesionIniciada = 0
let templateSesion = document.getElementById("templateSesion")
let ux = document.getElementById("ux")
let inicioUsuario = document.getElementById("inicioUsuario")
let registroSalir = document.getElementById("registroSalir")

const admin = JSON.parse(localStorage.getItem("administrador"))
const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios"));

console.log(admin.correo)

const administrador = {
    nombre:"douglas",
    apellido:"gonzalez",
    correo:"douglasgv0502@gmail.com",
    contraseña:"Douglas123$"
}
localStorage.setItem("administrador", JSON.stringify(administrador))



const inicioCorrecto = () => {

    if(admin.correo == correoIniciar.value && admin.contraseña == contraseñaIniciar.value){
        alert("Has inicado sesion como administrador")
            localStorage.setItem("nombreUsuario", admin.nombre )
            localStorage.setItem("administraMenu", JSON.stringify(admin))
        
            inicioUsuario.textContent=""
            registroSalir.textContent=""
            const clone = templateSesion.content.cloneNode(true)
            clone.getElementById("user").textContent = admin.nombre
            ux.appendChild(clone)
            window.location.href = "./menu.html"
    }else{
        const indice = usuariosGuardados.findIndex(usuario => usuario.correo === correoIniciar.value);
        if (indice !== -1) {
            if (usuariosGuardados[indice].contraseña === contraseñaIniciar.value) {
                alert("Inicio de sesión exitoso. ¡Bienvenido!");
                
                localStorage.setItem("nombreUsuario", usuariosGuardados[indice].nombre )
                localStorage.setItem("usuarioActual", JSON.stringify(usuariosGuardados[indice]))
                    inicioUsuario.textContent=""
                    registroSalir.textContent=""
                    const clone = templateSesion.content.cloneNode(true)
                    clone.getElementById("user").textContent = usuariosGuardados[indice].nombre
                    ux.appendChild(clone)
                    console.log(usuariosGuardados[indice].nombre)
                    window.location.href = "./menu.html"
                
            }else {
                alert("Contraseña incorrecta. Inténtalo de nuevo.");
            }
        
        }else {
            alert("Usuario no encontrado. Regístrate o verifica tu correo.");

    }}
};

formularioIniciar.addEventListener("submit", (e) => {
    e.preventDefault();
    inicioCorrecto();
});




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