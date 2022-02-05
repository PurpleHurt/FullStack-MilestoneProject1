let img = [
    "assets/RedDice1.png",
    "assets/RedDice2.png",
    "assets/RedDice3.png",
    "assets/RedDice4.png",
    "assets/RedDice5.png",
    "assets/RedDice6.png"
];
let dice = document.querySelectorAll("img");

function roll() {

    let diOne = Math.ceil(Math.random() * 6);
    let diTwo = Math.ceil(Math.random() * 6);
    let diThree = Math.ceil(Math.random() * 6);
    let diFour = Math.ceil(Math.random() * 6);
    let diFive = Math.ceil(Math.random() * 6);
    let diSix = Math.ceil(Math.random() * 6);

    console.log(diOne, diTwo, diThree, diFour, diFive, diSix)

    document.querySelector("#di1").setAttribute("src", img[diOne - 1]);
    document.querySelector("#di2").setAttribute("src", img[diTwo - 1]);
    document.querySelector("#di3").setAttribute("src", img[diThree - 1]);
    document.querySelector("#di4").setAttribute("src", img[diFour - 1]);
    document.querySelector("#di5").setAttribute("src", img[diFive - 1]);
    document.querySelector("#di6").setAttribute("src", img[diSix - 1]);

}