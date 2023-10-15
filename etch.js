let grid = document.querySelector(".grid");
let inp = document.querySelector("#inputbox");
let clearButton = document.querySelector("#clearBoard");
let sizeButton = document.querySelector("#setSize")



function clearBoard(){
    while (grid.children.length > 0){
        grid.children[0].remove();
    }
}

function playGame(){
    makeGrid(16);
    clearButton.addEventListener("click", () => {
        clearBoard();
    })
    sizeButton.addEventListener("click", () => {
        clearBoard();
        makeGrid(inp.value);
        console.log("hello");
    })
}

function makeGrid(size){
    let gridSize = size*size;
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < gridSize; i++){
        let square = document.createElement('div');
        grid.appendChild(square).className = "grid-item"
        square.addEventListener('mouseover', () => square.style.backgroundColor = "black");
    }
     }
playGame();
