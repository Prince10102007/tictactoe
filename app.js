let boxes=document.querySelectorAll(".buttons");
let message=document.querySelector("#msg");
let newgame=document.querySelector("#new");

let scoreo=0;
let scorex=0;


let turno=true;
const winningpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
boxes.forEach((buttons)=>{
    buttons.addEventListener(("click"),()=>{
console.log("Clicked");
if(turno){
    buttons.innerText="O";
    turno=false;
}
else{
    buttons.innerText="X"
    turno=true;
}
buttons.disabled=true;
checkpattern();
    });

});

const resetgame=()=>{
    enableboxes();
    for (let button of boxes) {
        button.innerText = ""; 
    }
    msg.innerText="";
}
const draw=()=>{
    const allfilled = Array.from(boxes).every((button) => button.innerText !== "");
    if(allfilled){
        message.innerText="Game is Draw! Play Again";
        disableboxes();

    }
}
const disableboxes=()=>{
    for( let buttons of boxes){
        buttons.disabled=true;
    }
}
const enableboxes=()=>{
    for( let buttons of boxes){
        buttons.disabled=false;
    }
}
const updatescore=(winner)=>{
    if(winner==="O"){
        scoreo++;
        document.getElementById("scoreo").innerHTML=scoreo;
    }
    else if(winner==="X"){
        scorex++;
        document.getElementById("scorex").innerHTML=scorex;
    }
}
const showwinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    updatescore(winner);
    disableboxes();
}
const checkpattern=()=>{
for(let patterns of winningpatterns){
let pos1=boxes[patterns[0]].innerText;
let pos2=boxes[patterns[1]].innerText;
let pos3=boxes[patterns[2]].innerText;
if(pos1!="" && pos2!="" && pos3!=""){
    if(pos1===pos2&&pos2===pos3){
        console.log("winner",pos1);
    
        showwinner(pos1);
        return;
    }
}
}
draw();
}


document.getElementById("resetscore").addEventListener("click",()=>{
    scoreo=0;
    scorex=0;
    document.getElementById("scoreo").innerHTML=scoreo;
    document.getElementById("scorex").innerHTML=scorex;
});

newgame.addEventListener("click",resetgame);