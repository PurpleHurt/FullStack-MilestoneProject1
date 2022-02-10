console.log(localStorage.playerArray)


function poplulatePlayers() {
    var playerNames = JSON.parse(localStorage.getItem("playerArray"))
    console.log(playerNames)

}



poplulatePlayers()

//var thead = document.createElement('head');
//for (var i = 0; i < playerArray.length; i++) {
//    thead.appendChild(document.createElement("th"))
//    appendChild(document.createTextNode(playerArray[i]));
//}