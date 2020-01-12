let doc = document.getElementsByTagName('body')

chrome.runtime.sendMessage({greeting: "hello", doc}, function(response) {
    console.log(response.farewell);
  });