
  // receive message from content.js then send it to database

  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");

      console.log(request.doc);
      if (request.greeting == "hello")
        sendResponse({farewell: "goodbye"});
    });