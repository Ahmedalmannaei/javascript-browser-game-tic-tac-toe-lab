/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [1, 4, 7],
  [0, 3, 6],
  [2, 5, 8],
];

/*---------------------------- Variables (state) ----------------------------*/
let board;
let turn;
let winner;
let tie;

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(".sqr");

const messageEl = document.querySelector("#message");
const resetButtonEl = document.querySelector('#reset-button')

/*-------------------------------- Functions --------------------------------*/
const init = () => {
  board = ["", "", "", "", "", "", "", "", ""];
  turn = "X";
  winner = false;
  tie = false;
  render();
};

const render = () => {
  updateBoard();
  updateMessage();
};
const updateBoard = () => {
  board.forEach((element, i) => {
    const square = squareEls[i];
    square.textContent = element;
  });
};
const updateMessage = () => {
  if (winner === false && tie === false) {
    messageEl.textContent = "Game is going on";
  } else if (winner === false && tie === true) {
    messageEl.textContent = "Game is a tie";
  } else {
    messageEl.textContent = "Congrats you win";
  }
};
const handleClick = (event) => {
  const squareIndex = event.target.id;
  console.log(squareIndex);
  if (board[squareIndex] === "X" || board[squareIndex] === "O") {
    return;
  }
  placePiece(squareIndex);
  checkForWinner();
  checkForTie();
  switchPlayerTurn();
  render();
};
const placePiece = (index) => {
  board[index] = turn;
  
};
const checkForWinner = () => {
  winningCombos.forEach((element) => {
    const [val1, val2, val3] = element;
    if (
      board[val1] !== "" &&
      board[val1] === board[val2] &&
      board[val1] === board[val3]
    ) {
      winner = true;
      turn = null;
    }
  });
};
const checkForTie = () => {
  if (winner === true) {
    return;
  } else {
    if (board.includes("")) {
      tie = false;
    } else {
      tie = true;
    }
  }
};
const switchPlayerTurn = ()=>{
    if(winner===true){
        return;
    }
    else{
        if(turn==='X'){
            turn='O';
        }
        else{
            turn='X';
        }
    }
}
init();
/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach((element, i) => {
  squareEls[i].addEventListener("click", handleClick);
});
resetButtonEl.addEventListener("click",init);