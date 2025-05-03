/*-------------------------------- Constants --------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/
let board;
let turn;
let winner;
let tie;



/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr')

const messageEl = document.querySelector('#message')

/*-------------------------------- Functions --------------------------------*/
const init = ()=>{
    board = ['','','','','','','','','']
    console.log(board.length);
    turn = "X";
    winner = false;
    tie = false;
    render();
}
const render = ()=>{

}
const updateBoard =()=>{
    board.forEach(element => {
        
    });
}


/*----------------------------- Event Listeners -----------------------------*/



