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

const winAnnouncement = document.querySelector('.winnerCongrats')
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


}

const scoreBoard = () => {
    let makeMoveX = gameBoard.gameX
    let makeMoveO = gameBoard.gameO
    let winX1 = gameBoard.winner[0].winCombo.every(winningMovement => makeMoveX.includes(winningMovement))
    let winX2 = gameBoard.winner[1].winCombo.every(winningMovement => makeMoveX.includes(winningMovement))
    let winX3 = gameBoard.winner[2].winCombo.every(winningMovement => makeMoveX.includes(winningMovement))
    let winX4 = gameBoard.winner[3].winCombo.every(winningMovement => makeMoveX.includes(winningMovement))
    let winX5 = gameBoard.winner[4].winCombo.every(winningMovement => makeMoveX.includes(winningMovement))
    let winX6 = gameBoard.winner[5].winCombo.every(winningMovement => makeMoveX.includes(winningMovement))
    let winX7 = gameBoard.winner[6].winCombo.every(winningMovement => makeMoveX.includes(winningMovement))
    let winX8 = gameBoard.winner[7].winCombo.every(winningMovement => makeMoveX.includes(winningMovement))
    let winO1 = gameBoard.winner[0].winCombo.every(winningMovement => makeMoveO.includes(winningMovement))
    let winO2 = gameBoard.winner[1].winCombo.every(winningMovement => makeMoveO.includes(winningMovement))
    let winO3 = gameBoard.winner[2].winCombo.every(winningMovement => makeMoveO.includes(winningMovement))
    let winO4 = gameBoard.winner[3].winCombo.every(winningMovement => makeMoveO.includes(winningMovement))
    let winO5 = gameBoard.winner[4].winCombo.every(winningMovement => makeMoveO.includes(winningMovement))
    let winO6 = gameBoard.winner[5].winCombo.every(winningMovement => makeMoveO.includes(winningMovement))
    let winO7 = gameBoard.winner[6].winCombo.every(winningMovement => makeMoveO.includes(winningMovement))
    let winO8 = gameBoard.winner[7].winCombo.every(winningMovement => makeMoveO.includes(winningMovement))
    if(winX1 === true || winX2 === true || winX3 === true || winX4 === true || winX5 === true || winX6 === true || winX7 === true || winX8 === true){
        winAnnouncement.textContent = "Player 1 Wins!"
    }else if(winO1 === true || winO2 === true || winO3 === true || winO4 === true || winO5 === true || winO6 === true || winO7 === true || winO8 === true){
        winAnnouncement.textContent = "Player 2 Wins!"
    }
}
