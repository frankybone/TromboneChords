function tuner(){
	var volume = 1000*mic.getLevel();
  		//console.log(volume);

	//background(255, 204, 0);
	textAlign(CENTER, CENTER);
	fill(255);
	stroke('#000000');
    strokeWeight(2);
	textSize(24);

	text(freq.toFixed(2) + ' Hz', canvas.width -200, canvas.height -75);

	let recordDiff = Infinity;
	for (let i = 0; i < notes.length; i++) {
		let diff = freq - notes[i].freq;
		if (abs(diff) < abs(recordDiff) && volume > vol_threshold) {
			closestNote = notes[i];
			recordDiff = diff;
		}
	}


	textSize(40);
	if(volume > vol_threshold){
		text(closestNote.note, canvas.width - 200, canvas.height-350);
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
		fill(8, 219, 15);
	}

	rect(canvas.width - 200, 500, 200, 50);

	stroke(255);
	strokeWeight(4);
	line(canvas.width-200, 400, canvas.width-200, 600);

	noStroke();
	fill(255, 0, 0);
	if (abs(diff) < threshold) {
		fill(8, 219, 15);
	}
	
	rect(canvas.width-200 + diff/2, 500, 10, 75);
}