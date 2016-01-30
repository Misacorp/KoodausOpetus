var button = document.getElementById("button");
var input = document.getElementById("input");
var output = document.getElementById("messages");
var lastMessage;

sendButton.onclick = function() {
  postMessage();
  clearInput();
}

function postMessage() {
  lastMessage = document.getElementById("input").innerHTML;    // Get message fron input
  if(lastMessage.length > 0) {
    var text = output.innerHTML + "<br>" + lastMessage;          // Add last message to existing messages
    output.innerHTML = text;                                     // Update messages
  }
}

function clearInput() {
  input.innerHTML = "";
}