let grid = document.querySelector(".grid");
let inp = document.querySelector("#inputbox");
let clearButton = document.querySelector("#clearBoard");
let sizeButton = document.querySelector("#setSize")
let color = 'black';
let click = false;
let drawStatus = document.createElement('p')
let numPixels = document.createElement('p')
drawStatus.textContent = "Not Currently Drawing"
numPixels.textContent = `Board Dimensions: ${inp.value} x ${inp.value}`
drawStatus.className = "boardInfo"
numPixels.className = "boardInfo"
let content = document.querySelector('.content');

content.appendChild(drawStatus);
content.appendChild(numPixels);

function checkClicked(){
    document.body.addEventListener('click', (event) => {
        if (event.target.className !== "button"){
            click = !click;
        }
        if (click){
            drawStatus.textContent = "Currently Drawing"
        }
        else{
            drawStatus.textContent = "Not Currently Drawing"
        }
}
    )
}

function setColor (colorChoice) {
    color = colorChoice;
}
function colorSquare(){
    if (click){
        if (color === 'red'){
            this.style.backgroundColor = 'red';
        }
        else if (color === 'orange'){
            this.style.backgroundColor = 'orange';
        }
        else if (color === 'yellow'){
            this.style.backgroundColor = 'yellow';
        }
        else if (color === 'green'){
            this.style.backgroundColor = 'green';
        }
        else if (color === 'blue'){
            this.style.backgroundColor = 'blue';
        }
        else if (color === 'purple'){
            this.style.backgroundColor = 'purple';
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
}



function clearBoard(){
    let squares = document.querySelectorAll('.grid-item');
    squares.forEach((square) => square.style.backgroundColor="white")
}

function makeGrid(size){
    if (size < 0 || size > 100){
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
checkClicked();
playGame();

