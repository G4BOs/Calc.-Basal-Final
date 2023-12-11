//Constantes
const VERINFO = document.getElementById('verinfo');
const OCINFO = document.getElementById('ocinfo');
const CAJAINFO = document.getElementById('cajainfo');
const ERROR = document.getElementById('error');
const RESULTADO = document.getElementById('resultadocaja');
const VOLDIA = document.getElementById('voldia');
const MAN = document.getElementById('man');
const MEDMAN = document.getElementById('medman');
const SCX1500 = document.getElementById('scx1500');
const SCX2000 = document.getElementById('scx2000');

//Ocultar y mostrar info de como se calcula
VERINFO.addEventListener('click', ()=>{
    CAJAINFO.style.display='block';
    VERINFO.style.display='none';
})
OCINFO.addEventListener('click',()=>{
    CAJAINFO.style.display='none';
    VERINFO.style.display='block';
})

//Calculadora

const CALCULAR = document.getElementById('calcular');
const INPUT = document.getElementById('peso');

INPUT.addEventListener('keyup',calcular);
CALCULAR.addEventListener('click',calcular);

function calcular(){
    const PESO = document.getElementById('peso').valueAsNumber;
if (PESO>0){ERROR.style.display='none';
if(PESO>30){let sc = (((PESO*4)+7)/(PESO+90));
let scx1500 = sc*1500;let scx2000= sc*2000;
SCX1500.innerHTML="SC x 1500: "+scx1500.toFixed(0)+" cc";
SCX2000.innerHTML="SC x 2000: "+scx2000.toFixed(0)+" cc";
SCX1500.style.display='block';
SCX2000.style.display='block';
RESULTADO.style.display='block';
VOLDIA.style.display='none';
MAN.style.display='none';
MEDMAN.style.display='none';
}
else {
    if(PESO>20){let voldia = (1500+(PESO-20)*20);
        let man = voldia/24;
        let mman = man*1.5;
    VOLDIA.innerHTML="Volumen Diario: "+voldia+" cc";
    MAN.innerHTML="Mantenimiento: "+man.toFixed(0)+" cc/hr";
    MEDMAN.innerHTML="Med. Mantenimiento: "+mman.toFixed(0)+" cc/hr";
    SCX1500.style.display='none';
SCX2000.style.display='none';
RESULTADO.style.display='block';
VOLDIA.style.display='block';
MAN.style.display='block';
MEDMAN.style.display='block';}
else if(PESO>10){
    let voldia = (1000+(PESO-10)*50);
        let man = voldia/24;
        let mman = man*1.5;
    VOLDIA.innerHTML="Volumen Diario: "+voldia+" cc";
    MAN.innerHTML="Mantenimiento: "+man.toFixed(0)+" cc/hr";
    MEDMAN.innerHTML="Med. Mantenimiento: "+mman.toFixed(0)+" cc/hr";
    SCX1500.style.display='none';
SCX2000.style.display='none';
RESULTADO.style.display='block';
VOLDIA.style.display='block';
MAN.style.display='block';
MEDMAN.style.display='block';
}
else {
    let voldia = PESO*100;
        let man = voldia/24;
        let mman = man*1.5;
    VOLDIA.innerHTML="Volumen Diario: "+voldia+" cc";
    MAN.innerHTML="Mantenimiento: "+man.toFixed(0)+" cc/hr";
    MEDMAN.innerHTML="Med. Mantenimiento: "+mman.toFixed(0)+" cc/hr";
    SCX1500.style.display='none';
SCX2000.style.display='none';
RESULTADO.style.display='block';
VOLDIA.style.display='block';
MAN.style.display='block';
MEDMAN.style.display='block';
}
}


}
else {
    ERROR.style.display='block';
    RESULTADO.style.display='none';
}
}

//Funciones



    
   