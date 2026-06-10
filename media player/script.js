const songs = [
{
name:"Song 1",
path:"songs/song1.mpeg"
},
{
name:"Song 2",
path:"songs/song2.mp3"
},
{
name:"Song 3",
path:"songs/song3.mp3"
}
];

let songIndex = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const playBtn = document.getElementById("playBtn");

loadSong(songIndex);

function loadSong(index){
audio.src = songs[index].path;
title.innerText = songs[index].name;
}

function playPause(){

if(audio.paused){
audio.play();
playBtn.innerHTML =
'<i class="fas fa-pause"></i>';
}
else{
audio.pause();
playBtn.innerHTML =
'<i class="fas fa-play"></i>';
}

}

function nextSong(){

songIndex++;

if(songIndex >= songs.length){
songIndex = 0;
}

loadSong(songIndex);
audio.play();

playBtn.innerHTML =
'<i class="fas fa-pause"></i>';

}

function prevSong(){

songIndex--;

if(songIndex < 0){
songIndex = songs.length - 1;
}

loadSong(songIndex);
audio.play();

playBtn.innerHTML =
'<i class="fas fa-pause"></i>';

}

audio.addEventListener("timeupdate",()=>{

progress.max = audio.duration;

progress.value = audio.currentTime;

});

progress.addEventListener("input",()=>{

audio.currentTime = progress.value;

});

volume.addEventListener("input",()=>{

audio.volume = volume.value;

});

audio.addEventListener("ended",()=>{

nextSong();

});
document.addEventListener("keydown",(e)=>{

if(e.code==="Space"){
e.preventDefault();
playPause();
}

if(e.code==="ArrowRight"){
nextSong();
}

if(e.code==="ArrowLeft"){
prevSong();
}

});