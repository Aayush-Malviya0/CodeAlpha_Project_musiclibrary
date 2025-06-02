const songs = [
  { title: "Mai Sabse Badi Hai Tu", file: "audio/Mai_Sabse_Badi_Hai_Tu_{Fadu_Vibration_Mix}_DJs_of_amit(128k).mp3" },
  { title: "Non stop bhakti", file: "audio/Mata_pujan_non_stop(_2k20)DJ_mp3_dj_osl_VS_DJ_sid_love_on_DJ_hyk(128k).mp3" },
  { title: "Mere Wala Sardar", file: "audio/Mere_Wala_Sardar_(Full_Song)___Jugraj_Sandhu__Latest_Punjabi_Song__New_Punjabi_Songs_2018(128k).mp3" },
  { title: "Mujhe Sajan Ke Ghar Jana hai", file: "audio/Mujhe_Sajan_Ke_Ghar_Jana_hai_Tapori_vs_Octopad_Mix(128k).mp3" },
  { title: "MUJHKO RANA JI MAAF KARNA", file: "audio/MUJHKO_RANA_JI_MAAF_KARNA_-FAST_GMS_REMIX-_DJ_SAGAR_RATH_&_DJ_SONU_SINGH(128k).mp3" },
  { title: "Murga Dance Music", file: "audio/Murga_Dance_Music___मरुग्ा_डासं_मय्जूिक__Ku_Ku_Ku__छाती_फाड_हारड_्डी_ज_मेिकस_्_Killar_Bass_Mix(128k).mp3" }
];

let songIndex = 0;

const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const title = document.getElementById('title');
const volumeRange = document.getElementById('volumeRange');
const songList = document.getElementById('songList');

function loadSong(index) {
  title.innerText = songs[index].title;
  audio.src = songs[index].file;
}

function playSong() {
  audio.play();
  playBtn.innerText = '⏸️';
}

function pauseSong() {
  audio.pause();
  playBtn.innerText = '▶️';
}

function togglePlay() {
  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

function nextSong() {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songIndex);
  playSong();
}

function prevSong() {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songIndex);
  playSong();
}

function updateVolume() {
  audio.volume = volumeRange.value;
}

function renderSongList() {
  songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.innerText = song.title;
    li.addEventListener('click', () => {
      songIndex = index;
      loadSong(songIndex);
      playSong();
    });
    songList.appendChild(li);
  });
}

// Event Listeners
playBtn.addEventListener('click', togglePlay);
nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);
volumeRange.addEventListener('input', updateVolume);

// Initialize
loadSong(songIndex);
renderSongList();
