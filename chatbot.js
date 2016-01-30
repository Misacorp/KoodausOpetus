var button = document.getElementById("button");
var input = document.getElementById("input");
var output = document.getElementById("messages");

function viesti(msg) {
  postMessage(msg);
  output.scrollTop = output.scrollHeight;
  clearText(input);
}

function koneViesti(msg) {
  viesti("> " + msg);
}

sendButton.onclick = function() {
  viesti(getInput(input));
}

/*  -----------  KIRJOITA OHJELMAKOODI ALLE  -----------  */


var aloitusteksti = "Moikka! Mitä kuuluu?"
output.innerHTML = "> " + aloitusteksti;

