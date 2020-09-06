//---CHORD LEVELS---
var ch_easy = [C_chord, Db_chord, D_chord, Eb_chord, E_chord, F_chord, Gb_chord, G_chord, Ab_chord, A_chord, Bb_chord, B_chord,
                   C_min_chord, Db_min_chord, D_min_chord, Eb_min_chord, E_min_chord, F_min_chord, Gb_min_chord,
                   G_min_chord, Ab_min_chord, A_min_chord, Bb_min_chord, B_min_chord];

var ch_medium = [C_5a_chord, Db_5a_chord, D_5a_chord, Eb_5a_chord, E_5a_chord, F_5a_chord, Gb_5a_chord, G_5a_chord, Ab_5a_chord, A_5a_chord,
                     Bb_5a_chord, B_5a_chord, C_5d_chord, Db_5d_chord, D_5d_chord, Eb_5d_chord, E_5d_chord, F_5d_chord, Gb_5d_chord, G_5d_chord,
                     Ab_5d_chord, A_5d_chord, Bb_5d_chord, B_5d_chord, C_minor_5a_chord, Db_minor_5a_chord, D_minor_5a_chord, Eb_minor_5a_chord,
                     E_minor_5a_chord, F_minor_5a_chord, Gb_minor_5a_chord, G_minor_5a_chord, Ab_minor_5a_chord, A_minor_5a_chord, Bb_minor_5a_chord,
                     B_minor_5a_chord, C_minor_5d_chord, Db_minor_5d_chord, D_minor_5d_chord, Eb_minor_5d_chord, E_minor_5d_chord, F_minor_5d_chord,
                     Gb_minor_5d_chord, G_minor_5d_chord, Ab_minor_5d_chord, A_minor_5d_chord, Bb_minor_5d_chord, B_minor_5d_chord];

var ch_hard = [C_7_chord, Db_7_chord, D_7_chord, Eb_7_chord, E_7_chord, F_7_chord, Gb_7_chord, G_7_chord, Ab_7_chord, A_7_chord, Bb_7_chord, B_7_chord, 
                  C_min_7_chord, Db_min_7_chord, D_min_7_chord, Eb_min_7_chord, E_min_7_chord, F_min_7_chord, Gb_min_7_chord, G_min_7_chord, Ab_min_7_chord, 
                  A_min_7_chord, Bb_min_7_chord,  B_min_7_chord, C_7a_chord, Db_7a_chord, D_7a_chord, Eb_7a_chord, E_7a_chord, F_7a_chord, Gb_7a_chord,
                  G_7a_chord, Ab_7a_chord, A_7a_chord, Bb_7a_chord, B_7a_chord, C_min_7a_chord, Db_min_7a_chord, D_min_7a_chord, Eb_min_7a_chord, 
                  E_min_7a_chord, F_min_7a_chord, Gb_min_7a_chord, G_min_7a_chord, Ab_min_7a_chord, A_min_7a_chord, Bb_min_7a_chord, B_min_7a_chord];

var ch_epic = [C_9_chord, Db_9_chord, D_9_chord, Eb_9_chord, E_9_chord, F_9_chord, Gb_9_chord, G_9_chord, Ab_9_chord, A_9_chord, Bb_9_chord, B_9_chord,
                  C_min_9_chord, Db_min_9_chord, D_min_9_chord, Eb_min_9_chord, E_min_9_chord, F_min_9_chord, Gb_min_9_chord, G_min_9_chord, Ab_min_9_chord,
                  A_min_9_chord, Bb_min_9_chord, B_min_9_chord];

var chords_easy = [];
var chords_medium = [];
var chords_hard = [];
var chord_epic = [];

chords_easy = mischia(ch_easy);
chords_medium = mischia(ch_medium);
chords_hard = mischia(ch_hard);
chord_epic = mischia(chord_epic);

var firstPitch = false;
var secondPitch = false;
var thirdPitch = false;
var fourthPitch = false;
var fifthNote = false;

var n_chord = 0;
var wait = 1;

var VF = Vex.Flow;

  // Create a VexFlow renderer attached to the DIV element "pentagramma"
  //var vf = new VF.Factory({renderer: {elementId: 'pentagramma'}});



function drawScore() {

  var score = vf.EasyScore();
  //chord_symbol = new VF.ChordSymbol().setVertical('bottom').addText('I');
  //var system = vf.System();

  var x_s = 265;
  var y_s = 80;

  //var system;

  function makeSystem(width) {
    var system = vf.System({ x: x_s, y: y_s, width: width, spaceBetweenStaves: 10 });
    x_s += width;
    return system;
  }

  // Create a 4/4 treble stave, and add two parallel voices
  
  if(timer == 0) {
    var system = makeSystem(170);
    system.addStave({
      voices: [
        // Top voice has 4 quarter notes with stems up
        //score.voice(score.notes(chords_easy[n_chord].firstNote, {clef: 'bass'}).addModifier(0,chord_symbol)),
        score.voice(score.notes(chords_easy[n_chord].firstNote, {clef: 'bass'})),
      ]
    }).addClef('bass');

    /*var chords;

    chords.push(new VF.ChordSymbol()
          .setVertical('bottom')
          .addText('I'));
    
    voices.addModifier(0,chord1);*/


    system = makeSystem(150);
    system.addStave({
      voices: [
        // Top voice has 4 quarter notes with stems up
        score.voice(score.notes(chords_easy[n_chord].secondNote, {clef: 'bass'})),
      ]
    });

    system = makeSystem(150);
    system.addStave({
      voices: [
        // Top voice has 4 quarter notes with stems up
        score.voice(score.notes(chords_easy[n_chord].thirdNote, {clef: 'bass'})),
      ]
    }).setEndBarType(VF.Barline.type.END);
  }


/*chords.push(new VF.ChordSymbol()
  .setVertical('bottom')
  .addGlyphOrText('V'));
chords.push(new VF.ChordSymbol()
  .setVertical('bottom')
  .saddText('I'));
chords.push(new VF.ChordSymbol()
  .setVertical('bottom')
  .saddText('I'));

for (var i = 0;i < notes.length; ++ i) {
  notes[i].addModifier(0,chords[i]);
}*/
  vf.draw();

  stopDraw = 1;

}


/*  var VF = Vex.Flow;

  // Create a VexFlow renderer attaced to the DIV element "boo"
  var vf = new VF.Factory({renderer: {elementId: 'pentagramma'}});
  var score = vf.EasyScore();
  //var system = vf.System();

  var x_s = 120;
  var y_s = 80;

  function makeSystem(width) {
    var system = vf.System({ x: x_s, y: y_s, width: width, spaceBetweenStaves: 10 });
    x_s += width;
    return system;
  }

  // Create a 4/4 treble stave, and add two parallel voices
  var system = makeSystem(170);
  system.addStave({
    voices: [
      // Top voice has 4 quarter notes with stems up
      score.voice(score.notes(chords_easy[n_chord].firstNote, {clef: 'bass'})),
    ]
  }).addClef('bass');

  system = makeSystem(150);
  system.addStave({
    voices: [
      // Top voice has 4 quarter notes with stems up
      score.voice(score.notes(chords_easy[n_chord].secondNote, {clef: 'bass'})),
    ]
  });

  system = makeSystem(150);
  system.addStave({
    voices: [
      // Top voice has 4 quarter notes with stems up
      score.voice(score.notes(chords_easy[n_chord].thirdNote, {clef: 'bass'})),
    ]
  }).setEndBarType(VF.Barline.type.END);

  console.log('score 1 -> ' + chords_easy[n_chord].firstNote);
  console.log('score 2 -> ' + chords_easy[n_chord].secondNote);
  console.log('score 3 -> ' + chords_easy[n_chord].thirdNote);*/

function easy(){

  if(chords_easy[n_chord].firstNote.substring(0, chords_easy[n_chord].firstNote.length - 3) == tune){
      firstPitch = true;
      console.log('level 1 -> ' + chords_easy[n_chord].firstNote);
    }

  if(chords_easy[n_chord].secondNote.substring(0, chords_easy[n_chord].secondNote.length - 3) == tune){
    secondPitch = true;
    console.log('level 2 -> ' + chords_easy[n_chord].secondNote);
  }

  if(chords_easy[n_chord].thirdNote.substring(0, chords_easy[n_chord].thirdNote.length - 3) == tune){
    thirdPitch =  true;
    console.log('level 3 -> ' + chords_easy[n_chord].thirdNote);
  }

  if(firstPitch == true && secondPitch == true && thirdPitch == true){
    //console.log('Accordo di: ' + chords_easy[n_chord].nameChord);
    firstPitch = false;
    secondPitch = false;
    thirdPitch = false;

    answer = true;
    newscore = scores;
    scores++;
    wait = 0;

    setTimeout(waitChord,2000);

    timer = 3;
    angle = - Math.PI/2;

  }
  else if(firstPitch != true || secondPitch != true || thirdPitch != true){
    answer = false;
    stopScore = 2;
    //stopDraw = 2;
  }
}

/*function newchord() {
  n_chord++;
  loop();
}*/

function waitChord() {
  n_chord++;
  wait = 1;
}

function mischia(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
