/**
 * Subir todo el trabajo en un branch nuevo y pushearlo a un repo en GitHub
 * 
 * 1) Hacer una etiqueta <a> en HTMl
 * 2) Agarrarla con JS
 * 3) Asignarle un evento de "click"
 * 4) El callback del click tiene que poder crear un elemento <p> y dos <button>, todo adentro de un <div> (Se crean con JS)
 * 5) El <p> tiene que decir "Esta seguro que quiere abandonar la página" y los botones "aceptar" y "cancelar", respectivamente
 * 6) Si se hace click en aceptar , se tiene que redirigir al usuario al href del <a>
 * 7) Si se hace click en cancelar, se tiene que borrar el mensaje 
 * 
 */

var div = document.createElement("div")
var a = document.createElement("a");
var node = document.createTextNode("¡Ir a Google!");


// Etiqueta Script de vinculo a JS
var ref = document.querySelector('script');
// Agregar CSS a la etiqueta "a"
// Dato random: No es posible aplicar reglas de CSS para editar confirm() o alert() 
// por medio del DOM ya que forman parte del navegador.
var style = document.createElement('style');
style.innerHTML =
'a {' +
'color: darkslategray;' +
'font-size: 30px;' +
'}';

// Se inserta antes que el script
ref.parentNode.insertBefore(style,ref);


// Atributo a la etiqueta
a.setAttribute('href', "http://google.com");
// Insercion al DOM
a.appendChild(node);
div.appendChild(a)
document.body.appendChild(div)


// Evento click de confirmacion
a.addEventListener("click", () => {
    if (!window.confirm("¿Esta seguro que quiere abandonar la página?")) {
        event.preventDefault()
    }
})





