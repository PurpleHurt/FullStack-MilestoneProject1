let di1 = 0
let di2 = 0
let di3 = 0
let di4 = 0
let di5 = 0
let di6 = 0

document.addEventListener('DOMContentLoaded', function() {

    console.log('rolled')



    document.getElementById('roll').addEventListener('click', () => {

        let rolledValue = Math.ceil(Math.random() * 6)

        if (rolledValue == 1) {
            document.getElementById('dice-image').src = 'assets/RedDice1.png'

        } else if (rolledValue == 2) {
            document.getElementById('dice-image').src = 'assets/RedDice2.png'

        } else if (rolledValue == 3) {
            document.getElementById('dice-image').src = 'assets/RedDice3.png'

        } else if (rolledValue == 4) {
            document.getElementById('dice-image').src = 'assets/RedDice4.png'

        } else if (rolledValue == 5) {
            document.getElementById('dice-image').src = 'assets/RedDice5.png'

        } else {
            document.getElementById('dice-image').src = 'assets/RedDice6.png'

        }
    })
})