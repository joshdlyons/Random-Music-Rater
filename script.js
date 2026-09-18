const button = document.getElementById('get-song-button');
const songTitle = document.getElementById('song-title');

function fetchSong() {
    const num = Math.random();

    songTitle.textContent = num;
}

button.addEventListener('click', fetchSong);