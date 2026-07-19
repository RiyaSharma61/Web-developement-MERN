let gameseq = [];
let userseq = [];

let start = false;
let level = 0;
let color = ["yellow", "red", "blue", "green"];
let highScore = 0;


//step1. start the game by pressing any key on keyboard , that leads to another function called levelup
let h3 = document.querySelector("h3");
document.addEventListener("keypress", function(){
    if(start == false){
        start = true;
        console.log("game started");
        levelUp();

    }
});

function levelUp(){
    userseq =[];
    level++;
    h3.innerText = `Level ${level}`;

    let randNum = Math.floor(Math.random() *4);
    let randColor = color[randNum];
    let randBtn = document.querySelector(`.${randColor}`);

    gameseq.push(randColor);
    console.log(gameseq);


    flashBtn(randBtn);

}

function flashBtn(btn){//gameflash
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 1000);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 1000);
}

function checkAns(idx){
    if(gameseq[idx] === userseq[idx]){
        if(gameseq.length === userseq.length){
            setTimeout(levelUp , 1000);
        }
        
    } else{
        if(level> highScore){
            highScore = level;
        }
        h3.innerHTML = `Game Over! Your score was <b>${level}</b> </br>
        Highest Score is <b>${highScore}</b> </br>
         Press any key to Reset`;

        reset();
    }
}

function reset(){
    start = false;
    level = 0;
    gameseq=[];
    userseq=[];
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";

    }, 150);
}

function btnPress(){
    console.log("button pressed");
    let btn = this;
    console.log(this);
    userFlash(btn);

    //button pressed stored in a userseq array
    let userColor = btn.getAttribute("id");
    userseq.push(userColor);
    console.log(userseq);

    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}


