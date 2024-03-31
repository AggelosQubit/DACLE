// Get the audio element
window.onload = function () {
    var audio = document.getElementById("myAudio");
    audio.volume = 0.1;

    var constraints = { audio: true }
    window.navigator.mediaDevices.getUserMedia(constraints)
        .then((stream) => {
            //var audioContext = new AudioContext();
            //audioContext.resume();
            audio.play();
        })
}