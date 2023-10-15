let grid = document.querySelector(".grid");
let inp = document.querySelector("#inputbox");
let clearButton = document.querySelector("#clearBoard");
let sizeButton = document.querySelector("#setSize")
let color = 'black'; 

function setColor (colorChoice) {
    color = colorChoice;
}
function colorSquare(){
    if (color === 'gray'){
        this.style.backgroundColor = 'gray';
    }
    else if (color === 'black'){
        this.style.backgroundColor = 'black';
    }
    else if (color === 'random'){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    }
    else {
        this.style.backgroundColor ='lightpink'
    }
}


function clearBoard(){
    let squares = document.querySelectorAll('.grid-item');
    squares.forEach((square) => square.style.backgroundColor="white")
}

function makeGrid(size){
    if (size < 0 || size > 100){
        inp.value = "1-100 ONLY"
        size = 16;
    }
    else {
        let gridSize = size*size;
        grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        for (let i = 0; i < gridSize; i++){
            let square = document.createElement('div');
            grid.appendChild(square).className = "grid-item"
            square.addEventListener('mouseover', colorSquare);
            }
    }
}



function playGame(){
    makeGrid(16); //default board size

    clearButton.addEventListener("click", () => {
        clearBoard();
    })
    sizeButton.addEventListener("click", () => {
        clearBoard();
        makeGrid(inp.value);
        console.log("hello");
    })
}

playGame();
