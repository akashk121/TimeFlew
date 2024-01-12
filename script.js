

document.addEventListener('DOMContentLoaded', function () {
const d=new Date();
var month = d.getDate();  
document.getElementById('datepick').textContent=month;


//audio
const song=document.getElementById('audioForBackground')
song.play();
});
// const fullscreenButton = document.getElementById('fullscreenButton');
//     fullscreenButton.addEventListener('click', toggleFullscreen);

// function toggleFullscreen() {
//     if (!document.fullscreenElement) {
//         // If not in fullscreen, go fullscreen
//         document.documentElement.requestFullscreen();
//     } else {
//         // If already in fullscreen, exit fullscreen
//         if (document.exitFullscreen) {
//             document.exitFullscreen();
//         }
//     }
// }