const image = document.getElementById("img");
const statusDisplayed = document.getElementById("status");
const bgColor = document.getElementById("main")

async function connectionStatus () {
    try {
        const fetchResult = await fetch ("./images/kisspng-internet-wi-fi-mobile.png?time=" + (new Date().getTime())) 
    }
}