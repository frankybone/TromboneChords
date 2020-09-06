//Importazione dell'algoritmo di pitch detection dalla libreria ml5
const model_url = 'https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/';

//Definizione delle variabili
let pitch;
let mic;
var freq = 0;
var threshold = 1;
var closestNote = -1;
var vol_threshold = 10; //serve per non essere sensibile a rumori di sottofondo
var scores = 0;
var newscore = 0;
var tune = null;
var answer = true;
var timer = 3;
var angle = - Math.PI/2;

var canvas;

var fac = false;
var med = false;
var dif = false;

var fontWord;
var fontReady;

/*function fontRead(){
  fontReady = true;
}*/

var group;

var stop = 0;

var stopScore = 0;

var stopDraw = 0;

var stopTime = 1;

var startVF = 0;

/*VF = Vex.Flow;

  // Create an SVG renderer and attach it to the DIV element named "boo".
  var div = document.getElementById("pentagramma")
  var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

  // Configure the rendering context.
  renderer.resize(500, 500);
  var context = renderer.getContext();
  context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

  // Create a stave of width 400 at position 10, 40 on the canvas.
  var stave = new VF.Stave(10, 40, 400);

  // Add a clef and time signature.
  stave.addClef("bass").addTimeSignature("3/4");

  var notine =[];*/

/*function preload() {
  fontWord = loadFont('https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap',fontRead);
}*/

function setup() {
  canvas_mic = createCanvas(0,0);
  canvas_mic.stroke(0);

  audioContext = getAudioContext();
  mic = new p5.AudioIn();
  mic.start(listening);
}

//--- Load the pitchDetection Algorithm ---
function listening() {
  console.log('listening');
  pitch = ml5.pitchDetection(
    model_url,
    audioContext,
    mic.stream,
    modelLoaded
  );
}

function modelLoaded() {
  console.log('model loaded');
  pitch.getPitch(gotPitch);
}

function gotPitch(error, frequency) {
  if (error) {
    console.error(error);
  } else {
    //console.log(frequency);
    if (frequency) {
      freq = frequency;
    }
    pitch.getPitch(gotPitch);
  }
}

function touchStarted() {
  if (getAudioContext().state !== 'running') {
    audioContext.resume();
  }
}

function appearCanvas() {
    canvas = createCanvas(1080,720);
    canvas.parent("gioco");

    canvasPositions = createCanvas(500,100);
    canvasPositions.parent("main");
}

function reset(){
    timer = 3;
    scores = 0;
    n_chord = 0;
    chords_easy = mischia(ch_easy);
    //chords_medium = shuffle(ch_medium);
    angle = - Math.PI/2;
    document.getElementById("gameOver").style.display = "none";
    document.getElementById("youWin").style.display = "none";

    vf = new VF.Factory({renderer: {elementId: 'pentagramma', width: 1000}});

    document.getElementById("pentagramma").style.display = "none";

}

//---TIMER---
function time() {

  if (frameCount % 60 == 0 && timer > 0){
    timer --;
  }

   if (frameCount % 1 == 0 && timer > 0){
    angle = angle - 2 * Math.PI / 600;
  }


  if (timer == 0){
    scores = 0;
    newscore = 0;

    setTimeout(function() {}, 250);
  }

}


function draw() {
    clear();
    //background();

    if(scores < 3) {

        if(timer > 0) {
        	tuner();

          drawWords();

          drawCircle();

          //pentagramma();

          if(wait == 1 && stopTime == 0){
           time();
          }

          fill(255,255,255);
          textSize(60);
          stroke(0);
          strokeWeight(1);

          if(fac == true) {

              if(scores > newscore || n_chord == 0 ) {
                easy();
                //stopScore = 2;

               // if(stopScore == 2) {
                  //drawScore();
                  //noLoop();
                //  stopScore = 1;
                //}


                if(wait == 1) {
                  text(chords_easy[n_chord].nameChord + ' chord', canvas.width - 900, canvas.height-350);
                }
              }
          }

          if(med == true) {

              if(scores > newscore || n_chord == 0 ) {
                medium();

                text(chords_medium[n_chord].nameChord + ' chord', canvas.width - 900, canvas.height-350);
              }
          }

          if(dif == true) {

              if(scores > newscore || n_chord == 0 ) {
                hard();

                //text(chords_hard[n_chord].nameChord + ' chord', canvas.width - 900, canvas.height-350);
              }
          }

        }

        else {

          //vf.draw();
          //stopDraw = 2;

          if(stopDraw == 0) {
            drawScore();
          // noLoop();
          //  stopDraw = 1;
          }


          //stroke('#222222');
          //strokeWeight(4);
          //fill('red');
          //text("GAME OVER", width/2, height*0.2);

          if(stop != 1) {
            document.getElementById("gameOver").style.display = "block";
            document.getElementById("back").style.display = "block";
            document.getElementById("restart").style.display = "block";
          //  document.getElementById("easy").style.display = "none";
          //  document.getElementById("medium").style.display = "none";
          //  document.getElementById("hard").style.display = "none";
          //  document.getElementById("titolo").style.display = "none";
          //  document.getElementById("credits").style.display = "none";
            document.getElementById("pentagramma").style.display = "block";
          //  document.getElementById("creditBtn").style.display = "none";
          }
        }

      }

      else {
          /*if(stop != 1) {
            document.getElementById("youWin").style.display = "block";
            document.getElementById("back").style.display = "block";
            document.getElementById("restart").style.display = "block";
            document.getElementById("easy").style.display = "none";
            document.getElementById("medium").style.display = "none";
            document.getElementById("hard").style.display = "none";
            document.getElementById("titolo").style.display = "none";
            document.getElementById("credits").style.display = "none";
            document.getElementById("pentagramma").style.display = "none";
            document.getElementById("creditBtn").style.display = "none";
          }*/
      }
}


function drawWords() {

    //if(fontReady){
      fill(255,255,255);
      strokeWeight(2);
      textSize(50);
      textFont('Fredericka the Great');
      text('SCORE: ' + scores, canvas.width - 900, canvas.height-650);

      fill(255,255,255);
      if (timer <= 3) {
        stroke('#222222');
        strokeWeight(4);
        fill('red');
      }
      text('Timer: ' + timer, canvas.width - 900, canvas.height-150);
    //}

/*    if (timer == 0) {
      stroke('#222222');
      strokeWeight(4);
      fill('red');
      text("GAME OVER", width/2, height*0.7);
    }*/
}

function drawCircle() {

	noFill();

	if (timer > 0) {

		if (timer > 3) {
			stroke('#006699');
			strokeWeight(10);
		}

		if (timer <= 3) {
			stroke('#FF0000');
			strokeWeight(10);
			noFill();
		}

		arc(280, 568, 70, 70, - Math.PI/2, angle);
	}

}

/*function pentagramma() {
  line(600, 500, 1000, 500);
  line(600, 520, 1000, 520);
  line(600, 540, 1000, 540);
  line(600, 560, 1000, 560);
  line(600, 580, 1000, 580);
}*/

//function drawNotes() {

  /*// Connect it to the rendering context and draw!
  stave.setContext(context).draw();

  notine = [
      new VF.StaveNote({clef: "bass", keys: [chords_easy[n_chord].firstNote], duration: "q" }).
        addAccidental(0, new VF.Accidental("#")),

      new VF.StaveNote({clef: "bass", keys: [chords_easy[n_chord].secondNote], duration: "q" }).
        addAccidental(0, new VF.Accidental("b")),

      new VF.StaveNote({clef: "bass", keys: [chords_easy[n_chord].thirdNote], duration: "q" })
    ];

  VF.Formatter.FormatAndDraw(context, stave, notine);*/

  // Draw it!


//}
