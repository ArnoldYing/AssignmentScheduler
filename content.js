

let paragraphs = document.getElementsByTagName('p');
let headers = document.getElementsByTagName('html');

for (elt of paragraphs) {
 //   console.log(elt.innerText);
}

var longString;

for (elt of headers) {
    //longString += elt.innerText;
    console.log(elt.innerText);
}

//console.log(longString);