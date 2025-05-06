export function displayAchievement(achievement) {
    const notification = document.createElement("div");
    notification.className = "fixed top-5 right-5 bg-green-500 text-white p-4 rounded-lg shadow-lg text-lg";
    notification.innerText = `🎉 Achievement Unlocked: ${achievement.name} - ${achievement.description}`;
    
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 5000);
}



export function checkAchievements() {
    achievements.forEach(achievement => {
        if (!achievement.unlocked && achievement.condition(game)) {
            achievement.unlocked = true;
            displayAchievement(achievement);
            saveAchievements();
        }
    });
}