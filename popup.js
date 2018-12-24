const startScript = document.getElementById('startScript');
const stopScript = document.getElementById('stopScript');

let counter = 0;

const groupLinks = [
    "https://chat.whatsapp.com/JNubUdm0V8k9wrJ8KqqmVA",
    "https://chat.whatsapp.com/ExEvk8lCsjH0PXyzfvbZ3x",
];

const joinNewGroup = () => {

    chrome.tabs.query({ currentWindow: true, active: true },(tabs) => {

        chrome.tabs.update(
        tabs[0].id,
        {
            url: groupLinks[counter],
        });

    });

};

startScript.addEventListener('click', () => {

    chrome.webNavigation.onCompleted.addListener((details) => {
        
        if (details.url.indexOf("chat.whatsapp.com") > -1) {

            chrome.tabs.executeScript(details.tabId, {
                file: "clickJoinButton.js"
            });

        }
        else if(details.url.indexOf("web.whatsapp.com") > -1) {

            chrome.tabs.executeScript(details.tabId, {
                file: "clickSecondButton.js"
            });

        }
        else if(details.url.indexOf("google.com") > -1) {

            ++counter;

            if(counter < groupLinks.length) {
                joinNewGroup();
            }

        }

    });
    
    joinNewGroup();

});

stopScript.addEventListener('click', () => {



});

