// Active tab ID check 
chrome.tabs.onActivated.addListener(function(tab){
    chrome.tabs.get(tab.tabId, function(info ){
    if (/^https:\/\/www\.google/.test(info.url)){
        chrome.tabs.insertCSS(null, {file: './style.css'});
        chrome.tabs.executeScript(null,{file: './foreground.js'}, function(){
    console.log("injected")
    
   
});


    }
    })
});


     
