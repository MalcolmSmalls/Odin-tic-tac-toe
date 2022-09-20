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
}

