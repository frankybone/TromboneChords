// -- Pitch detection algorithm from ml5.js library --
const model_url = 'https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/';


var pitch;
var mic;
var freq = 0;
var threshold = 1;
var closestNote = -1;
var vol_threshold = 250;
var scores = 0;
var newscore = 0;
var tune = null;
var answer = true;
var timer = 10;
var angle = - Math.PI/2;

var canvas;

var canvasPositions;

var fac = false;
var med = false;
var dif = false;
var epi = false;

var stop = 0;

var stopDraw = 0;

var stopTime = 1;


function setup() {
  canvas_mic = createCanvas(0,0);
  canvas_mic.stroke(0);

  audioContext = getAudioContext();
  mic = new p5.AudioIn();
  mic.start(listening);
}

//--- Load the pitch detection algorithm ---
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
}

function reset(){
    timer = 10;
    scores = 0;
    n_chord = 0;

    chords_easy = mischia(ch_easy);
    chords_medium = mischia(ch_medium);
    chords_hard = mischia(ch_hard);
    chords_epic = mischia(ch_epic);
    
    angle = - Math.PI/2;
    document.getElementById("gameOver").style.display = "none";
    document.getElementById("youWin").style.display = "none";

    vf = new VF.Factory({renderer: {elementId: 'pentagramma', width: 1000}});

    document.getElementById("pentagramma").style.display = "none";

}

// -- Timer --
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

    if(scores < 10) {

        if(timer > 0) {
        	tuner();

          drawWords();

          drawCircle();

          if(wait == 1 && stopTime == 0){
           time();
          }

          fill(255,165,0);
          textSize(72);
          stroke(0);
          strokeWeight(1);

          if(fac == true) {

              if(scores > newscore || n_chord == 0 ) {
                easy();

                if(wait == 1) {
                  text(chords_easy[n_chord].nameChord + ' chord', canvas.width - 540, canvas.height-450);
                }
              }
          }

          if(med == true) {

              if(scores > newscore || n_chord == 0 ) {
                medium();

                if(wait == 1) {
                  text(chords_medium[n_chord].nameChord + ' chord', canvas.width - 540, canvas.height-450);
                }
              }
          }

          if(dif == true) {

              if(scores > newscore || n_chord == 0 ) {
                hard();

                if(wait == 1) {
                  text(chords_hard[n_chord].nameChord + ' chord', canvas.width - 540, canvas.height-450);
                }
              }
          }

          if(epi == true) {

              if(scores > newscore || n_chord == 0 ) {
                epic();

                if(wait == 1) {
                  text(chords_epic[n_chord].nameChord + ' chord', canvas.width - 540, canvas.height-450);
                }
              }
          }

        }

        else {

          if(stopDraw == 0) {
            drawScore();
          }

          if(stop != 1) {
            document.getElementById("gameOver").style.display = "block";
            document.getElementById("back").style.display = "block";
            document.getElementById("restart").style.display = "block";
            document.getElementById("pentagramma").style.display = "block";

            canvas.remove();

            canvasPositions = createCanvas(1200,100);
            
            textSize(32);
            fill(255,165,0);
            text("Coulisse positions:", 200, 50);

            fill(255, 255, 255);

            if(fac == true){        
              text(chords_easy[n_chord].pos1, 500, 50);
              text(chords_easy[n_chord].pos2, 600, 50);
              text(chords_easy[n_chord].pos3, 700, 50);
            }

            if(med == true){
              text(chords_medium[n_chord].pos1, 500, 50);
              text(chords_medium[n_chord].pos2, 600, 50);
              text(chords_medium[n_chord].pos3, 700, 50);
            }

            if(dif == true){
              text(chords_hard[n_chord].pos1, 450, 50);
              text(chords_hard[n_chord].pos2, 550, 50);
              text(chords_hard[n_chord].pos3, 650, 50);
              text(chords_hard[n_chord].pos4, 750, 50);
            }

            if(epi == true){
              text(chords_epic[n_chord].pos1, 400, 50);
              text(chords_epic[n_chord].pos2, 500, 50);
              text(chords_epic[n_chord].pos3, 600, 50);
              text(chords_epic[n_chord].pos4, 700, 50);
              text(chords_epic[n_chord].pos5, 800, 50);
            }
            

            document.getElementById("posizioni").style.display = "block";
          }
        }

      }


      else {

            if(stop != 1) {
              document.getElementById("youWin").style.display = "block";
              document.getElementById("back").style.display = "block";
              document.getElementById("restart").style.display = "block";

              canvas.remove();
            }
      }
}


function drawWords() {

      fill(255,255,255);
      strokeWeight(2);
      textSize(50);
      textFont('Fredericka the Great');
      text('SCORE:', canvas.width-860, canvas.height-650);
      text(scores, canvas.width-280, canvas.height-650);

      stroke(255,255,255);
      strokeWeight(2);
      noFill();
      rect(canvas.width-670, canvas.height-650, 30, 60);
      rect(canvas.width-640, canvas.height-650, 30, 60);
      rect(canvas.width-610, canvas.height-650, 30, 60);
      rect(canvas.width-580, canvas.height-650, 30, 60);
      rect(canvas.width-550, canvas.height-650, 30, 60);
      rect(canvas.width-520, canvas.height-650, 30, 60);
      rect(canvas.width-490, canvas.height-650, 30, 60);
      rect(canvas.width-460, canvas.height-650, 30, 60);
      rect(canvas.width-430, canvas.height-650, 30, 60);
      rect(canvas.width-400, canvas.height-650, 30, 60);

      if(scores >= 1) {
        fill(219, 253, 220);
        rect(canvas.width-670, canvas.height-650, 30, 60);
      

        if(scores >= 2) {
          fill(180, 251, 182);
          rect(canvas.width-640, canvas.height-650, 30, 60);
        

          if(scores >= 3) {
            fill(141, 250, 144);
            rect(canvas.width-610, canvas.height-650, 30, 60);
          

            if(scores >= 4) {
              fill(102, 248, 106);
              rect(canvas.width-580, canvas.height-650, 30, 60);
            

              if(scores >= 5) {
                fill(62, 247, 68);
                rect(canvas.width-550, canvas.height-650, 30, 60);
              

                if(scores >= 6) {
                  fill(23, 245, 30);
                  rect(canvas.width-520, canvas.height-650, 30, 60);
                

                  if(scores >= 7) {
                    fill(8, 219, 15);
                    rect(canvas.width-490, canvas.height-650, 30, 60);
                  

                    if(scores >= 8) {
                      fill(7, 180, 12);
                      rect(canvas.width-460, canvas.height-650, 30, 60);
                    

                      if(scores >= 9) {
                        fill(5, 141, 9);
                        rect(canvas.width-430, canvas.height-650, 30, 60);
                      

                        if(scores >= 10) {
                          fill(4, 101, 7);
                          rect(canvas.width-400, canvas.height-650, 30, 60);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
     


      fill(30, 138, 227);
      stroke('#222222');
      strokeWeight(4);
      textSize(72);
      if (timer <= 3) {
        fill('red');
      }
      text(timer, canvas.width - 850, canvas.height-200);
}

function drawCircle() {

	noFill();

	if (timer > 0) {

		if (timer > 3) {
			stroke('#1e8ae3');
			strokeWeight(10);
		}

		if (timer <= 3) {
			stroke('#FF0000');
			strokeWeight(10);
			noFill();
		}

		arc(231, 517, 100, 100, - Math.PI/2, angle);
	}

}
