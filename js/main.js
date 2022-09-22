const gameBoard = {
    winner: [
        {winCombo: ['leftTop', 'midTop', 'rightTop']},
        {winCombo: ['leftTop', 'midMid', 'rightBottom']},
        {winCombo: ['leftTop', 'leftMid', 'leftBottom']},
        {winCombo: ['leftMid','midMid','rightMid']},
        {winCombo: ['leftBottom', 'midMid','rightTop']},
        {winCombo: ['leftBottom', 'midBottom', 'rightBottom']},
        {winCombo: ['midTop', 'midMid', 'midBottom']},
        {winCombo: ['rightTop', 'rightMid', 'rightBottom']}
    ],
    gameX: [],
    gameO: [],
    player1: "X",
    player2: "O"

}


const grid = document.querySelectorAll('.game');

grid.forEach(square => {
    square.addEventListener('click', addMove)
})

function addMove(e){
    let move = e.target.classList[0]
    let X = gameBoard.gameX
    let O = gameBoard.gameO

    if(e.target.textContent === "" && X.length === O.length){
        e.target.textContent = gameBoard.player1
        gameBoard.gameX.push(move)
    }else if(X.length > O.length){
        e.target.textContent = gameBoard.player2
        gameBoard.gameO.push(move)
    }

    scoreBoard()

    // makeMove.forEach(item =>{
    //     console.log(item)
    // })


    // for (const property in makeMove){

    //     if(makeMove[property].move === 'leftMid' && makeMove[property].move === 'midMid' && makeMove[property].move === 'rightMid'){
    //         alert('You Win!')
    //     }
    // }
}

const scoreBoard = () => {
    let makeMoveX = gameBoard.gameX
    let win1 = gameBoard.winner[0].winCombo.every(winningMovement => makeMoveX.includes(winningMovement))
    let win2 = gameBoard.winner[1].winCombo.every(winningMovement => makeMoveX.includes(winningMovement))
    let win3 = gameBoard.winner[2].winCombo.every(winningMovement => makeMoveX.includes(winningMovement))
    let win4 = gameBoard.winner[3].winCombo.every(winningMovement => makeMoveX.includes(winningMovement))
    let win5 = gameBoard.winner[4].winCombo.every(winningMovement => makeMoveX.includes(winningMovement))
    let win6 = gameBoard.winner[5].winCombo.every(winningMovement => makeMoveX.includes(winningMovement))
    let win7 = gameBoard.winner[6].winCombo.every(winningMovement => makeMoveX.includes(winningMovement))
    let win8 = gameBoard.winner[7].winCombo.every(winningMovement => makeMoveX.includes(winningMovement))
    if(win1 === true || win2 === true || win3 === true || win4 === true || win5 === true || win6 === true || win7 === true || win8 === true){
        alert('YOU WIN!')
    }
}
