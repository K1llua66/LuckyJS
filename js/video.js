const video = document.querySelector(".my_video")
const btnPlay = document.querySelector(".play")
const mute = document.querySelector(".muted")


function playPause(){
    if(video.paused){
        video.play()
        btnPlay.innerText = "pause"
    }
    
    else{
        video.pause()
        btnPlay.innerText = "play"
    }
}




function videoMute(){
    if(video.muted){
        video.muted = false
        mute.innerText = "mute"
    }
    
    else{
        video.muted = true
        mute.innerText = "unmute"
    }
}

let playList = ["video1", "video2","video3"]
let index = 2;

function prev(){
    if(index != 0){
        index--;
    }
    else{
        index = playList.length - 1
    }
    video.src = `video/${playList[index]}.mp4`
}

function next(){
    if(index < playList.length - 1){
        index++;
    }
    else{
        index = 0;
    }
    video.src = `video/${playList[index]}.mp4`
}