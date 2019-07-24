function comenzar() {
    var boton = document.getElementById("grabar");

    boton.addEventListener("click", itemNuevo, false);
}

function itemNuevo() {
    var clave = document.getElementById("clave").value;
    var valor = document.getElementById("valor").value;

    localStorage.setItem(clave, valor);
    //localStorage[clave] = valor; // hace lo mismo q la de arriba
    leer_mostrar(clave);
    var clave = document.getElementById("clave").value = "";
    var valor = document.getElementById("valor").value = "";
}

function leer_mostrar(clave) {
    var zonadatos = document.getElementById("zonadatos");
    //var elvalor = localStorage.getItem(clave);
    //var elvalor = localStorage[clave]; // lo mismo q la de arriba

    zonadatos.innerHTML = '<div><button onclick="elimninarTodo()">Eliminar Todo</button></div>'
        //zonadatos.innerHTML = "";

    for (i = 0; i < localStorage.length; i++) {
        var clave = localStorage.key(i);
        var elvalor = localStorage.getItem(clave);

        zonadatos.innerHTML += '<div>Clave: ' + clave + '  --  ' + 'Valor: ' + elvalor + '<br><button onclick="eliminarItem(\'' + clave + '\')">Eliminar</button>  </div>';
    }
}

function elimninarTodo() {
    if (confirm("Estás seguro?")) {
        localStorage.clear();
        leer_mostrar();
    }

}

function eliminarItem(clave) {

    if (confirm("Estás seguro de borrar: " + clave)) {
        localStorage.removeItem(clave);
    }
    leer_mostrar();
}

window.addEventListener("load", comenzar, false);