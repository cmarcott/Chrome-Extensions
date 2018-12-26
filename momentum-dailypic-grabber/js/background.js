var momentumId = "chrome://newtab/";
var tabURL;

chrome.tabs.onCreated.addListener(function(tab) {
    
    function checkForNewTab() {
        
        console.log("momentumURL: " + momentumId);
        console.log("TabURL: " + tabURL);
        if (tabURL == momentumId) {
            console.debug("This is the new tab screen");
            return true;
        }
        return false;
        
    }

    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        tabURL = tabs[0].url;
        console.log("TabURL: " + tabURL);
        if (checkForNewTab()) {
            console.log("Was True");
        } else {
            console.log("Was False");
        }
    });


})