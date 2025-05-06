//the save function
export function Save(){
    var gamesave = {
        score: score,
        cursorCost: cursorCost,
        cursors: cursors,
        clickPower:clickPower,
        SuperCursor: SuperCursor,
        SuperCursorCost: SuperCursorCost,
        clicks: game.clicks,
        totalMoney: game.totalMoney,
        unlockedAchievements: achievements.filter(achievement => achievement.unlocked).map(achievement => achievement.id),
        clicker: clicker,
        clickerCost: clickerCost,
        Ultraclicker: Ultraclicker,
        UltraclickerCost: UltraclickerCost 
    }
    localStorage.setItem("gamesave", JSON.stringify(gamesave))
}


export function Load() {
    var SavedGame = JSON.parse(localStorage.getItem("gamesave"))

    if (typeof SavedGame.score !== "undefined") score = SavedGame.score
    if (typeof SavedGame.cursorCost !== "undefined") cursorCost = SavedGame.cursorCost
    if (typeof SavedGame.cursors !== "undefined") cursors = SavedGame.cursors
    if (typeof SavedGame.clickPower !== "undefined") clickPower = SavedGame.clickPower
    if (typeof SavedGame.SuperCursorCost !== "undefined") SuperCursorCost = SavedGame.SuperCursorCost
    if(typeof SavedGame.SuperCursor !== "undefined") SuperCursor  = SavedGame.SuperCursor
    if(typeof SavedGame.clicks !== "undefined") game.clicks = SavedGame.clicks
    if(typeof SavedGame.totalMoney !== "undefined") game.totalMoney = SavedGame.totalMoney
    if(typeof SavedGame.unlockedAchievements !== "undefined") {
        SavedGame.unlockedAchievements.forEach(id => {
            const achievement = achievements.find(achievement => achievement.id === id);
            if (achievement) {
                achievement.unlocked = true;
            }
        });
    }
}
