
function randomNoppa() {
    return Math.floor(Math.random() * 6) + 1;
}

const diceDiv = document.getElementById('dice');

diceDiv.addEventListener('click', function() {
    const uusiLuku = randomNoppa();

    const noppaKuva = document.querySelector('#dice img');
    noppaKuva.src = `./img/${uusiLuku}.png`;
});