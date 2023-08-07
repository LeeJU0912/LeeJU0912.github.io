const audioContainer = document.querySelector('#audioContainer');
const playBtn = document.querySelector('.js-playBtn');
const stopBtn = document.querySelector('.js-stopBtn');
const prevBtn = document.querySelector('.js-prevBtn');
const nextBtn = document.querySelector('.js-nextBtn');
const showMusicText = document.getElementById("musicText");
const musicLink = document.getElementById("musicLink");

const MUSIC_COUNT = 4;
let currentAudio = 0;

const audioList = [
    "Tobu & Itro - Sunburst [Released by NCS]",
    "NEFFEX - Grateful",
    "Egzod - Rise Up (ft. Veronica Bravo & M.I.M.E) [Released by NCS]",
    "NEFFEX - Fight Back"
];

const audioLink = [
    "https://youtu.be/1-0-4HqyvXE",
    "https://youtu.be/83RUhxsfLWs",
    "https://youtu.be/aifDMH1p3zw",
    "https://youtu.be/CYDP_8UTAus"
]

function playAudio() {
    //audioContainer.volume = 0.2;
    audioContainer.loop = true;
    const playAudio = audioContainer.play();



    if (playAudio !== undefined) {
        playAudio.then((_) => {
            showMusicText.innerHTML = audioList[currentAudio] + " #NoCopyrightMusic";
            musicLink.href = audioLink[currentAudio];
        }).catch((error) => {
        });
    }
}

function stopAudio() {
    showMusicText.innerHTML = "";
    musicLink.href = "https://youtu.be/c56t7upa8Bk"; // 이스터에그
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