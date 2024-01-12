
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

    // Initial call to update time
    updateTime();

    // Set interval to update time every second
    setInterval(updateTime, 1000);

    // Audio
    const song = document.getElementById('audioForBackground');
    song.play();
    
});
