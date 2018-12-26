var momentumId = "chrome://newtab/";
var tabURL;

document.addEventListener('DOMContentLoaded', function() {
    
    function checkForNewTab() {
        
        console.log("momentumURL: " + momentumId);
        console.log("TabURL: " + tabURL);
        if (tabURL == momentumId) {
            $('#main-title').html('Hello');
        } else {
            $('#main-title').text('Not Hello');
        }
        //document.getElementById("main-title").innerHTML = "Title";
    }

    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        tabURL = tabs[0].url;
        console.log("TabURL: " + tabURL);
        checkForNewTab();
    });


})