let container = document.querySelector('.container');
let n = 16;
let color = 'red';
const body = document.querySelector('body')

function renderGrid(size) {
    body.removeChild(container);
    container = document.createElement('div');
    container.className = 'container';
    for (let i = 0;i<size;i++) {
        const row = document.createElement('div');
        row.className = 'grid-row';
        for (let j = 0;j<size;j++) {
            let cell = document.createElement('div');
            cell.className = 'grid-cell';
            cell.addEventListener('mouseover', () => {
                cell.style['background-color'] = color;
            })
            row.append(cell);
        }
        container.append(row);
    }
    body.append(container);
}

const clearButton = document.querySelector('.clear-button');
clearButton.onclick = () => {
    let userInput = parseInt(prompt('Enter the grid size: '));
    while (isNaN(userInput) || userInput < 1 || userInput > 100) {
        alert("Grid size has to be a number between 1 and 100!")
        userInput = parseInt(prompt('Enter the grid size: '));
    }
    n = userInput;
    renderGrid(n);
}

renderGrid(n);