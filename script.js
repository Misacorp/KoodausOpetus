function getInput(src) {			//	Gets input from specified source.
  var text;
  try {
    text = src.textContent;
  }
  catch(err) {
  	console.error("ERRROR: Tried to read input from invalid location.")
  }
  return text;
}

function postMessage(msg) {			//	Posts given message.
  if(msg.length > 0) {
    var text = output.innerHTML + "<br>" + msg;
    output.innerHTML = text;
  }
  else {
  	console.warn("NOTE: Empty message not posted.")
  }
}

function clearText(loc) {			//	Clears innerHTML in specified location.
  try {
  	loc.innerHTML = "";
  }
  catch(err) {
  	console.error("ERROR: Tried clearing innerHTML from invalid location.");
  }
}