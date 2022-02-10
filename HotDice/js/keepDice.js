function keepDice(url) {
    let dice = newDice(url)
    dice.addEventListener('click', () => {
        let holdDiceKept = document.createElement('img')
        holdDiceKept.src = url;
        holdDice.append(holdDiceKept)
    })
    return dice
}







function keepDice() {
    let holdDice = document.createElement.ement('span')
    holdDice.style.width = '20%'
    holdDice.style.heigth = '100%'
    holdDice.style.display = 'flex'
    holdDice.style.flexDirection = 'column'
    holdDice.style.alignItems = 'center'
    holdDice.style.justifyContent 'space-evenly'
    holdDice.style.border = '1px black'
    holdDice.style.backgroundColor 'red'
    document.body.append(holdDice)
    return holdDice
}