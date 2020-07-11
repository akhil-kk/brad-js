const inputText = document.getElementById('text');
const inputAmount = document.getElementById('amount');
const submit = document.querySelector('.btn');
const balance = document.getElementById('balance');
const income = document.getElementById('money-plus');
const expense = document.getElementById('money-minus');
const tasks = document.getElementById('list');
const warning = document.getElementById('warning');

let currentBalance = 0;
let currentExpense = 0;
let currentIncome = 0;

// DOM load event
document.addEventListener('DOMContentLoaded', getEntries);

// Get entries from local storage on page load
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
            updateBalance(entry.InputAmnt);
            updateIncome(entry.InputAmnt);
        } else {
            let repopulate = createElements(entry.inputTxt, entry.InputAmnt);
            repopulate.className += 'minus';
            updateBalance(entry.InputAmnt);
            updateExpense(entry.InputAmnt);
        }
    });
}

// Event listener for add transaction
submit.addEventListener('click', addTransaction);

function addTransaction(e) {
    e.preventDefault();
    const text = inputText.value;
    const amount = +inputAmount.value;
    if (text === '' || amount === '') {
        displayWarning();
    } else if (amount > 0) {
        let elemLi = createElements(text, amount);
        elemLi.className += 'plus';
        updateBalance(amount);
        updateIncome(amount);
        storeEntryInLocalStorage(text, amount); // store entries in local storage
    } else {
        let elemLi = createElements(text, amount);
        elemLi.className += 'minus';
        updateBalance(amount);
        updateExpense(amount);
        storeEntryInLocalStorage(text, amount); // store entries in local storage
    }
    clearInputFields();
}

// Create expense history
function createElements(text, amount) {
    let history = document.createElement('li');
    history.innerHTML = `${text}<span>$${Math.abs(amount)}</span><button class="delete-btn">x</button>`
    tasks.appendChild(history);
    return history;
}

// Update the balance for each transaction
function updateBalance(amount) {
    currentBalance = currentBalance + amount;
    balance.innerHTML = `$ ${currentBalance}`;
}

// Update the income for positive transaction
function updateIncome(amount) {
    currentIncome = currentIncome + amount;
    income.innerHTML = `+$ ${currentIncome}`;
}

// Update the expense for negative transaction
function updateExpense(amount) {
    currentExpense = currentExpense - amount;
    expense.innerHTML = `-$ ${currentExpense}`;
}

// Clear input fields
function clearInputFields() {
    inputAmount.value = '';
    inputText.value = '';
}

// Function to store entires into local storage
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

// Delete already added entries from UI
tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        let txt = e.target.parentElement.firstChild.textContent;
        let deduct = e.target.parentElement.children[0].textContent;
        deduct = deduct.substring(1);
        if (e.target.parentElement.className === 'plus') {
            updateBalance(parseFloat(-deduct));
            updateIncome(parseFloat(-deduct));
        } else {
            updateBalance(parseFloat(deduct));
            updateExpense(parseFloat(deduct));
        }
        e.target.parentElement.remove();
        dltEntryfromLocalStorage(txt); //remove from local storage
    }
});

// Delete from local storage
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

// Display warning message
function displayWarning() {
    warning.style.display = 'block';
    setTimeout(clearWarning, 3000);
}

// Clear warning message
function clearWarning() {
    warning.style.display = 'none';
}
