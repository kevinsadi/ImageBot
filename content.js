console.log("Chrome extension go");

const audio = new Audio('anime-wow-sound-effect.mp3')
const playPromise = audio.play();

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log(message.txt);
    if (message.txt === "hello") {
        console.log("Not again jesus almighty")
        if (playPromise !== null){
            playPromise.catch(() => { audio.play(); })
        }
    }
}

