let doc = document.getElementsByTagName('body')
var text;

for (elt of doc) {	
    console.log(elt.innerText);
    text += elt.innerText;
}

chrome.runtime.sendMessage(text, function(response) {
  });