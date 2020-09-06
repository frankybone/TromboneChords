  
function drawScore() {

  var VF = Vex.Flow;

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

  vf.draw();

};