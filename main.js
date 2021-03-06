x = 0;
y = 0;
draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start() {
  document.getElementById("status").innerHTML = "System is now listening";  
  recognition.start();
}
 
recognition.onresult = function(action) {
  console.log(action); 
  var content = action.results[0][0].transcript;
    document.getElementById("status").innerHTML = "Your speech has been recognized: " + content; 

}

function setup() {
  canvas = createCanvas(9000, 6000);
}

function draw() {
  if(draw_apple == "set") {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak() {
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}