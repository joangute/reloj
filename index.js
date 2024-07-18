
const numeros=document.querySelectorAll('.numero');
const segundero=document.querySelector('.segundero');
const minutero=document.querySelector('.minutero');
const horas=document.querySelector('.hora');
const lente=document.querySelector('.lente');
const body=document.body;
crearMarcadores();
const marcadores=document.querySelectorAll('.marcador');
let ajusteY1=5;
let ajusteY2=-3;
let radioN=150;
let radioM=180;
if(lente.offsetWidth!=400){
   ajusteY1=0;
   ajusteY2=-5;
   radioN=lente.offsetWidth/8*3;
   radioM=lente.offsetWidth/20*9;
}
if(body.offsetHeight<723){
  body.style.height='100%';
}

posicionCircular(numeros,radioN,ajusteY1,5);
posicionCircular(marcadores,radioM, ajusteY2,0);
movimientoReloj();


function crearMarcadores(){
  let marcador;
  let angulo=90;
  for(let i=0;i<60;i++){

    marcador=document.createElement('span');
    marcador.classList.add('marcador');
    marcador.style.transform = `rotate(${angulo}deg)`;
    if(i%5==0){
    marcador.style.width = `4px`;
    marcador.style.backgroundColor='#222';
         }
    lente.appendChild(marcador);
    angulo+=6;
  }

}

function posicionCircular(elemento,radio, x,y){

let n=elemento.length;
let r=radio;
let angulo = 0;
let originX = elemento[0].offsetLeft;
let originY = elemento[0].offsetTop;

 angulo += 0.0001;
 elemento.forEach((e,i) =>{
 e.style.left = `${originX + r*Math.cos(angulo + 2*Math.PI/n*i)+y}px`;
 e.style.top = `${originY + r*Math.sin(angulo + 2*Math.PI/n*i)+x}px`;
  });
}

function movimientoReloj(){

  let fecha,segundo,minuto,hora;
  setInterval(()=>{
    fecha=new Date();
    segundo=fecha.getSeconds()*6;
    minuto=fecha.getMinutes()*6;
    hora=fecha.getHours()*30;
    segundero.style.transform=`translate(-50%,-50%) rotate(${segundo}deg)`;
    minutero.style.transform=`translate(-50%,-50%) rotate(${minuto}deg)`;
    horas.style.transform=`translate(-50%,-50%) rotate(${hora+(Math.floor(fecha.getMinutes()/12)*6)}deg)`;

  },1000);
}

