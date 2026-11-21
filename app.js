let gameseq=[];
let userseq=[];

let btns=["yellow","red","purple","green"];


let started=false;
let level=0;



let h2=document.querySelector("h2");


document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is satred");
        started=true;
        levelup();
    }
});


function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
      btn.classList.remove("gameflash");
    },100   )};


    function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
      btn.classList.remove("userflash");
    },100   )};



function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
//random bton choss

let randidx=Math.floor(Math.random() * 4);
let randColor=btns[randidx];
let  randbtn=document.querySelector(`.${randColor}`)
// console.log(randColor);
// console.log(randidx);
// console.log(randbtn);

gameseq.push(randColor);
console.log(gameseq);
    gameflash(randbtn);
}


function cheakAns(idx){
 //console.log("curr level: ",level);
//  let idx=level-1;
 if(userseq[idx]===gameseq[idx]){
    if(userseq.length===gameseq.length){
       setTimeout(levelup,1000);
    }
    console.log("same value");
 
 }else{

    h2.innerHTML=`Game Over! Your Score was <b>${level}<b><br>press any key to start. `;
    document.querySelector("body").style.backgroundColor="red";
setTimeout(function(){
    document.querySelector("body").style.backgroundColor="White";
},150);
}

    resizeTo();
 }



function btnPress(){
    // console.log(this);
  let btn =this;
  userflash(btn);

  userColor=btn.getAttribute("id");
  userseq.push(userColor);
cheakAns(userseq.length-1); 

}

let allBtns=document.querySelectorAll(`.btn`);
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}


function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;

}


