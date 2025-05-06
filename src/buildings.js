
//buy cursors funciton
export function BuyCursors() {
    if(score >= cursorCost) {
        score = score - cursorCost;
        cursors = cursors + 1;
        cursorCost = Math.round(cursorCost * 5);
        document.getElementById("cursors").innerHTML = cursors;
        document.getElementById("score").innerHTML = score;
        document.getElementById("cursorCost").innerHTML = cursorCost;
    }
}


//buy super cursors function 
export function BuySuperCursors() {
    if (score >= SuperCursorCost) {
        score = score - SuperCursorCost
        SuperCursor = SuperCursor + 1
        SuperCursorCost = Math.round(SuperCursorCost * 10)
        document.getElementById("supercursorcost").innerHTML = SuperCursorCost
        document.getElementById("score").innerHTML = score
        document.getElementById("supercursor").innerHTML = SuperCursor
    }
}

