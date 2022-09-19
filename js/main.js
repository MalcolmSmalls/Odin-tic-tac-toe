
const grid = document.querySelectorAll('.game');

grid.forEach(square => {
    square.addEventListener('click', addMove)
})

function addMove(e){
    if(e.target.textContent === ""){
        e.target.textContent = 'X'
    }else{
        return
    }
}

