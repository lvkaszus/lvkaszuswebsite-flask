/*
    @lvkaszus : lvkasz.us
    Minimal Audio Player - JS + CSS (audioplayer.js)

    GitHub: https://github.com/lvkaszus/lvkaszuswebsite-core

    "I tried to make my code as less spaghetti as possible :(" - lvkaszus 2023
*/


let yourSongFile = "https://your-url-here.com/static/files/music/your_song_here.mp3";
let yourSongName = "lvkaszus - Your Song Here";





var lvkaszusPlayerDiv = document.getElementById('lvkaszusPlayer');
lvkaszusPlayerDiv.style.width = "40%";
lvkaszusPlayerDiv.style.margin = "0 auto";


var audioTag = document.createElement('audio');
audioTag.id = "myAudio";
audioTag.src = yourSongFile;
document.getElementById('lvkaszusPlayer').appendChild(audioTag);

var audioControlsDiv = document.createElement('div');
audioControlsDiv.id = "audioControls";
document.getElementById('lvkaszusPlayer').appendChild(audioControlsDiv);

var playButtonTag = document.createElement('button');
playButtonTag.id = "playBtn";
playButtonTag.style.backgroundColor = "transparent";
playButtonTag.style.border = "none";
playButtonTag.style.color = "white";
playButtonTag.style.fontSize = "16px";
playButtonTag.style.cursor = "pointer";
playButtonTag.style.padding = "10px";
playButtonTag.style.margin = "2px 0 5px 0";
playButtonTag.innerHTML = '<i class="fa-solid fa-play"></i>';
document.getElementById('audioControls').appendChild(playButtonTag);

var pauseButtonTag = document.createElement('button');
pauseButtonTag.id = "pauseBtn";
pauseButtonTag.style.backgroundColor = "transparent";
pauseButtonTag.style.border = "none";
pauseButtonTag.style.color = "white";
pauseButtonTag.style.fontSize = "16px";
pauseButtonTag.style.cursor = "pointer";
pauseButtonTag.style.padding = "10px";
pauseButtonTag.style.margin = "2px 0 5px 0";
pauseButtonTag.innerHTML = '<i class="fa-solid fa-pause"></i>';
document.getElementById('audioControls').appendChild(pauseButtonTag);

var progressContainerDiv = document.createElement('div');
progressContainerDiv.id = "progressContainer";
progressContainerDiv.style.width = "100%";
document.getElementById('audioControls').appendChild(progressContainerDiv);

var progressBarDiv = document.createElement('div');
progressBarDiv.id = "progressBar";
progressBarDiv.style.backgroundColor = "white";
progressBarDiv.style.color = "white";
progressBarDiv.style.width = "100%";
progressBarDiv.style.height = "2px";
progressBarDiv.style.margin = "5px 0 10px 0";
document.getElementById('audioControls').appendChild(progressBarDiv);

var currentTimeDiv = document.createElement('div');
currentTimeDiv.id = "currentTime";
currentTimeDiv.style.textAlign = "center";
currentTimeDiv.style.color = "white";
currentTimeDiv.style.fontSize = "14px";
document.getElementById('audioControls').appendChild(currentTimeDiv);

var nowPlayingParagraph = document.createElement('p');
nowPlayingParagraph.id = "currentSongName";
nowPlayingParagraph.style.fontWeight = "600";
nowPlayingParagraph.style.fontSize = "12px";
nowPlayingParagraph.innerHTML = 'Aktualna piosenka: <span id="currentSongTitle">' + yourSongName + '</span>';
document.getElementById('lvkaszusPlayer').appendChild(nowPlayingParagraph);
document.getElementById('currentSongTitle').style.fontWeight = "300";



const audio = document.getElementById('myAudio');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const progress = document.getElementById('progressBar');
const time = document.getElementById('currentTime');

// Auto-play audio
audio.play();

playBtn.addEventListener('click', () => {
  audio.play();
});

pauseBtn.addEventListener('click', () => {
  audio.pause();
});

audio.addEventListener('timeupdate', () => {
  const duration = audio.duration;
  const currentTime = audio.currentTime;
  const remainingTime = duration - currentTime;
  const progressPercent = ((duration - remainingTime) / duration) * 100;
  progress.style.width = `${progressPercent}%`;
  const minutes = Math.floor(remainingTime / 60);
  const seconds = Math.floor(remainingTime % 60);
  time.textContent = `-${minutes}:${seconds.toString().padStart(2, '0')}`;
});
