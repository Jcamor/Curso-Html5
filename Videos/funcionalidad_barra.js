var mivideo, reproducir, barra, progreso;

function comenzar(){
    mivideo=document.getElementById("mivideo");
    reproducir=document.getElementById("reproducir");
    barra=document.getElementById("barra");
    progreso=document.getElementById("progreso");

    reproducir.addEventListener("click",clicando,false);
    progreso.addEventListener("click",adelantando,false);
}

function clicando(){
    if((mivideo.paused==false) && (mivideo.ended==false)){
        mivideo.pause();
        reproducir.innerHTML="Play";
    }else{
        mivideo.play();
        reproducir.innerHTML="Pause";
    }
}

window.addEventListener("load",comenzar,false);