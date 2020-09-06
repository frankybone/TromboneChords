function tuner(){
	var volume = 1000*mic.getLevel();
  		//console.log(volume);

	//background(255, 204, 0);
	textAlign(CENTER, CENTER);
	fill(255);
	stroke('#000000');
    strokeWeight(2);
	textSize(32);

	text(freq.toFixed(2) + ' Hz', canvas.width -200, canvas.height -480);

	let recordDiff = Infinity;
	for (let i = 0; i < notes.length; i++) {
		let diff = freq - notes[i].freq;
		if (abs(diff) < abs(recordDiff) && volume > vol_threshold) {
			closestNote = notes[i];
			recordDiff = diff;
		}
	}


	textSize(64);
	if(volume > vol_threshold){
		text(closestNote.note, canvas.width - 200, canvas.height-400);
		tune = closestNote.note.substring(0, closestNote.note.length - 1);
		//console.log(tune);
	} 

	let diff = recordDiff;
  	let alpha = map(abs(diff), 0, 100, 255, 0);
	rectMode(CENTER);
	fill(255, alpha);
	stroke(255);
	strokeWeight(1);
	if (abs(diff) < threshold) {
		fill(0, 255, 0);
	}
	rect(canvas.width - 200, 100, 200, 50);

	stroke(255);
	strokeWeight(4);
	line(canvas.width-200, 0, canvas.width-200, 200);

	noStroke();
	fill(255, 0, 0);
	if (abs(diff) < threshold) {
		fill(0, 255, 0);
	}
	
	rect(canvas.width-200 + diff/2, 100, 10, 75);
}