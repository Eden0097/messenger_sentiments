var score = 0;
window.onload = function() {
    // Displaying Score
    var currentScore = document.getElementById('currentScore');
    currentScore.innerHTML = "Score: " + score;
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

function averageSentiments(sentiments) {
    for (var i = 0; i < sentiments.length; i++) {
        var sent = parseFloat(sentiments[i]);
        score = score + sent;
    }
    score = score / sentiments.length;
}