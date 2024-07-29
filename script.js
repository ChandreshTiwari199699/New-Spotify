console.log("Welcome to my spotify.");

//initialize the variable
let songIndex=0;
let audioElement= new Audio('Ram Siya Ram.mp3');
let masterplay =document.getElementById('masterplay');
let myProgressBar =document.getElementById('myProgressBar');
let gif =document.getElementById('gif');
let masterSongName =document.getElementById('masterSongName');
let songItems= Array.from(document.getElementsByClassName('songItem'))

let song =[
    {songName: "buddha",    filePath: "songs/1.mp3",coverPath:"covers/1.jpeg"},
    {songName: "ganesh ji", filePath: "songs/2.mp3",coverPath:"covers/2.webp"},
    {songName: "mata ji",   filePath: "songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName: "hanuman ji",filePath: "songs/4.mp3",coverPath:"covers/4.jpeg"},
    {songName: "krishna ji",filePath: "songs/5.mp3",coverPath:"covers/5.webp"},
    {songName: "temple",    filePath: "songs/6.mp3",coverPath:"covers/6.jpeg"},
    {songName: "gauri maa", filePath: "songs/7.mp3",coverPath:"covers/7.jpeg"},
    {songName: "shiv ji",   filePath: "songs/8.mp3",coverPath:"covers/8.jpeg"},
    {songName: "ram sita",  filePath: "songs/9.mp3",coverPath:"covers/9.jpg"},
    {songName: "trishul",   filePath: "songs/10.mp3",coverPath:"covers/10.jpg"},
]
songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src= song[i].coverPath;
   element.getElementsByClassName("songName")[0].innerText =song[i].songName;

})

//audioElement.play();


//handle play/pausec click
masterplay.addEventListener('click', ()=>{
if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    gif.style.opacity=1;

} 
else{
    audioElement.pause();
    masterplay.classList.remove('fa-circle-pause');
    masterplay.classList.add('fa-circle-play');
    gif.style.opacity=0 ;

}
})
// Listen to event
audioElement.addEventListener('timeupdate',()=>{

//update seekbaar  
progress=parseInt((audioElement.currentTime/audioElement.duration)* 100);

myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays=()=>{
 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
element.classList.add('fa-circle-play');
 })
} 
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click' ,(e)=>{
        makeAllPlays();
       
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`; 
     
     masterSongName.innerText = song[songIndex].songName; 
        audioElement.currentTime=0;
        audioElement.play();
       gif.style.opacity= 1;
        masterplay.classList.remove('fa-circle-play');
   masterplay.classList.add('fa-circle-pause');
    })
})
document.getElementById('next').addEventListener('click', ()=>{
 if(songIndex>=9){
    songIndex=0
 }
 else{
    songIndex += 1;

 }
 audioElement.src = `songs/${songIndex+1}.mp3`;

masterSongName.innerText = song[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
   masterplay.classList.add('fa-circle-pause');

    })

    document.getElementById('previous').addEventListener('click', ()=>{
        if(songIndex<=0){
           songIndex=9 
        }
        else{
           songIndex -= 1;
       
        }
        audioElement.src = `songs/${songIndex+1}.mp3`;
    
      masterSongName.innerText = song[songIndex].songName;
               audioElement.currentTime=0;
               audioElement.play();
               masterplay.classList.remove('fa-circle-play');
          masterplay.classList.add('fa-circle-pause');
           })
        