let playerButton1 = document.querySelector('.left');
let playerButton2 = document.querySelector('.middle');
let reset = document.querySelector('.right');

function doAllWork(player1, buttonName){
    let player2 = ''
    if (player1 === 'player-1') {
        player2 = 'player-2';
    }
    else {
        player2 = 'player-1';
    }
    let maxScore = document.querySelector('select').value;
    let points1 = document.querySelector(`span.${player1}`);
    let points2 = document.querySelector(`span.${player2}`);
    if (!document.querySelector(buttonName).disabled){
        points1.innerText = parseInt(points1.innerText) + 1}
    if (parseInt(points1.innerText) >= maxScore) {
        let addPoints1 = document.querySelector(`.left`);
        let addPoints2 = document.querySelector(`.middle`);
        addPoints1.disabled = true;
        addPoints2.disabled = true;
        points2.style.color = 'red';
        points1.style.color = 'green';
    }
}

function addPointPlayer1() {
    doAllWork('player-1', '.left');
}

function addPointPlayer2() {
    doAllWork('player-2', '.middle');
}

function cleanScores(player){
    let points = document.querySelector(`span.${player}`);
    points.style.color = 'black';
    points.innerText = '0';
}

function resetScore() {
    cleanScores('player-1');
    cleanScores('player-2');
    let addPoints1 = document.querySelector(`.left`);
    let addPoints2 = document.querySelector(`.middle`);
    addPoints1.disabled = false;
    addPoints2.disabled = false;
}

playerButton1.addEventListener('click', addPointPlayer1);
playerButton2.addEventListener('click', addPointPlayer2);
reset.addEventListener('click', resetScore);
