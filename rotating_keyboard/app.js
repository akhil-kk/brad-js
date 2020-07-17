
const rows = ['r1', 'r2', 'r3', 'r4', 'r5', 'r6'];
let id = 0;
const row = document.getElementById('keys').children;
document.addEventListener('click', toggleRows);

function toggleRows(e) {
    let singleRow;
    let x = setInterval(changeColor, 1000, rows)
}

function changeColor(rows) {
    let rowElem = document.getElementById(rows[id]);
    let rowElem1 = document.getElementById(rows[id - 1]);
    if ((id - 1) < 0) {
        rowElem.style.backgroundColor = '#03a9f4';
        id = id + 1;
    } else if (id === (rows.length - 1)) {
        rowElem.style.backgroundColor = '#03a9f4';
        rowElem1.style.backgroundColor = 'inherit';
        id = 0;
    } else if (id == 0) {
        document.getElementById(rows[5]).style.backgroundColor = 'inherit';
        console.log('hi')
    } else {
        rowElem.style.backgroundColor = '#03a9f4';
        rowElem1.style.backgroundColor = 'inherit';
        id = id + 1;
    }
    console.log(id);
}


