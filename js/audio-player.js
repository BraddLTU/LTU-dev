document.addEventListener('DOMContentLoaded', (event) => {
 var audioTrackLink = document.getElementById("audio-track-link").innerHTML;
 var audioPlayerDiv = document.getElementById("audio-player");
 audioPlayerDiv.src = audioTrackLink;
audioPlayerDiv.load;
console.log('DOM fully loaded and parsed');
});