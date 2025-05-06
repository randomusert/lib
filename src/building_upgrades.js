// building upgrades

export function disableclickerbuy(clickerbuy) {
    clickerbuy.addEventListener("click", () => {
        clickerbuy.disabled = true
    })
}

export function buyclicker() {
    if (score == clickerCost) {
        clicker++
        clickPower += 5

        score = score - clickerCost
        disableclickerbuy()
    }
}



export function disableUltraclicker(ultraclickerbuy) {
    ultraclickerbuy.addEventListener("click", () => {
        ultraclickerbuy.disabled = true
    })
}

export function Ultraclickerbuys() {
    if (score == UltraclickerCost) {
       Ultraclicker++;
       clickPower += 20
       score = score - UltraclickerCost
       disableUltraclicker()
    } 
}