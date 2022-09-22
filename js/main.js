const gameBoard = {
    game: [{
        winning1: ['leftTop', 'midTop', 'rightTop'],
        winning2: ['leftTop', 'midMid', 'rightBottom'],
        winning3: ['leftTop', 'leftMid', 'leftBottom'],
        winning4: ['leftMid','midMid','rightMid'],
        winning5: ['leftBottom', 'midMid','rightTop'],
        winning6: ['leftBottom', 'midBottom', 'rightBottom'],
        winning7: ['midTop', 'midMid', 'midBottom'],
        winning8: ['rightTop', 'rightMid', 'rightBottom']
    }],
    player1: "X",
    player2: "O"

}


const grid = document.querySelectorAll('.game');

grid.forEach(square => {
    square.addEventListener('click', addMove)
})

function addMove(e){
    let move = e.target.classList[0]

    if(e.target.textContent === ""){
        e.target.textContent = gameBoard.player1
        gameBoard.game.push({move})
    }else{
        return
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
    let score = 0
    let makeMove = gameBoard.game
        for (const property in makeMove){
            console.log(makeMove[property].move)

        if(makeMove[property].move === 'leftMid' && makeMove[property].move === 'midMid' && makeMove[property].move === 'rightMid'){
            alert('You Win!')
        }
    }

}
