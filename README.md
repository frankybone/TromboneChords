 <h1>Trombone Chords</h1>

<p>
POLITECNICO DI MILANO, Music and Acoustics Engineering<br>
Advanced Coding Tools and Methodologies + Computer Music Representations and Models<br>
Course project
</p>

<p>
Francesco LORENZO 921159<br>
Luca SORINI 926387<br>
</p>

<h2>Owners and Rights</h2>
<p>
The project was entirely realized by Francesco Lorenzo and Luca Sorini, students of Music and Acoustics Engineering at <i>Politecnico di Milano</i>. To them belongs all the rights of the application.
</p>
 
<h2>Goals</h2>
<p>
The project was born with a didactic purpose and is designed for beginner students who approach the study of the trombone (we chose this particular instrument beacuase we both play it). This game is based on chords and has both a theoretical and practical implication since the student practices both in recognizing the notes that make up the different chords and in playing the intervals, so in this way can practice associating correctly the positions of the trombone's coulisse to the various notes.<br>
Since the game has a didactic purpose, when the student is unable to play the notes that make up a certain chord, the program prints a staff on the screen on which the correct notes are reported and, under each note, the corresponding position of the trombone's coulisse is indicated.
</p>

<h2>Specifics</h2>

<p>
The application is written in HTML and CSS for the graphics, while in Javascript for the logic and a part of graphics. <br>
  This project includes some external libraries, that are: <br>
  
  <ol>
	<li>ml5.js</li>
		<blockquote>
			<a href="https://ml5js.org" >
			https://ml5js.org
			</a>
		</blockquote>
	<li>p5.js</li>
		<blockquote>
			<a href="https://p5js.org/reference/#/libraries/p5.dom" >
			https://p5js.org/reference/#/libraries/p5.dom
			</a>
		</blockquote>
		<blockquote>
			<a href="https://p5js.org/reference/#/libraries/p5.sound" >
			https://p5js.org/reference/#/libraries/p5.sound
			</a>
		</blockquote>
	<li>VexFlow</li>
		<blockquote>
			<a href="https://www.vexflow.com/" >
			https://www.vexflow.com/
			</a>
		</blockquote>
	<li>anime.js</li>
		<blockquote>
			<a href="https://animejs.com/" >
			https://animejs.com/
			</a>
		</blockquote>
</ol>
  
The <b>ml5.js</b> library uses a pitch detection algorithm to estimate the fundamental frequency of the audio signal perceived by the microphone.<br>
The <b>p5.dom.js</b> library is used for canvas, text and images management, while the the <b>p5.sound.js</b> library is used for web audio features, such as the AudioContext creation and the microphone activation.<br>
The <b>VexFlow</b> library is used for staff creation and note writing.<br>
The <b>anime.js</b> library is used for the animations of "You win", "Game over" and the instructions into the menu page.

The application is managed by some javascript files:<br>
 <ol>
	<li><b>structure.js</b>, which governs the operations of the main menu buttons and the animation of the writings;</li>
	<li><b>notes.js</b>, which contains the notes and the corrispondent frequencies;</li>
	<li><b>chords.js</b>, which cointains all the chords present in the game;</li>
	<li><b>tuner.js</b>, which governs the operation of the tuner and its graphics;</li>
	<li><b>levels.js</b>, which governs the different levels of the game, the staff creation and contains the algorithm wich allow the comparison between the frequencies of the played note and the single note composing a chord;</li>
	<li><b>game.js</b>, which creates the AudioContext, starts the pitch detection function, manages the score, the timer and the chords printed on the screen;</li>
<br>
For the writings, the font used is the following:
	<blockquote>
		font link:
		<a href="https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap" >
			https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap
		</a>
	</blockquote>
</p>

<h2>AudioContext Error</h2>

<p>
It is recommend using Firefox, as the Chrome browser reports an error when creating the AudioContext.
</p>

<h2>Conclusions</h2>

<b>Trombone Chords</b> was designed as a didactic application and new possible features could be implemented in the future to improve the didactic purpose. In addition to a possible expansion of the chord library, an idea could be to create a collection of audio samples of all the notes produced by the trombone to be played when the student has failed to play the notes correctly and the score with the correct notes and positions is displayed on the screen. Otherwise you can create a new game mode in which the subdivision of the chords is based on the modal scales, so all the chords generated for a certain level derives from the same modal scale.

<blockquote>
		Project link:
		<a href="http://flappybone.surge.sh/" >
			http://flappybone.surge.sh/
		</a>
	</blockquote>
<blockquote>
		Video tutorial:
		<a href="https://www.youtube.com/watch?v=7-tC9O_b-nI&feature=youtu.be" >
			https://www.youtube.com/watch?v=7-tC9O_b-nI&feature=youtu.be
		</a>
	</blockquote>
<b>Francesco Lorenzo</b>: 
<a href="mailto:francesco2.lorenzo@mail.polimi.it">
francesco2.lorenzo@mail.polimi.it
</a><br>
<b>Luca Sorini</b>: 
<a href="mailto:luca.sorini@mail.polimi.it">
luca.sorini@mail.polimi.it
</a>
</p>
