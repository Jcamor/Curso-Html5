/* Primer javascript juancarlosamor.es*/

function ejecuta(){
   /* for(var i=0; i<3; i++){
     document.getElementsByTagName("p")[i].onclick=saludo;
    }
 // document.getElementById("importante").onclick=saludo;*/
   
    for(var i=0; i<2; i++){
        var z=document.getElementsByClassName("importante")[i].onclick=saludo;
    }
}

function saludo(){
    alert("Que hay de nuevo");
}

window.onload=ejecuta;