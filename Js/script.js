const cells = []

for (let i = 0; i < 76; i++) {
    cell = document.createElement('div')
    cell.classList.add('cell')
    cell.innertext = i
    cells[i] = cell
}