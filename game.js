const rangeInput = document.querySelector("#number-range");
const selectInput = document.querySelector("#number-select");
let randomNumber = Math.floor(Math.random()*(parseInt(rangeInput.value)+1));
const btn = document.querySelector("button");
const h4 = document.querySelector("h4");


// console.log(machineChosenNumber);

function setRandomNumber() {
    randomNumber = Math.floor(Math.random()*(parseInt(rangeInput.value)+1));
}

function handleNumber(event) {
    event.preventDefault();
    setRandomNumber();
    handleAnswer();
}

function handleAnswer() {
    if (randomNumber === parseInt(selectInput.value)) {
    h4.innerText = `You chose:${selectInput.value}, the machine chose:${randomNumber}. You won!`
    } else {
    h4.innerText = `You chose:${selectInput.value}, the machine chose:${randomNumber}. You lose!`
    }
}

btn.addEventListener("click", handleNumber);