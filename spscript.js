console.log('Welcome');
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById("masterPlay");
let myprogressBar=document.getElementById("myProgressBar");
let gif=document.getElementById("gif");                                                                         
let songItems=Array.from(document.getElementsByClassName("songItem"));
// let itemPlay=Array.from(document.getElementsByClassName("songItemPlay"));
let songs=[
    {songName:"My music",filePath:'songs/1.mp3',coverPath:'covers/1.jpg'},
    {songName:"Sathiya",filePath:'songs/2.mp3',coverPath:'covers/2.jpg'},
    {songName:"Dynamite",filePath:'songs/3.mp3',coverPath:'covers/3.jpg'},
    {songName:"Butter",filePath:'songs/4.mp3',coverPath:'covers/4.jpg'},
    {songName:"Believer",filePath:'songs/5.mp3',coverPath:'covers/5.jpg'},
    {songName:"As it was",filePath:'songs/6.mp3',coverPath:'covers/6.jpg'},
    {songName:"Let mi love you",filePath:'songs/7.mp3',coverPath:'covers/7.jpg'},
   
]

songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
    i++;
    
})


// play and pause click
masterPlay.addEventListener('click',()=>{
    
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        
    }
    else{
        
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        audioElement.pause();
       
    }
})


//listen to events
audioElement.addEventListener('timeupdate',()=>{
    
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressBar.value=progress;

    //seekbar update
})
myprogressBar.addEventListener('change',()=>{
   
    audioElement.currentTime= myprogressBar.value*audioElement.duration/100;
})

const makeAllPlay=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add("fa-play-circle");
    })
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    
    element.addEventListener("click",(e)=>{
        console.log(e.target);
       
        makeAllPlay();
        songIndex=parseInt(e.target.id);
        
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add('fa-pause-circle');
  
        audioElement.src=`songs/${songIndex+1}.mp3`;
      
        audioElement.currentTime=0;
        audioElement.play();
       
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add('fa-pause-circle');
        

    })
})

document.getElementById("next").addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex=0;
    }
    else
    {
        songIndex=songIndex+1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
   
    audioElement.currentTime=0;
    audioElement.play();
   
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById("pre").addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else
    {
        songIndex=songIndex-1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
      
    audioElement.currentTime=0;
    audioElement.play();
   
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add('fa-pause-circle');
})
