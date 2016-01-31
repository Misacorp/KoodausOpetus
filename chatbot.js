var button = document.getElementById("button");
var input = document.getElementById("input");
var output = document.getElementById("messages");

sendButton.onclick = function() {
  viesti(getInput(input));
  nappula();
  paivitaVaihe();
}


/*  -----------  KIRJOITA APUJUTTUJA ALLE  -----------  */

var vastaus = "";
var vaihe = 0;

function viesti(msg) {
  postMessage(msg);
  vastaus = msg;
  output.scrollTop = output.scrollHeight;
  clearText(input);
}

function koneViesti(msg) {
  viesti("> " + msg);
}

function paivitaVaihe() {
  document.getElementById("phaseCounter").innerHTML = vaihe;
}

function yhtakuin(eka, toka) {
  if(eka.trim().toUpperCase() == toka.trim().toUpperCase()) {
    return true;
  }
  return false;
}


/*  -----------  KIRJOITA OHJELMAKOODI ALLE  -----------  */


var aloitusteksti = "Moikka! Mitä kuuluu?"
output.innerHTML = "> " + aloitusteksti;

function nappula() {
  if(vaihe == 0) {
    if(yhtakuin(vastaus, "hyvää")) {
      koneViesti("Hienoa!");
    }
    else {
      koneViesti("Jaahas...");
    }
    vaihe++;
    koneViesti("Kuinka vanha olet?");
    return true;
  }

  if(vaihe == 1) {
    if(vastaus < 18) {
      koneViesti("Oletpas nuori!");
    }
    else {
      koneViesti("Vanha ja viisas!");
    }
    vaihe++;
    koneViesti("Kuka on paras kaverisi?");
    return true;
  }
}