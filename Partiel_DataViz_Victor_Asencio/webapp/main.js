function increase() {
    let counter = document.getElementById('counter');
    counter.innerText = parseInt(counter.innerText) + 1;
}

function decrease() {
    let counter = document.getElementById('counter');
    counter.innerText = parseInt(counter.innerText) - 1;
}

function reset() {
    let counter = document.getElementById('counter');
    counter.innerText = 0;
}

function tryToWin() {
    let counter = document.getElementById('counter');
    let randomValue = Math.floor(Math.random() * 101); 
    counter.innerText = randomValue;
    if (randomValue === 69) {
        alert("Félicitations! Vous avez gagné!");
    }
}
