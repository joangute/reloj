const numeros=document.querySelectorAll('.numero');
const marcadores=document.querySelectorAll('.marcador');
const segundero=document.querySelector('.segundero');
const minutero=document.querySelector('.minutero');
const horas=document.querySelector('.hora');
const lente=document.querySelector('.lente');
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
posicionCircular(numeros,radioN,ajusteY1,5);
posicionCircular(marcadores,radioM, ajusteY2,0);
anguloMarcador();
movimientoReloj();

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

function anguloMarcador(){
let angulo=90;
	marcadores[0].style.width = `4px`;
	marcadores[0].style.backgroundColor='#222';
	
for(let i=0; i< marcadores.length;i++){
  marcadores[i].style.transform = `rotate(${angulo}deg)`;
  if(i%5==0){
  	marcadores[i].style.width = `4px`;
  	marcadores[i].style.backgroundColor='#222';
  }
  angulo+=6;
 }
}

function movimientoReloj(){
  const fecha=new Date();
  let segundo=fecha.getSeconds()*6;
  let minuto=fecha.getMinutes()*6;
  let hora=fecha.getHours()*30;
  segundero.style.transform=`translate(-50%,-50%) rotate(${segundo}deg)`;
  minutero.style.transform=`translate(-50%,-50%) rotate(${minuto}deg)`;
  horas.style.transform=`translate(-50%,-50%) rotate(${hora}deg)`;


  setInterval(()=>{
    segundo+=6;
    segundero.style.transform=`translate(-50%,-50%) rotate(${segundo}deg)`;
    if(segundo%360==0){
      minuto+=6;
      minutero.style.transform=`translate(-50%,-50%) rotate(${minuto}deg)`;
      if(minuto%72==0){
      hora+=6;
      horas.style.transform=`translate(-50%,-50%) rotate(${hora}deg)`;
      }
    }
  },1000);
}

