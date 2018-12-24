const JOIN_BUTTON_CLASS = "PNlAR";
const GROUP_HEADING_CLASS = "_1wjpf";
const INPUT_CLASS = "_2S1VP";
const BUTTON_SEND_CLASS = "._35EW6";

const checkMessageStatus = () => {
    const unsentMessage = Array.prototype.filter.call(document.querySelectorAll('[data-icon]'), obj => obj.getAttribute('data-icon') === "msg-time" ? true : false);
    if(unsentMessage.length > 0){
        window.location.replace("https://www.google.com");
    }
    else {
        setTimeout(checkMessageStatus, 50);
    }
}

const dispatch = (input, message) =>  {
    //InputEvent = Event || InputEvent;
    var evt = new InputEvent('input', {
        bubbles: true
    });
    input.innerHTML = message;
    input.dispatchEvent(evt);
    document.querySelector(BUTTON_SEND_CLASS).click();
    setTimeout(checkMessageStatus, 50);
}

const clickButton = () => {
    const selectButton = document.getElementsByClassName(JOIN_BUTTON_CLASS)[0];
    if(selectButton && selectButton.innerHTML.indexOf("roup") > -1) {
        selectButton.click();
        const input = document.getElementsByClassName(INPUT_CLASS + " copyable-text selectable-text")[0];
        dispatch(input, "testing");
    }
    else {
        setTimeout(clickButton, 50);
    }
}

setTimeout(clickButton, 200);