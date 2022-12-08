const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const speechBtnDiv = document.querySelector("#speech-btn");
const micBtn = document.querySelector(".btn .fas");
const instruction = document.querySelector(".instruction");

const speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

//check for browser support

if (speechRecognition) {
  console.log("speech recognition supported");
  const recognition = new speechRecognition();

  micBtn.addEventListener("click", micBtnClicked);

  function micBtnClicked(e) {
    // console.log("click!!!!!!");
    e.preventDefault();
    if (micBtn.classList.contains("fa-microphone")) {
      recognition.start();
    } else {
      recognition.stop();
    }
  }

  //start speech recognition
  recognition.addEventListener("start", () => {
    micBtn.classList.remove("fa-microphone");
    micBtn.classList.add("fa-microphone-slash");
    instruction.textContent = "Recording...";
    searchInput.focus();
    console.log("speech recognition enabled");
  });

  //stop speech reco
  recognition.addEventListener("end", () => {
    micBtn.classList.remove("fa-microphone-slash");
    micBtn.classList.add("fa-microphone");
    instruction.textContent = "Press Ctrl + x or Click the Mic icon to start";
    searchInput.focus();
    console.log("speech recognition disabled");
  });

  // recognition.onstart = function () {

  // }

  //get result from speech recognition
  recognition.continuous = true;
  // let content = "";

  recognition.addEventListener("result", (e) => {
    // console.log(e);
    const current = e.resultIndex;
    const transcript = e.results[current][0].transcript;

    if (transcript.toLowerCase().trim() === "stop recording") {
      recognition.stop();
    } else if (!searchInput.value) {
      searchInput.value = transcript;
    } else {
      if (transcript.toLowerCase().trim() === "search") {
        searchForm.submit();
      } else if (transcript.toLowerCase().trim() === "reset form") {
        searchInput.value = "";
      } else {
        searchInput.value = transcript;
      }
    }
  });

  // add keyboard event listner
  document.addEventListener("keydown",(e)=> {
    if(e.ctrlKey && e.key === "x"){
      recognition.start()
    }
    if(e.ctrlKey && e.key === "m"){
      recognition.stop()
    }
  })



} else {
  console.log("speech recognition not supported");
  speechBtnDiv.style.visibility = "hidden";
}
