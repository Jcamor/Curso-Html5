function comenzar() {
    var miboton = document.getElementById("dame_ubicacion");
    
    miboton.addEventListener("click", obtener, false);
}

function obtener() {
    var parametros={enableHighAccuracy: true, timeout:10000, maximumAge:60000}; // consulta cache durante 60sg cada 10sg

    navigator.geolocation.getCurrentPosition(mostar_posicion, gestion_errores, parametros);
}

function mostar_posicion(posicion) {
    var ubicacion = document.getElementById("ubicacion");
    /*var miubicacion = "";

    miubicacion += "Latitud: " + posicion.coords.latitude + "<br>";
    miubicacion += "Longitud: " + posicion.coords.longitude + "<br>";
    miubicacion += "Exactitud: " + posicion.coords.accuracy + "<br>";

      ubicacion.innerHTML = miubicacion;*/

    var mimapa="http://maps.google.com/maps/api/staticmap?center=" + posicion.coords.latitude + "," + posicion.coords.longitude + "," +
    "&zoom=12&size=400x400&sensor=false&markers=" + posicion.coords.latitude + "," + posicion.coords.longitude;
    
    ubicacion.innerHTML="<img scr='" + mimapa + "'>";
}

function gestion_errores(error) {
    //alert("Ha habido un error");

    if (error.code==1){
        alert("Debe permitir el uso de la geolocalización en su navegador");
    }
}


window.addEventListener("load", comenzar, false);