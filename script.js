
document.addEventListener('DOMContentLoaded', function () {
    function updateTime() {
        const d = new Date();
        var month = d.getDate();
        var hour = d.getHours();
        var min = d.getMinutes();
        var sec = d.getSeconds();

        document.getElementById('datepick').textContent = month;
        document.getElementById('hourpick').textContent = formatTime(hour);
        document.getElementById('minutepick').textContent = formatTime(min);
        document.getElementById('secondpick').textContent = formatTime(sec);
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }
    if ('wakeLock' in navigator) {
        navigator.wakeLock.request('screen').then((wakeLock) => {
            console.log('Wake Lock active');
            // Call updateTime function every second
            setInterval(updateTime, 1000);
        }).catch((error) => {
            console.error('Wake Lock error: ', error);
        });
    }

   
    // Audio
    const song = document.getElementById('audioForBackground');
    song.play();
    
});
