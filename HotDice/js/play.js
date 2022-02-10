console.log(localStorage.playerArray)


function poplulatePlayers() {
    var playerNames = JSON.parse(localStorage.getItem("playerArray"))
    console.log(playerNames)
    var thead = document.createElement('head');
    for (var i = 0; i < playerArray.length; i++) {
        thead.appendChild(document.createElement("th"))

    }
}



poplulatePlayers()

//appendChilde(document.createTextNode(playerArray[i]));