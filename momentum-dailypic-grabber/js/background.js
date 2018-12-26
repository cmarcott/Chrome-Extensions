// Default new tab chrome URL
var newTabURL = "chrome://newtab/";
var currentTabURL;

// Momentum extension id (Need to access extentionurl in httprequest as chrome://newtab is explicitly not allowed as of Chrome 61)
var momentumId = "chrome-extension://laookkfknpbbblfpciffpaejjkokdgca/dashboard.html";

function parseImageURL(domContent) {
    console.log("recieved message: " + domContent);
}

function checkForNewTab() {
    console.log("momentumURL: " + newTabURL);
    console.log("TabURL: " + currentTabURL);
    if (currentTabURL == newTabURL) {
        console.debug("This is the new tab screen");
        return true;
    }
    return false;
}

function requestDOM() {

    // Currently works on non chrome:// extensions
    var backgroundPage = chrome.extension.getBackgroundPage();
    console.log(backgroundPage.document);

    // Working on getting around httprequest restrictions
   // Make a call to url, with data 

    function reqListener () {
        console.log(this.responseText);
    }
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", newTabURL);
    oReq.send();
}

chrome.tabs.onCreated.addListener(function(tab) {

    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        currentTabURL = tabs[0].url;
        if (checkForNewTab()) {
            requestDOM();
        }
    });
})