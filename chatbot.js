var button = document.getElementById("button");
var input = document.getElementById("input");
var output = document.getElementById("messages");

sendButton.onclick = function() {
  viesti(getInput(input));
  nappula();
  paivitaVaihe();
}


/*  -----------  KIRJOITA APUJUTTUJA ALLE  -----------  */

var vastaus = "";       //  Viimeisin lähetetty viesti
var vaihe = 0;          //  Missä vaiheessa ohjelmaa mennään / kuinka mones kysyms

//  Ohjelman alussa suoritettavat jutut:
paivitaVaihe();

//  Lähetä viesti käyttäjänä.
function viesti(msg) {
  postMessage(msg);
  vastaus = msg;
  output.scrollTop = output.scrollHeight;
  clearText(input);
}

//  Lähetä viesti robottina.
function koneViesti(msg) {
  viesti("> " + msg);
}

//  Päivitä ohjelman vaiheen numero nettisivulle.
function paivitaVaihe() {
  document.getElementById("phaseCounter").innerHTML = vaihe;
}

//  Vertaa kahta sanaa keskenään.
function yhtakuin(eka, toka) {
  if(eka.trim().toUpperCase() == toka.trim().toUpperCase()) {
    return true;
  }
  return false;
}


/*  -----------  KIRJOITA OHJELMAKOODI ALLE  -----------  */


var aloitusteksti = "Moikka! Mitä kuuluu?"
output.innerHTML = "> " + aloitusteksti;

