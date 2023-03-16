const rockButton = document.querySelector('.rock');
const scissorsButton = document.querySelector('.scissors');
const paperButton = document.querySelector('.paper');
const cpuResult = document.getElementById('cpu-result');
const fightResult = document.getElementById('fightResult');
const userScore = document.getElementById('userScore');
const cpuScore = document.getElementById('cpuScore');
const fightScore = document.getElementById('fightScore');

const RSP = ["바위", "가위", "보"];

let userCount = 0;
let cpuCount = 0;
let fightCount = 0;

function RCP(user) {
    fightCount++;
    fightScore.innerHTML = fightCount + "전";

    const CPU = Math.floor(Math.random() * 3);

    cpuResult.innerHTML = RSP[CPU];

    if (user === CPU) {
        DRAW();
    }
    else if (user === 0) {
        if (CPU === 1) {
            WIN();
        }
        else if (CPU === 2) {
            LOSE();
        }
    }
    else if (user === 1) {
        if (CPU === 0) {
            LOSE();
        }
        else if (CPU === 2) {
            WIN();
        }
    }
    else if (user === 2) {
        if (CPU === 0) {
            WIN();
        }
        else if (CPU === 1) {
            LOSE();
        }
    }
}

function rock() {
    RCP(0);
}
function scissors() {
    RCP(1);
}
function paper() {
    RCP(2);
}

function DRAW() {
    fightResult.innerHTML = "비겼습니다!";
}

function WIN() {
    fightResult.innerHTML = "이겼습니다!";
    userCount++;
    userScore.innerHTML = userCount;
}

function LOSE() {
    fightResult.innerHTML = "졌습니다!";
    cpuCount++;
    cpuScore.innerHTML = cpuCount;
}

rockButton.addEventListener('click', rock);
scissorsButton.addEventListener('click', scissors);
paperButton.addEventListener('click', paper);