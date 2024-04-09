
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




//reporte admin

let btnReportes =document.getElementById("btnReportes")
const reportesActuales =  JSON.parse(localStorage.getItem("pagosDetalle"));
let fragmentReporte =  document.createDocumentFragment()
let templateReportes = document.getElementById("templateReportes")
let numeroPedido = document.getElementById("numeroPedido")
let nombreTarjeta = document.getElementById("nombreTarjeta")
let numeroTarjeta = document.getElementById("numeroTarjeta")
let expiryTarjeta = document.getElementById("expiryTarjeta")
let cvvTarjeta = document.getElementById("cvvTarjeta")
let nombreUsuarioReporte = document.getElementById("nombreUsuarioReporte")
let correoUsuarioReporte = document.getElementById("correoUsuarioReporte")
let carritoReporte = document.getElementById("carritoReporte")
let totalReporte = document.getElementById("totalReporte")
let reportes = document.getElementById("reportes")




const mostrarReportes = (array) => {
    cuerpo.classList.remove("flex")
    cuerpo.classList.add("hidden")
    let numReporte = 1
    reportes.textContent = "";
    reportesActuales.forEach((item) => {
        
        const cloneReportes = templateReportes.content.cloneNode(true);
        cloneReportes.getElementById("numeroPedido").textContent = (numReporte);
        cloneReportes.getElementById("nombreTarjeta").textContent = item.fullname;
        cloneReportes.getElementById("numeroTarjeta").textContent = item.numeroTarjeta;
        cloneReportes.getElementById("expiryTarjeta").textContent = item.expiry;
        cloneReportes.getElementById("cvvTarjeta").textContent = item.CVV;
        cloneReportes.getElementById("nombreUsuarioReporte").textContent = item.usuarioIniciado;
        cloneReportes.getElementById("correoUsuarioReporte").textContent = item.correoUsuario;
        cloneReportes.getElementById("carritoReporte").textContent = JSON.stringify(item.carroPagar);
        cloneReportes.getElementById("totalReporte").textContent = item.totalPagar;
        fragmentReporte.appendChild(cloneReportes);
        numReporte++
    });
    reportes.appendChild(fragmentReporte);
};






const nombreUsuario = localStorage.getItem("nombreUsuario")
const adminUsuario = localStorage.getItem("administraMenu")
//DOM

let carrito = document.getElementById("carrito")
let footer = document.getElementById("footer")
let templateCarrito = document.getElementById("templateCarrito")
let templateFooter = document.getElementById("templateFooter")
let total = document.getElementById("total")
let cuerpo = document.getElementById("cuerpo")
let tarjeta = document.getElementById("tarjeta")
const fragment = document.createDocumentFragment()
const fragmentTotal = document.createDocumentFragment()


//Imputs Tarjeta

let fullName = document.getElementById("fullName")
let cardNumber = document.getElementById("cardNumber")
let expiryDate = document.getElementById("expiryDate")
let cvv = document.getElementById("cvv")


let procesarPago = document.getElementById("procesarPago")
// correo del usuario iniciado





class Pagar{
    constructor(fullname,numeroTarjeta,expiry,CVV,usuarioIniciado,correoUsuario,carroPagar,totalPagar){
        this.fullname= fullname;
        this.numeroTarjeta=numeroTarjeta;
        this.expiry=expiry;
        this.CVV=CVV;
        this.usuarioIniciado=usuarioIniciado;
        this.correoUsuario=correoUsuario;
        this.carroPagar=carroPagar;
        this.totalPagar=totalPagar;
    }
}
let pagosTodos = []


//Verificando Usuario actual

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




if(adminUsuario!=null){
    
    btnReportes.classList.remove("hidden")
    btnReportes.addEventListener("click", ()=>{
        console.log(reportesActuales)
        let i = 0
        console.log(reportesActuales[i].numeroTarjeta)
        mostrarReportes()
    })

}else if(nombreUsuario !=null){
    let usuarioActual =  JSON.parse(localStorage.getItem("usuarioActual"))
    let correoUsuarioActual = usuarioActual.correo

    //logica del carrito
    let calculoTotal = 0
    document.addEventListener('click', (e) =>{
        
    if(e.target.matches("section article div div button")){
        console.log("agregamos al carrito")
        agregarCarrito(e)
    }
    console.log(e.target.matches("#agregar"))
    if(e.target.matches("#agregar")){
        btnAumentar(e)
    }
    if(e.target.matches("#quitar")){
        btnQuitar(e)
    }
    //verificando total a pagar

    
    if(carro.length>0){
        calculoTotal = 0
        footer.classList.remove("hidden")
        for(let i = 0; i<carro.length;i++){
            calculoTotal = calculoTotal + (carro[i].cantidad * carro[i].precio)
            
        }
        total.textContent = calculoTotal
    }else{
        footer.classList.add("hidden")
    }
    //pago de tarjeta

    if(e.target.matches("#finalizar")){
        cuerpo.classList.add("hidden")
        tarjeta.classList.remove("hidden")
        tarjeta.classList.add("flex")
    }


})

let carro = []

const agregarCarrito = (e) =>{
    console.log(e.target.dataset.pollo)

    const producto = {
        titulo: e.target.dataset.pollo,
        cantidad:1,
        precio:+e.target.dataset.precio
    }
    let indice = carro.findIndex((item)=> item.titulo === producto.titulo)

    if(indice == -1){
        carro.push(producto)
    }else{
        carro[indice].cantidad++
        carro[indice].precio 
    }
    

    pintarCarrito(carro)
    console.log(carro)
}
const pintarCarrito = (array) =>{
    carrito.textContent = ""
    carro.forEach(item =>{
        const clone = templateCarrito.content.cloneNode(true)

        clone.getElementById("pollo").textContent = item.titulo 
        clone.getElementById("cantidad").textContent = item.cantidad
        clone.getElementById("precio").textContent = item.precio * item.cantidad

        clone.getElementById("agregar").dataset.id = item.titulo
        clone.getElementById("quitar").dataset.id = item.titulo
        fragment.appendChild(clone)

    })

    carrito.appendChild(fragment)
}

const btnAumentar = (e)=>{
    console.log("me diste click", e.target.dataset.id)
    carro = carro.map(item =>{
        if(item.titulo == e.target.dataset.id){
            item.cantidad++
        }
        return item
    })
    pintarCarrito()
}
const btnQuitar = (e)=>{
    console.log("me diste click", e.target.dataset.id)
    carro = carro.filter(item =>{
        if(item.titulo == e.target.dataset.id){
            if(item.cantidad>0){
                item.cantidad--
                if(item.cantidad == 0){
                    return 
                }  
            }else {return item}
            
        }
        return item
    })
    pintarCarrito()
}



// logica de proceso de pago
let pagosRegistrados = JSON.parse(localStorage.getItem("pagosDetalle"));

procesarPago.addEventListener("click", (e)=>{
    e.preventDefault();
    const nuevoPago = new Pagar(
        fullName.value,
        cardNumber.value,
        expiryDate.value,
        cvv.value,
        nombreUsuario,
        correoUsuarioActual,
        carro,
        calculoTotal
    );
    alert("Pago Exitoso")
      // Agregar al arreglo de instancias
    if(pagosRegistrados != null){
        pagosTodos.push(nuevoPago);
        const todosPagos = [...pagosTodos, ...pagosRegistrados];    
      // Guardar en LocalStorage
    localStorage.setItem('pagosDetalle', JSON.stringify(todosPagos));
    }else{
    pagosTodos.push(nuevoPago);

      // Guardar en LocalStorage
    localStorage.setItem('pagosDetalle', JSON.stringify(pagosTodos));
    }
    alert('Pago Exitoso');
})
}

