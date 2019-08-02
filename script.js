/*
        1- Agarrar todos los links
        2- recorrer todos los links y asignarles un evento de click. El callback de todos los links tiene que EL MISMO
        3 - Cancelar el default
        4 - Iniciar un pedido XHR al href del link que corresponda
        5 - Con la respuesta , modificar el contenido del <main> 
*/

function request(direccion) {
    var xhr = new XMLHttpRequest
    // Direccion AJAX dinamico
    xhr.open("GET", direccion, false)
    xhr.send()
    
    // Target content to main area
    document.getElementById('main').innerHTML = xhr.responseText
}


document.body.addEventListener("click", e => {
    if (e.target.classList.contains("links")) {
        e.preventDefault()
        
        // Clear main area
        document.getElementById("main").innerHTML = ""
        
        // Ejecuta funcion request para comandos AJAX
        request(e.target.href)
    }
})

