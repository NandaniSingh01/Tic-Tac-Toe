let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
let moves = 0;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
boxes.forEach((box)=>{
box.addEventListener("click",() => {
    console.log("Box was clicked");
    if(turnO){
        box.innerText = "0";
        turnO = false;
    }
    else{
        box.innerText = "X";
        turnO = true;
    }
    moves++;
    box.disabled = true;
    checkWinner();
});
});

const disableBtns = () =>{
    for(let box of boxes)
    {
        box.disabled = true;
    }
};
const enableBtns = () => {
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = " ";
    }
};
const showWinner = (winner) => {
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtns();
};

const calDraw = () => {
    msg.innerText = `Oops ! It's a Draw`;
    msgContainer.classList.remove("hide");
    disableBtns();
}

const checkWinner = () =>{
    for(let pattern of winPatterns)
    {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !== "" && pos2Val !== "" && pos3Val !== ""  )
        {
            if(pos1Val === pos2Val && pos2Val == pos3Val)
            {
                showWinner(pos1Val);
                return;
            }
        }
    }
    if(moves===boxes.length)
    {
        calDraw();
    }   
};
const resetGame = () => {
    turnO = true;
    enableBtns();
    msgContainer.classList.add("hide");
};

newGameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);
