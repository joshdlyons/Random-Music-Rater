const button = document.getElementById('get-song-button');
const songTitle = document.getElementById('song-title');
const songArtist = document.getElementById('song-artist');

function fetchSong() {
    const song_index = rand_int(0, songs.length - 1)
    const song = songs[song_index]
    songTitle.textContent = "Title: " + song.title;
    songArtist.textContent = "Artist: " + song.artist;

}

function rand_int(min, max){
    const rand_num = Math.floor(Math.random() * (max - min + 1)) + min;
    return rand_num;
}

const songs = [
    {
        title: 'Go Your Own Way',
        artist: 'Fleetwood Mac'
    },
    {
        title: 'Life in the Fast Lane',
        artist: 'Eagles'
    },
    {
        title: 'Don\'t Stop Believing',
        artist: 'Journey'
    },
    {
        title: 'Last Dance with Mary Jane',
        artist: 'Tom Petty and the Heartbreakers'
    },
    {
        title: 'Under the Bridge',
        artist: 'Red Hot Chili Peppers'
    },
]


button.addEventListener('click', fetchSong);