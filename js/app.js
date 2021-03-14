window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recongnition = new SpeechRecognition(); //built in function => window

let words = document.getElementById("template"); //connecting to html element
let p = document.createElement("p"); //create html element by using dom or js
words.appendChild(p);

recongnition.addEventListener("result", e => {
  let transcript = [...e.results]
    .map(result => result[0])
    .map(result => result.transcript)
    .join("");
  p.textContent = transcript;
  if (e.results[0].isFinal) {
    p = document.createElement("p");
    words.appendChild(p);
  }
});
recongnition.addEventListener("end", recongnition.start);
recongnition.start();
