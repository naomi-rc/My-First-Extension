chrome.browserAction.onClicked.addListener(function(tab){

    chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
    });
});

//background.js does not have access to the page, only the browser action

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        if(request.message === "open_new_tab"){
           var firstUrl = request.url;
           console.log(firstUrl);
           chrome.tabs.create({"url": firstUrl}); 
           
           //chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstUrl});
       
       }
    }
);