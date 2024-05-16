let randNumber = Math.floor(Math.random() * 100 + 1);
// console.log('random Number', randNumber)
const submitButton = document.getElementById('subt')
const userInput = document.getElementById('guessField')
const userGuessedNumbers = document.querySelector('.guesses')
const userRemaingAttempt = document.querySelector('.lastResult')
const givenNumber = document.querySelector('.lowOrHi')
const userHistroy = document.querySelector('.resultParas')
const p = document.createComment('p')
let prevGuessedNumbers = []
let numbGuesses = 1;
let playGame = true;
if (playGame) {
    submitButton.addEventListener('click', function (e) {
        e.preventDefault()
        const guessNum = parseInt(userInput.value)
        if (isNaN(guessNum) || guessNum < 1 || guessNum > 100) {
            alert('please enter a valid a number which should be integer and in between 1 to 100')
        }
        prevGuessedNumbers.push(guessNum)
        if (numbGuesses > 10) {
            displayGuess(guessNum)
            displayMessage(`Game is over. Random number was ${randNumber}`)
            endGame();
        } else {
            displayGuess(guessNum)
            checkGuess(guessNum)
        }
        // if (guessNum === randNumber) {
        //     displayGuess(guessNum)
        //     displayMessage(`you guessed it right `)
        //     endGame()
        // } else if (guessNum < randNumber) {
        //     displayMessage(`the guessed nummber it too low than ranom number  `)
        //     endGame()
        // }
        // userInput.value = '';
        // userGuessedNumbers.innerHTML += `${guessNum}  `;
        // numbGuesses++;
        // userRemaingAttempt.innerHTML = `${11 - numbGuesses}`
        // console.log('when submitt button clicked ', guessNum)
    })
}
// console.log('elements ', userInput)
// check the user guessed number 
function checkGuess(guessNum) {
    if (guessNum === randNumber) {
        displayMessage(`you guessed it right `)
        endGame()
    } else if (guessNum < randNumber) {
        displayMessage(`the guessed nummber it too low than ranom number  `)
        endGame()

    } else if (guessNum > randNumber) {
        displayMessage(`the guessed nummber it too high than ranom number  `)
        endGame()

    }
}
// display user guessed number 
function displayGuess(guessNum) {
    userInput.value = '';
    userGuessedNumbers.innerHTML = `${guessNum}, `;
    numbGuesses++;
    userRemaingAttempt.innerHTML = `${11 - numbGuesses}`
}

function displayMessage(message) {
    givenNumber.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    userHistroy.appendChild(p)
    playGame = false;
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randNumber = Math.floor(Math.random() * 100 + 1);
        prevGuessedNumbers = []
        numbGuesses = 1;
        userGuessedNumbers.innerHTML = ''
        userRemaingAttempt.innerHTML = `${11 - numbGuesses}`
        userInput.removeAttribute('disabled')
        userHistroy.removeChild(p)
        playGame = true;
    })
}