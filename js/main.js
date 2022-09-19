const gameBoard = {
    game: [{topLeft: "", topMid: "", topBottom: "", midTop: "", midMid: "", midBottom: "", rightTop: "", rightMid: "", rightBottom: ""}],
    player1: "X",
    player2: "O"

}


const grid = document.querySelectorAll('.game');

grid.forEach(square => {
    square.addEventListener('click', addMove)
})

function addMove(e){
    if(e.target.textContent === ""){
        e.target.textContent = gameBoard.player1
        gameBoard.game.push()
    }else{
        return
    }
}

