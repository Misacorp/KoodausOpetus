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
    return;
  }

  if(vaihe == 1) {
    if(vastaus < 18) {
      koneViesti("Oletpas nuori!");
    }
    else if (vastaus >= 18) {
      koneViesti("Vanha ja viisas!");
    }
    else {
      koneViesti("Kaikenlaista sitä kuulee...");
    }
    vaihe++;
    koneViesti("Kuinka monta kertaa huudetaan \"Eläköön!\"?");
    return;
  }

  if(vaihe == 2) {
    var lukumaara = vastaus;
    for(var a = 0; a < lukumaara; a++) {
      koneViesti("Eläköön! (" + (a+1) + ")");
    }
    vaihe++;
    koneViesti("Mikä muuten on nimesi?");
    return;
  }

  if(vaihe == 3) {
    if(yhtakuin(vastaus, "misa")) {
      koneViesti("Älä huijaa!");
    }
    else {
      koneViesti("Hauska tavata " + vastaus + ".");
    }
    vaihe++;
    return;
  }
}