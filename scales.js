const staveNoteGroup = svgContext.openGroup();
staveNote.draw();
svgContext.closeGroup();

// Now use staveNoteGroup to apply any animations/transitions you want:
staveNoteGroup.style.transform = "opacity 5s linear";
staveNoteGroup.style.opacity = "0";

// Basic setup boilerplate for using VexFlow with the SVG rendering context:
VF = Vex.Flow;

// Create an SVG renderer and attach it to the DIV element named "boo".
var div = document.getElementById("boo")
var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

// Configure the rendering context.
renderer.resize(500, 500);
var context = renderer.getContext();

// Create a stave of width 10000 at position 10, 40 on the canvas.
var stave = new VF.Stave(10, 10, 10000)
.addClef('treble');

// Connect it to the rendering context and draw!
stave.setContext(context).draw();

ar tickContext = new VF.TickContext();

var durations = ['8', '4', '2', '1'];
var notes = [
  ['c', '#', '4'],
  ['e', 'b', '5'],
  ['g', '', '5'],
  ['d', 'b', '4'],
  ['b', 'bb', '3'],
  ['a', 'b', '4'],
  ['f', 'b', '5'],
].map(([letter, acc, octave]) => { // use ES6 Array Destructuring here
  const note = new VF.StaveNote({
    clef: 'treble',
    keys: [`${letter}${acc}/${octave}`],
    duration: durations[Math.floor(Math.random()*durations.length)],
  })
  .setContext(context)
  .setStave(stave);

  // If a StaveNote has an accidental, we must render it manually.
  // This is so that you get full control over whether to render
  // an accidental depending on the musical context. Here, if we
  // have one, we want to render it. (Theoretically, we might
  // add logic to render a natural sign if we had the same letter
  // name previously with an accidental. Or, perhaps every twelfth
  // note or so we might render a natural sign randomly, just to be
  // sure our user who's learning to read accidentals learns
  // what the natural symbol means.)
  if(acc) note.addAccidental(0, new VF.Accidental(acc));

  // Here we add the note to the tickContext so that it will get
  // assigned an x-position
  tickContext.addTickable(note)
  return note;
});

tickContext.preFormat().setX(400)

const visibleNoteGroups[];

document.getElementById('add-note').addEventListener('click', (e) => {
  note = notes.shift(); // pluck the left-most undrawn note
  if(!note) return; // if we're out of notes, return.
  const group = context.openGroup(); // create an SVG group element
  visibleNoteGroups.push(group); // add that element to our visibleNoteGroups array
  note.draw(); // draw the note
  context.closeGroup(); // and close the group
  
  group.classList.add('scroll'); // set up the group for scrolling

  // Force a dom-refresh by asking for the group's bounding box. Why? Most
  // modern browsers are smart enough to realize that adding .scroll class
  // hasn't changed anything about the rendering, so they wait to apply it
  // at the next dom refresh, when they can apply any other changes at the
  // same time for optimization. However, if we allow that to happen,
  // then sometimes the note will immediately jump to its fully transformed
  // position -- because the transform will be applied before the class with
  // its transition rule. 
  const box = group.getBoundingClientRect();
  group.classList.add('scrolling'); // and now start it scrolling

  // If a user doesn't answer in time make the note fall below the staff
  window.setTimeout(() => {
    const index = visibleNoteGroups.indexOf(group);
    if(index === -1) return;
    group.classList.add('too-slow');
    visibleNoteGroups.shift();
  }, 5000);
});

document.getElementById('right-answer').addEventListener('click', (e) => {
  group = visibleNoteGroups.shift();
  group.classList.add('correct'); // this starts the note fading-out.

  // The note will be somewhere in the middle of its move to the left -- by
  // getting its computed style we find its x-position, freeze it there, and
  // then send it straight up to note heaven with no horizontal motion.
  const transformMatrix = window.getComputedStyle(group).transform;
  
  // transformMatrix will be something like 'matrix(1, 0, 0, 1, -118, 0)'
  // where, since we're only translating in x, the 5th property will be
  // the current x-translation. You can dive into the gory details of
  // CSS3 transform matrices (along with matrix multiplication) if you want
  // at http://www.useragentman.com/blog/2011/01/07/css3-matrix-transform-for-the-mathematically-challenged/
  const x = transformMatrix.split(',')[4].trim();

  // And, finally, we set the note's style.transform property to send it skyward.
  group.style.transform = `translate(${x}px, -800px)`;
});