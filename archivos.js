function comenzar() {
    zonadatos = document.getElementById("zonadatos");
    var archivos = document.getElementById("archivos");

    archivos.addEventListener("change", procesar, false);
}

function procesar(e) {
    var archivos = e.target.files;
    var miarchivo = archivos[0];
    var lector = new FileReader();

    lector.readAsText(miarchivo, "iso-8859-1");
    lector.addEventListener("load", mostar_en_web, false);
}

function mostar_en_web(e) {
    var resultado = e.target.result;

    zonadatos.innerHTML = resultado;
}


window.addEventListener("load", comenzar, false);