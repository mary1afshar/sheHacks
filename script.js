// var block = document.getElementById("block");
// var hole = document.getElementById("hole");
// var character = document.getElementById("character");
// var jumping = 0;
// var counter = 0;

// hole.addEventListener('animationiteration', () => {
//     var random = -((Math.random()*300)+150);
//     hole.style.top = random + "px";
//     counter++;
// });
// setInterval(function(){
//     var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
//     if(jumping==0){
//         character.style.top = (characterTop+3)+"px";
//     }
//     var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
//     var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
//     var cTop = -(500-characterTop);
//     if((characterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){
//         alert("Game over. Score: "+(counter-1));
//         character.style.top = 100 + "px";
//         counter=0;
//     }
// },10);

// function jump(){
//     jumping = 1;
//     let jumpCount = 0;
//     var jumpInterval = setInterval(function(){
//         var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
//         if((characterTop>6)&&(jumpCount<15)){
//             character.style.top = (characterTop-5)+"px";
//         }
//         if(jumpCount>20){
//             clearInterval(jumpInterval);
//             jumping=0;
//             jumpCount=0;
//         }
//         jumpCount++;
//     },10);
// }

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d')
canvas.width = 800;
canvas.height = 500;
const keys = []

const player = {
    x: 0,
    y: 0,
    width: 448,
    height: 450,
    frameX: 0,
    frameY: 0,
    speed: 9,
    moving: false
};

const playerSprite = new Image();
playerSprite.src = "unknown.png";

const background = new Image();
playerSprite.src = "background.png"



function animate(){
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    requestAnimationFrame(animate);

}
animate();