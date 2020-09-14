var textWrapper = document.querySelector('.ml3');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    // -- "Choose a level" animation --
    anime.timeline({loop: true})
      .add({
        targets: '.ml3 .letter',
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: (el, i) => 150 * (i+1)
      }).add({
        targets: '.ml3',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });

      // -- "Game over" and "You win" animation --
      anime.timeline({loop: true})
           .add({
             targets: '.ml15 .word',
             scale: [2,1],
             opacity: [0,1],
             easing: "easeOutCirc",
             duration: 800,
             delay: (el, i) => 800 * i
           }).add({
             targets: '.ml15',
             opacity: 0,
             duration: 1000,
             easing: "easeOutExpo",
             delay: 1000
           });

      document.getElementById("gameOver").style.display = "none";
      document.getElementById("youWin").style.display = "none";
      document.getElementById("pentagramma").style.display = "none";

    function removeElement(elementId) {
        var element = document.getElementById(elementId);
        element.parentNode.removeChild(element);
    }

    function addElement(parentId, elementTag, elementId, html) {
        var p = document.getElementById(parentId);
        var newElement = document.createElement(elementTag);
        newElement.setAttribute('id', elementId);
        newElement.innerHTML = html;
        p.appendChild(newElement);
    }

      var runGame = function(){

        stop = 0;
        stopTime = 0;
        stopDraw = 0;

        document.getElementById("easy").style.display = "none";
        document.getElementById("medium").style.display = "none";
        document.getElementById("hard").style.display = "none";
        document.getElementById("epic").style.display = "none";
        document.getElementById("titolo").style.display = "none";

        document.getElementById("back").style.display = "none";
        document.getElementById("restart").style.display = "none";

        document.getElementById("credits").style.display = "none";
        document.getElementById("main").style.display = "block";
        document.getElementById("creditBtn").style.display = "none";

        document.getElementById("pap_trombone").style.display = "none";
        document.getElementById("explain").style.display = "none";

        appearCanvas();

      };

      var showCredits = function(){
       document.getElementById("restart").style.display = "none";
       document.getElementById("titolo").style.display = "none";
       document.getElementById("creditBtn").style.display = "none";
       document.getElementById("easy").style.display = "none";
       document.getElementById("medium").style.display = "none";
       document.getElementById("hard").style.display = "none";
       document.getElementById("epic").style.display = "none";
       document.getElementById("credits").style.display = "block";
       document.getElementById("back").style.display = "block";
       document.getElementById("pap_trombone").style.display = "none";
       document.getElementById("explain").style.display = "none";
      };

      var goBack = function(){

         stop = 1;
         stopTime = 1;

       document.getElementById("gameOver").style.display = "none";
       document.getElementById("youWin").style.display = "none";

       document.getElementById("restart").style.display = "none";
       document.getElementById("back").style.display = "none";

       document.getElementById("credits").style.display = "none";
       document.getElementById("main").style.display = "none";
       document.getElementById("titolo").style.display = "block";
       document.getElementById("easy").style.display = "block";
       document.getElementById("medium").style.display = "block";
       document.getElementById("hard").style.display = "block";
       document.getElementById("epic").style.display = "block";
       document.getElementById("creditBtn").style.display = "block";

       document.getElementById("pap_trombone").style.display = "block";
         document.getElementById("explain").style.display = "block";

       document.getElementById("pentagramma").style.display = "none";

       removeElement('pentagramma');

       var indhtml = '<div id="pentagramma"></div>';

       addElement('main', 'div', 'pentagramma', indhtml);

      };

      var restart = function(){

        stop = 0;
        stopTime = 0;
        stopDraw = 0;

        document.getElementById("easy").style.display = "none";
        document.getElementById("medium").style.display = "none";
        document.getElementById("hard").style.display = "none";
        document.getElementById("epic").style.display = "none";
        document.getElementById("titolo").style.display = "none";

        document.getElementById("back").style.display = "none";
        document.getElementById("restart").style.display = "none";

        document.getElementById("credits").style.display = "none";
        document.getElementById("main").style.display = "block";
        document.getElementById("creditBtn").style.display = "none";

        document.getElementById("pentagramma").style.display = "none";

        document.getElementById("pap_trombone").style.display = "none";
        document.getElementById("explain").style.display = "none";

        appearCanvas();

        removeElement('pentagramma');

        var indhtml = '<div id="pentagramma"></div>';

        addElement('main', 'div', 'pentagramma', indhtml);

        reset();

      };

      var easy_level = function() {
        fac = true;
        med = false;
        dif = false;
        epi = false;

        reset();
        runGame();
      };

      var medium_level = function() {
        fac = false;
        med = true;
        dif = false;
        epi = false;

        reset();
        runGame();
      };

      var hard_level = function() {
        fac = false;
        med = false;
        dif = true;
        epi = false;

        reset();
        runGame();
      };

      var epic_level = function() {
        fac = false;
        med = false;
        dif = false;
        epi = true;

        reset();
        runGame();
      };