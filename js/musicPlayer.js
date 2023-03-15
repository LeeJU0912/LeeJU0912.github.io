const audioContainer = document.querySelector('#audioContainer');
const playBtn = document.querySelector('.js-playBtn');
const stopBtn = document.querySelector('.js-stopBtn');
const prevBtn = document.querySelector('.js-prevBtn');
const nextBtn = document.querySelector('.js-nextBtn');
const showMusicText = document.getElementById("musicText");

const MUSIC_COUNT = 3;
let currentAudio = 0;

const audioList = [
    "NEFFEX - Fight Back",
    "NEFFEX - Grateful",
    "Tobu & Itro - Sunburst",
];

function playAudio() {
    //audioContainer.volume = 0.2;
    audioContainer.loop = true;
    const playAudio = audioContainer.play();

    showMusicText.innerHTML = audioList[currentAudio] + " #NoCopyrightMusic";

    if (playAudio !== undefined) {
        playAudio.then((_) => {

        }).catch((error) => {
        });
    }
}

function stopAudio() {
    audioContainer.pause();
}

function loadAudio() {
    const source = document.querySelector('#audioSource');
    const currentSong = audioList[currentAudio];
    source.src = `audio/${currentSong}.mp3`;
    audioContainer.load();
    playAudio();
}

function handlePrevButtonClick() {
    if (currentAudio > 0) {
        currentAudio--;
    }
    else {
        currentAudio = MUSIC_COUNT - 1;
    }

    audioContainer.pause();
    loadAudio();
}

function handleNextButtonClick() {
    if (currentAudio < MUSIC_COUNT - 1) {
        currentAudio++;
    }
    else {
        currentAudio = 0;
    }

    audioContainer.pause();
    loadAudio();
}

playBtn.addEventListener('click', loadAudio);
stopBtn.addEventListener('click', stopAudio);
prevBtn.addEventListener('click', handlePrevButtonClick);
nextBtn.addEventListener('click', handleNextButtonClick);