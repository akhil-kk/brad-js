/*
Game function
- player must guess a number between a min and max
- player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose.
- let player choose to play again.
*/

//  Game values
let min = 1,
    max = 10;
    winningNum = 2,
    guessesLeft = 3;

// ui elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn');
    guessInput = document.querySelector('#guess-input');
    message = document.querySelector('.message');

// Assign UI and max

minNum.textContent = min;
maxNum.textContent = max;

// listen for guests

guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);

    // validate

    if(isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // check if won
    if(guess === winningNum) {
        gameOver(true, `${winningNum} is correct, YOU WIN!`)
    } else {
        // wrong number
        guessesLeft -= 1;

        if(guessesLeft === 0) {
           // game over - lost 
           gameOver(false, ` Game Over, you lost. The correct mumber was ${winningNum}`)

        } else {
            // game continues - answer wrong

            // change border color
           guessInput.style.borderColor = 'red';

           // clear input
           guessInput.value = '';

           //Tell user its the wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
        }
    }
});

// Game over
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
    //disable input
    guessInput.disabled = true;
    // change border color
    guessInput.style.borderColor = 'color';
    // set text color
    message.style.color = color;
    // set message
    setMessage(msg);
}

// set message

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}





