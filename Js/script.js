// inseriamo una tabella

let numeriRimasti = []

for (let i = 1; i <= 90; i++) {
    numeriRimasti.push(i)
}

const addTable = () => {
    const table = document.getElementById('tabella')
    table.innerHTML = ''


    for (let i = 1; i <= 90; i++) {
        if ((i - 1) % 10 === 0) {
            row = document.createElement('tr');
            table.appendChild(row);
        }
        const cell = document.createElement('td')
        cell.innerText = (i)
        cell.setAttribute('id', "num-" + i)
        table.appendChild(cell)


    }

}

addTable()
// voglio estrarre un numero random e segnarlo sull cartellone della tombola

function estractNumber() {



    const numeroTombola = Math.floor((Math.random() * numeriRimasti.length))


    const numVero = numeriRimasti[numeroTombola];


    console.log(numVero)


    const selected = document.getElementById("num-" + numeriRimasti[numeroTombola])
    selected.classList.add('estratto')

    numeriRimasti.splice(numeroTombola, 1)

}

