export function getmoney() {
    score = score + clickPower;
    game.clicks++;
    game.totalMoney += clickPower;
    
    document.getElementById("score").innerHTML = score;
}