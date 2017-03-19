window.onload = function() {
    // Displaying Score
    var score = 0;
    var currentScore = document.getElementById('currentScore');
    currentScore.innerHTML = "Score: " + calculateScore(score);
    // Displaying Time
    var currentTime = document.getElementById('currentTime');
    var currentdate = new Date(); 
    var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    currentTime.innerHTML = datetime;
};

function calculateScore(s) {
    return s;
}
