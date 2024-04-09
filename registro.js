let nombre = document.getElementById("nombre")
let alertName = document.getElementById("alertName")

let apellido = document.getElementById("apellido")
let alertApellido = document.getElementById("alertApellido")

let correo = document.getElementById("correo")
let alertEmail = document.getElementById("alertCorreo")

let contraseña = document.getElementById("contraseña")
let alertContraseña = document.getElementById("alertContraseña")

let registrar = document.getElementById("registrar")


let formulario = document.querySelector("form")

const alertSuccess = document.getElementById("alertSuccess");

const administrador = {
    nombre:"douglas",
    apellido:"gonzalez",
    correo:"douglasgv0502@gmail.com",
    contraseña:"Douglas123$"
}
class Usuario{
    constructor(nombre,apellido,correo,contraseña){
        this.nombre= nombre;
        this.apellido=apellido;
        this.correo=correo;
        this.contraseña=contraseña;
    }
}
let usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios"));


let instanciasUsuario = []

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
const regexp_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/;
const mensajeExito = () => {
    alertSuccess.classList.remove("hidden");
    alertSuccess.textContent = "Registro Exitoso";
};

const mensajeError = (errores) => {
    errores.forEach((item) => {
        item.tipo.classList.remove("hidden");
        item.tipo.textContent = item.msg;
    });
};
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    alertSuccess.classList.add("hidden");
    const errores = [];
    // Validar nombre
    if (!regUserName.test(nombre.value) || !nombre.value.trim()) {
        errores.push({
            tipo: alertName,
            msg: "Formato no válido para el campo nombre. Solo se permiten letras.",
        });
    } else {
        alertName.classList.add("hidden");
    }
    // Validar apellido
    if (!regUserName.test(apellido.value) || !apellido.value.trim()) {
        errores.push({
            tipo: alertApellido,
            msg: "Formato no válido para el campo apellido. Solo se permiten letras.",
        });
    } else {
        alertApellido.classList.add("hidden");
    }
    // Validar correo
    if (!regUserEmail.test(correo.value) || !correo.value.trim()) {
        errores.push({
            tipo: alertEmail,
            msg: "Formato no válido para el correo electrónico.",
        });
    } else {
        alertEmail.classList.add("hidden");
    }
    // Validar contraseña
    if (!regexp_password.test(contraseña.value)) {
        errores.push({
            tipo: alertContraseña,
            msg: "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial ($@$!%*?&). Debe tener entre 8 y 15 caracteres.",
        });
    } else {
        alertContraseña.classList.add("hidden");
    }
    if (errores.length === 0) {
        // Crear instancia de usuario
        const nuevoUsuario = new Usuario(
            nombre.value,
            apellido.value,
            correo.value,
            contraseña.value
        );
        // Agregar al arreglo de instancias
        if(usuariosRegistrados != null){
                instanciasUsuario.push(nuevoUsuario);
            const instanciasUsuarios = [...instanciasUsuario, ...usuariosRegistrados];
            // Guardar en LocalStorage
            localStorage.setItem("usuarios", JSON.stringify(instanciasUsuarios));
            mensajeExito();
            
        }else{
            instanciasUsuario.push(nuevoUsuario);
            localStorage.setItem("usuarios",JSON.stringify(instanciasUsuario))
            mensajeExito();
        }

    } else {
        // mensaje de error
        mensajeError(errores);
    }
});