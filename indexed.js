var bd;

function iniciar() {
    zonadatos = document.getElementById("zonadatos");
    boton = document.getElementById("grabar");
    boton.addEventListener("click", agregoobjeto, false);

    var solicitud = indexedDB.open("mibase");

    solicitud.onsuccess = function(e) {
        bd = e.target.result;
    }

    solicitud.onupgradeneeded = function(e) {
        bd.createObjectStore("gente", { keyPath: "clave" });
    }
}



window.addEventListener("load", iniciar, false);