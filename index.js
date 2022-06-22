var showTime = document.querySelector("#time");
var imgDiv = document.querySelector("#img");
var confirm = document.querySelector("#comfirm");
var ok = document.querySelector("#ok");
const audio = document.querySelector("#playAudio");
var Inputs = document.querySelectorAll("input");
var min = 0;
var shift = 1;
var sec = 0;
var count = 0;
var myVar;
var okk = 0;
window.onload = function () {
  render();
  confirm.addEventListener("click", start);
};
function start() {
  //confirm.removeEventListener("click", start);
  clearInterval(myVar);
  okk = 0;
  sec = 0;
  count = 0;
  min = Inputs[0].value;
  render();
  audio.muted = true;
  audio.play();
  console.log("ff");
  myVar = setInterval(function () {
    myTimer();
  }, 1000);
}
function stop_music() {
  okk = 0;
  audio.muted = true;
  min = Inputs[shift].value;
  shift = 1 - shift;
  if (shift == 1) count++;
  ok.removeEventListener("click", stop_music);
}

function myTimer() {
  if (sec == 0) {
    if (min == 0) {
      if (!okk) {
        okk = 1;
        audio.currentTime = 0;
        audio.muted = false;
        audio.volume = 0.2;
      }
      ok.addEventListener("click", stop_music);
    }
    if (!okk) {
      min--;
      sec = 60;
    }
  }
  if (sec > 0) sec--;
  render();
}

function render() {
  var htmlStr = "";
  var imgStr = "";
  if (min < 10) htmlStr = `0`;
  if (sec < 10) htmlStr = htmlStr + `${min} ： 0${sec}`;
  else htmlStr = htmlStr + `${min} ： ${sec}`;
  for (var i = 0; i < count; i++)
    imgStr = imgStr + `<img src="./tomato.png" width="60" height="60"/>`;
  imgDiv.innerHTML = imgStr;
  showTime.innerHTML = htmlStr;
}
