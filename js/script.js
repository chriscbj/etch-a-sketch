// create divs
const container = document.querySelector('.container');
const button = document.querySelector('.squareInput');

// when button is clicked, prompt for input
button.addEventListener('click', () =>{
    resetGrid();
    squareSides = parseInt (prompt('Please input the number of squares per side'));
// input should be a number
    if (Number.isInteger(squareSides) == false){
        alert ('Please input a valid number!');
// input should not be higher than 100
    } else if (squareSides >= 100){
        alert ('Please input a number from 1 - 100!');
        return;
    }
    makeGrids(squareSides);
});

function makeGrids(squareSides){
    let columns = squareSides;
    let rows = squareSides;
    for (let i = 1; i <= columns; i++){
        let column = document.createElement('div');
        column.className = 'column';
    for (let j = 1; j <= rows; ++j){
        let row = document.createElement('div');
        row.className = 'row';
        column.appendChild(row);
        container.appendChild(column);
        row.addEventListener('mouseover', ()=>{
            row.classList.add('mouseOver');
        })
    }
}
};

function resetGrid(){
    container.innerHTML = ' '; 
}