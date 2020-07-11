const inputText = document.getElementById('text');
const inputAmount = document.getElementById('amount');
const submit = document.querySelector('.btn');
const expenseHistory = document.querySelector('.list');
const balance = document.getElementById('balance');
const income = document.getElementById('money-plus');
const expense = document.getElementById('money-minus');
const tasks = document.getElementById('list');
const warning = document.getElementById('warning');

let currentBalance = 0;
let currentExpense = 0;
let currentIncome = 0;

//Delete already added entries
tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        let txt = e.target.parentElement.firstChild.textContent;
        let deduct = e.target.parentElement.children[0].textContent;
        deduct = deduct.substring(1);
        if (e.target.parentElement.className === 'plus') {
            updateYourBalance(parseFloat(-deduct));
            updateIncome(parseFloat(-deduct));
        } else {
            updateYourBalance(parseFloat(deduct));
            updateExpense(parseFloat(deduct));
        }
        e.target.parentElement.remove();
        dltEntryfromLocalStorage(txt); //remove from local storage
    }
});

//DOM load event
document.addEventListener('DOMContentLoaded', getEntries);

// get entries form local storage
function getEntries() {
    let entries;
    if (localStorage.getItem('entries') === null) {
        entries = [];
    } else {
        entries = JSON.parse(localStorage.getItem('entries'));
    }
    entries.forEach(function (entry) {
        if (entry.InputAmnt > 0) {
            let repopulate = createElements(entry.inputTxt, entry.InputAmnt);
            repopulate.className += 'plus';
            updateYourBalance(entry.InputAmnt);
            updateIncome(entry.InputAmnt);
        } else {
            let repopulate = createElements(entry.inputTxt, entry.InputAmnt);
            repopulate.className += 'minus';
            updateYourBalance(entry.InputAmnt);
            updateExpense(entry.InputAmnt);
        }
    });
}

// event listener
submit.addEventListener('click', addExpense);

function addExpense(e) {
    e.preventDefault();
    const text = inputText.value;
    const amount = +inputAmount.value;
    if (text === '' || amount === '') {
        warning.style.display = 'block';
        setTimeout(clearWarning, 3000);
    } else if (amount > 0) {
        let elemLi = createElements(text, amount);
        elemLi.className += 'plus';
        updateYourBalance(amount);
        updateIncome(amount);
        storeEntryInLocalStorage(text, amount); // store entries in local storage
    } else {
        let elemLi = createElements(text, amount);
        elemLi.className += 'minus';
        updateYourBalance(amount);
        updateExpense(amount);
        storeEntryInLocalStorage(text, amount); // store entries in local storage
    }
    function clearWarning() {
        warning.style.display = 'none';
    }
    clearInputFields();
}

// create elements
function createElements(text, amount) {
    const transaction = document.createElement('li');
    const transactionAmt = document.createElement('span');
    const closeBtn = document.createElement('button');
    closeBtn.className += 'delete-btn';

    const textNodeLi = document.createTextNode(`${text}`);
    const textNodeSpan = document.createTextNode(`$${Math.abs(amount)}`);
    const textNodeBtn = document.createTextNode('x');

    transaction.appendChild(textNodeLi);
    transactionAmt.appendChild(textNodeSpan);
    closeBtn.appendChild(textNodeBtn);

    transaction.appendChild(transactionAmt);
    transaction.appendChild(closeBtn);
    expenseHistory.appendChild(transaction);
    return  transaction;
}

// update balance
function updateYourBalance(amount) {
    currentBalance = currentBalance + amount;
    balance.innerHTML = `$ ${currentBalance}`;
}

// update the income for positive transaction
function updateIncome(amount) {
    currentIncome = currentIncome + amount;
    income.innerHTML = `+$ ${currentIncome}`;
}

// update the expense for negative transaction
function updateExpense(amount) {
    currentExpense = currentExpense - amount;
    expense.innerHTML = `-$ ${currentExpense}`;
}

// clear input fields
function clearInputFields() {
    inputAmount.value = '';
    inputText.value = '';
}

// function to store into local storage
function storeEntryInLocalStorage(text, amount) {
    let entries;
    if (localStorage.getItem('entries') === null) {
        entries = [];
    } else {
        entries = JSON.parse(localStorage.getItem('entries'));
    }
    entries.push({ inputTxt: text, InputAmnt: amount });
    localStorage.setItem('entries', JSON.stringify(entries));
}

// delete from local storage
function dltEntryfromLocalStorage(txt) {
    let entries;
    if (localStorage.getItem('entries') === null) {
        entries = [];
    } else {
        entries = JSON.parse(localStorage.getItem('entries'));
    }
    entries.forEach(function (entry, index) {
        if (entry.inputTxt === txt) {
            entries.splice(index, 1);
        }
    });
    localStorage.setItem('entries', JSON.stringify(entries));
}








