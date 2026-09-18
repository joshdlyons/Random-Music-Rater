const genSongButton = document.getElementById('get-song-button');
const submitFeedbackButton = document.getElementById('submit-rating-button');

const songTitle = document.getElementById('song-title');
const songArtist = document.getElementById('song-artist');
const feedbackFeedback = document.getElementById('submission-feedback');

const feedbackInput = document.getElementById('rating-input');

function fetchSong() {
    const song_index = rand_int(0, songs.length - 1)
    song = songs[song_index]
    songTitle.textContent = "Title: " + song.title;
    songArtist.textContent = "Artist: " + song.artist;
}

function rand_int(min, max){
    const rand_num = Math.floor(Math.random() * (max - min + 1)) + min;
    return rand_num;
}

function submit_feedback(){
    const input = parseInt(feedbackInput.value, 0)
    if (input >= 1 && input <= 5) {
        feedbackInput.value = '';
        feedbackFeedback.textContent = "Feedback received!";
        song.rating = input;
    }
    else {
        feedbackFeedback.textContent = "Feedback invalid. Please submit a value between 1 and 5.";
    }
}

const songs = [
    {
        title: 'Go Your Own Way',
        artist: 'Fleetwood Mac',
        rating: null
    },
    {
        title: 'Life in the Fast Lane',
        artist: 'Eagles',
        rating: null
    },
    {
        title: 'Don\'t Stop Believing',
        artist: 'Journey',
        rating: null
    },
    {
        title: 'Last Dance with Mary Jane',
        artist: 'Tom Petty and the Heartbreakers',
        rating: null
    },
    {
        title: 'Under the Bridge',
        artist: 'Red Hot Chili Peppers',
        rating: null
    },
]

let song = songs[0]

genSongButton.addEventListener('click', fetchSong);
submitFeedbackButton.addEventListener('click', submit_feedback);