let boxes=document.querySelectorAll('.box');
let resetbtn=document.querySelector('#reset-btn');
// console.log(resetbtn);
let newbtn=document.querySelector('div');
let msgCon=document.querySelector('#msg');
let msgContainer=document.querySelector('.msg-container');
let turnO=true;

// let newbtn1=document.querySelector('#new-btn');
// console.log(newbtn1);
// console.log(msgCon);
// console.log(msgContainer)
// let msgpa=document.querySelector('.msg');
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const disableBoxes=()=>{
    for(let box of boxes){
      box.disabled=true;
    //   msgContainer.classList.add("hide");
   }
}
const enableBoxes=()=>{
    for(let box of boxes){
      box.disabled=false;
      box.innerText="";
   }
}
boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turnO){
            box.innerText='O';
            turnO=false;
        }else{
            box.innerText='X';
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const showWinner = (winner) =>{
 msg.innerText=`Congratulation Winner ${winner}`;
 msgContainer.classList.remove("hide");
disableBoxes();
}
const checkWinner=()=>{
    for(pattern of winpattern){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!='' && pos2Val!='' && pos3Val!=''){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
            showWinner(pos1Val);
            }
        }
    }
}
newbtn.addEventListener('click',resetGame);
resetbtn.addEventListener('click',resetGame);