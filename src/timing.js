export function timing() {
    setInterval(function() {
        score = score + cursors *5;
        document.getElementById("score").innerHTML = score;
    }, 1000)
    
    
    setInterval(function() {
        checkAchievements();
    }, 1000)
    
    setInterval(function() {
        score = score + SuperCursor * 10
        document.getElementById("score").innerHTML = score;
    },1000)
    
    
    
    
    setInterval(function() {
        Save()
    },30000)
}