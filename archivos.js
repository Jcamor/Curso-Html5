function comenzar() {
    zonadatos = document.getElementById("zonadatos");
    var archivos = document.getElementById("archivos");

    archivos.addEventListener("change", procesar, false);
}

function procesar(e) {
    var archivos = e.target.files;

    zonadatos.innerHTML = "";

    var miarchivo = archivos[0]; // el primer archivo seleccionado

    //alert(miarchivo.type); para sacar el tipo de archivo
    if (!miarchivo.type.match(/image/)) {

        alert("Selecciona una imagen, for favor");
    } else {
        zonadatos.innerHTML += "Nombre del archivo: " + miarchivo.name + "<br>";
        zonadatos.innerHTML += "Tamaño del archivo: " + Math.round(miarchivo.size / 1024) + "Kb <br>";
        var lector = new FileReader();
        lector.readAsDataURL(miarchivo);
        lector.addEventListener("load", mostar_en_web, false);
    }
    //lector.readAsText(miarchivo, "iso-8859-1"); // se lee el archivo en formato europa occidental

}

function mostar_en_web(e) {
    var resultado = e.target.result;

    zonadatos.innerHTML += "<img src='" + resultado + "' width='95%'>";
}


window.addEventListener("load", comenzar, false);