
const inputText = document.getElementById('text');
const inputAmount = document.getElementById('amount');
const submit = document.querySelector('.btn');
const expenseHistory = document.querySelector('.list');
const balance = document.getElementById('balance');
let initialBalance = parseFloat(balance.textContent);
const income = document.getElementById('money-plus');
let initialIncome = parseFloat(income.textContent);
const expense = document.getElementById('money-minus');
let initialExpense = parseFloat(expense.textContent);
const tasks = document.getElementById('list');
const warning = document.getElementById('warning');

//Delete already added entries
tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        let txt = e.target.parentElement.firstChild.textContent;
        console.log(txt);
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
        //remove from local storage
        dltEntryfromLocalStorage(txt);
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
            const transaction = document.createElement('li');
            transaction.className += 'plus';
            const transactionAmt = document.createElement('span');
            const closeBtn = document.createElement('button');
            closeBtn.className += 'delete-btn';

            const textNodeLi = document.createTextNode(`${entry.inputTxt}`);
            const textNodeSpan = document.createTextNode(`$${Math.abs(entry.InputAmnt)}`);
            const textNodeBtn = document.createTextNode('x');

            transaction.appendChild(textNodeLi);
            transactionAmt.appendChild(textNodeSpan);
            closeBtn.appendChild(textNodeBtn);

            transaction.appendChild(transactionAmt);
            transaction.appendChild(closeBtn);
            expenseHistory.appendChild(transaction);
            updateYourBalance(entry.InputAmnt);
            updateIncome(entry.InputAmnt);
        } else {
            const transaction = document.createElement('li');
            transaction.className += 'minus';
            const transactionAmt = document.createElement('span');
            const closeBtn = document.createElement('button');
            closeBtn.className += 'delete-btn';

            const textNodeLi = document.createTextNode(`${entry.inputTxt}`);
            const textNodeSpan = document.createTextNode(`$ ${Math.abs(entry.InputAmnt)}`);
            const textNodeBtn = document.createTextNode('x');

            transaction.appendChild(textNodeLi);
            transactionAmt.appendChild(textNodeSpan);
            closeBtn.appendChild(textNodeBtn);

            transaction.appendChild(transactionAmt);
            transaction.appendChild(closeBtn);
            expenseHistory.appendChild(transaction);
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
        const transaction = document.createElement('li');
        transaction.className += 'plus';
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
        updateYourBalance(amount);
        updateIncome(amount);
        clearInputFields();

        // store entries in local storage
        storeEntryInLocalStorage(text, amount);

    } else {
        const transaction = document.createElement('li');
        transaction.className += 'minus';
        const transactionAmt = document.createElement('span');
        const closeBtn = document.createElement('button');
        closeBtn.className += 'delete-btn';

        const textNodeLi = document.createTextNode(`${text}`);
        const textNodeSpan = document.createTextNode(`$ ${Math.abs(amount)}`);
        const textNodeBtn = document.createTextNode('x');

        transaction.appendChild(textNodeLi);
        transactionAmt.appendChild(textNodeSpan);
        closeBtn.appendChild(textNodeBtn);

        transaction.appendChild(transactionAmt);
        transaction.appendChild(closeBtn);
        expenseHistory.appendChild(transaction);
        updateYourBalance(amount);
        updateExpense(amount);
        clearInputFields();
        storeEntryInLocalStorage(text, amount);
    }

    function clearWarning() {
        warning.style.display = 'none';
    }
}

// update balance
function updateYourBalance(amount) {
    let liveBalance = initialBalance;
    liveBalance = liveBalance + amount;
    balance.innerHTML = `$ ${liveBalance}`;
    initialBalance = liveBalance;
}

// update the income for positive transaction
function updateIncome(amount) {
    let liveIncome = initialIncome;
    liveIncome = liveIncome + amount;
    income.innerHTML = `+$ ${liveIncome}`;
    initialIncome = liveIncome;
}

// update the expense for negative transaction
function updateExpense(amount) {
    let liveExpense = initialExpense;
    liveExpense = liveExpense - amount;
    expense.innerHTML = `-$ ${liveExpense}`;
    initialExpense = liveExpense;
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








