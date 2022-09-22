const gameBoard = {
    game: [],
    player1: "X",
    player2: "O"

}


const grid = document.querySelectorAll('.game');

grid.forEach(square => {
    square.addEventListener('click', addMove)
})

function addMove(e){
    let move = e.target.classList[0]
    let makeMove = gameBoard.game
    if(e.target.textContent === ""){
        e.target.textContent = gameBoard.player1
        gameBoard.game.push({move})
    }else{
        return
    }
    for (const property in makeMove){
<<<<<<< HEAD
        console.log(makeMove[property].move === 'leftMid')
=======
        console.log(makeMove[property])
>>>>>>> 0dcae0ad97ae8f325fe6b266ff1c20acbf1124f2
    }
}

