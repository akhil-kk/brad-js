
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
let items = document.getElementById('list').childNodes;

//Add event listener for delete
function addEventListenerDlt() {
    items.forEach(function(item){
        item.addEventListener('click', () => {
            if(item.lastChild.className === 'delete-btn') {
                item.remove();
            }
        });
    });
}

// event listener
submit.addEventListener('click', addExpense);

function addExpense(e) {
    e.preventDefault();
    const text = inputText.value;
    const amount = +inputAmount.value;
    if (amount > 0) {
        const transaction = document.createElement('li');
        transaction.className += 'plus';
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
        addEventListenerDlt()
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
        addEventListenerDlt()
    }
}

// update balance
function updateYourBalance(amount) {
    let liveBalance = initialBalance;
    liveBalance = liveBalance + amount;
    balance.innerHTML = `$ ${liveBalance}`;
    initialBalance = liveBalance;

    if (amount > 0) {
        updateIncome(amount);
    } else {
        updateExpense(amount);
    }
}

// update the income for positive transaction
function updateIncome(amount) {
    let liveIncome = initialIncome;
    liveIncome = liveIncome + amount
    income.innerHTML = `+$ ${liveIncome}`;
    initialIncome = liveIncome;
}

// update the expense for negative transaction
function updateExpense(amount) {
    let liveExpense = initialExpense;
    liveExpense = liveExpense - amount
    expense.innerHTML = `-$ ${liveExpense}`;
    initialExpense = liveExpense;
}


