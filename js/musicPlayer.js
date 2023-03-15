const audioContainer = document.querySelector('#audioContainer');
const playBtn = document.querySelector('.js-playBtn');
const stopBtn = document.querySelector('.js-stopBtn');
const nextBtn = document.querySelector('.js-nextBtn');

const MUSIC_COUNT = 2;

let currentAudio = 0;

const audioList = ["Fight Back", "Grateful", "Tobu & Itro - Sunburst"];

function playAudio() {
    //audioContainer.volume = 0.2;
    audioContainer.loop = true;
    const playAudio = audioContainer.play();

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

function handleNextButtonClick() {
    if (currentAudio < MUSIC_COUNT) {
        currentAudio++;
    }
    else {
        currentAudio = 1;
    }

    audioContainer.pause();
    loadAudio();
}

playBtn.addEventListener('click', loadAudio);
stopBtn.addEventListener('click', stopAudio);
nextBtn.addEventListener('click', handleNextButtonClick);