const container = document.querySelector('.container');
let n = 16;
let color = 'red';

for (let i = 0;i<n;i++) {
    const row = document.createElement('div');
    row.className = 'grid-row';
    for (let j = 0;j<n;j++) {
        let cell = document.createElement('div');
        cell.className = 'grid-cell';
        cell.addEventListener('mouseover', () => {
            cell.style['background-color'] = color;
        })
        row.append(cell);
    }
    container.append(row);
}
