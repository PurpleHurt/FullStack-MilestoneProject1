var player = 0;
var playerArray = [];
var playerNameInput = document.getElementById("getPlayerName")


function addPlayer() {
    playerArray.push(playerNameInput.value);


    localStorage.setItem("playerArray", JSON.stringify(playerArray))
    console.log(localStorage.playerArray)


}

//playerTh.textContent = playerNameInput.value;