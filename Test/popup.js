import fetchApiData from "./APIcalll.js";


function onWindowLoad() {
    var message = document.querySelector('#message');

    chrome.tabs.query({ active: true, currentWindow: true }).then(function (tabs) {
        var activeTab = tabs[0];
        var activeTabId = activeTab.id;

        return chrome.scripting.executeScript({
            target: { tabId: activeTabId },
            // injectImmediately: true,  // uncomment this to make it execute straight away, other wise it will wait for document_idle
            func: DOMtoString,
            // args: ['body']  // you can use this to target what element to get the html for
        });

    }).then(function (results) {
        console.log(results);
        const res = new DOMParser().parseFromString(results[0].result, "text/html");
        console.log(res.getElementsByClassName("hP")[0].innerText)
        console.log(res.getElementsByClassName("ii gt")[0].innerText)



    }).catch(function (error) {
        console.log(error)
        // message.innerText = 'There was an error injecting script : \n' + error.message;
    });
}

window.onload = onWindowLoad;

function DOMtoString(selector) {
    // return document.getElementsByClassName("hP")
    if (selector) {
        selector = document.querySelector(selector);
        if (!selector) return "ERROR: querySelector failed to find node"
    } else {
        selector = document.documentElement;
    }
    return selector.outerHTML;
}


// const button = document.getElementById("but");
// function test(e) {
//     console.log(e)
// }


// button.addEventListener('click', async () => {

// });