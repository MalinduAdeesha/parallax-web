let text =document.getElementById('text');
let txt =document.getElementById('txt');
let txtDesc =document.getElementById('txtDes');
let rotation =document.getElementById('rotating-txt');
let toolTips =document.getElementById('tooltipIcon');
let treeLeft =document.getElementById('tree-left');
let treeRight =document.getElementById('tree-right');
let gateLeft =document.getElementById('gate-left');
let gateRight =document.getElementById('gate-right');
let gost =document.getElementById('gost');
let gostMini =document.getElementById('gost-mini');
let gostMiniT =document.getElementById('gost-miniT');
let ghostAbOne =document.getElementById('ghostAbOne');



window.addEventListener('scroll',()=>{
    let value = window.scrollY;

    text.style.marginTop = value*1.5+'px';
    txt.style.marginTop = value*1.5+'px';
    rotation.style.marginTop = value*2.8+'px';
    txtDesc.style.marginTop = value*1.5+'px';
    toolTips.style.left = value*-2.5+'px';
    treeLeft.style.left = value*-1.5+'px';
    treeRight.style.left = value*1.5+'px';
    gateLeft.style.left = value*0.5+'px';
    gateRight.style.left = value*-0.5+'px';
    gost.style.left = value*-3.5+'px';
    gostMini.style.marginTop = value*-3.5+'px';
    gostMiniT.style.marginTop = value*-4.5+'px';
    ghostAbOne.style.left = value*1.1+'px';

})
// ---
const coords={x:0,y:0};
const circles=document.querySelectorAll(".circles");

circles.forEach(function (circle){
    circle.x=0;
    circle.y=0;
});
window.addEventListener("mousemove",function (e){
    coords.x=e.clientX;
    coords.y=e.clientY;


});
function animateCircles(){
        let  x=coords.x;
        let  y=coords.y;

    circles.forEach(function (circle,index){
       circle.style.left=x-12+"px";
       circle.style.top=y-12+"px";

       circle.style.scale=(circles.length-index)/circles.length;

       circle.x=x;
       circle.y=y;

        const nextCircle =circles[index+1]||circles[0];
       x +=(nextCircle.x-x)*0.3;
       y +=(nextCircle.y-y)*0.3;
    });
    requestAnimationFrame(animateCircles);
}
animateCircles();
// --
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 350 ) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll',scrollUp);

function scrollUp1(){
    const scrollUp = document.getElementById('scroll-up1');
    if(this.scrollY >= 1250 ) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll',scrollUp1);
