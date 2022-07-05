let myAudio = document.getElementById("audio");
let btn = document.getElementById("mute");


btn.addEventListener('click', () => {
    if ( myAudio.muted == true){
        myAudio.muted = false;

    }
    else{
        myAudio.muted = true;
    }
   
});