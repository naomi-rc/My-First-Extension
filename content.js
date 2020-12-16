//var firstUrl = $("a[href^='http']").eq(0).attr("href");
//alert(firstUrl);
console.log("content.js code reached");
/**
 * Content scripts have some limitations. 
 * They cannot use chrome.* APIs, with the exception of 
 * extension, i18n, runtime, and storage.
 */

 chrome.runtime.onMessage.addListener(
     function(request, sender, sendResponse){
         if(request.message === "clicked_browser_action"){
            var firstUrl = $("a[href^='http']").eq(0).attr("href");
            console.log(firstUrl);
            //chrome.tabs.create({"url": "http://google.com"}); cannot be used in content scripts
            
            chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstUrl});
        
        }
     }
 );