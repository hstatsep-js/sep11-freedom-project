// document.querySelector("div").addEventListener("click", function (event) {
// //   alert("STOP!!!");
//   sound1.play();
// });

// new howl instance




var sound1 = new Howl({
  src: ["sounds/snare-drum.mp3"]

});

    var containerOne = document.getElementById("div1");

    containerOne.addEventListener("click",function(e){
        sound1.play();

                    containerOne.classList.toggle("whiteRed");


    })

var sound2 = new Howl({
  src: ["sounds/arcade-retro.wav"]
});

var containertwo = document.getElementById("div2");

  containertwo.addEventListener("click",function(event){
    sound2.play();

    containertwo.classList.toggle("whiteRed");
  });



  var sound3 = new Howl({
    src: ["sounds/blow.wav"]
  });

  var containerthree = document.getElementById("div3");

  containerthree.addEventListener("click",function(event){
    sound3.play();

    containerthree.classList.toggle("whiteRed");
  });




  var sound4 = new Howl({
    src: ["sounds/Basic_Rock_Crash_135.mp3"],
  });

  var containerfour = document.getElementById("div4");

  containerfour.addEventListener("click", function (event) {
    sound4.play();
    sound4.volume(0.2);
    containerfour.classList.toggle("whiteRed");
  });



  var sound5 = new Howl({
    src: ["sounds/amen-break.mp3"],
  });

  var containerfive = document.getElementById("div5");



  containerfive.addEventListener("click", function (event) {
     // If playing, stop the sound
     sound5.play();
     containerfive.classList.toggle("whiteRed");
  });


  var sound6 = new Howl({
    src:["sounds/Cymbal_Groove.mp3"],
    loop: true,

  });

  var containerSix = document.getElementById("div6");

  containerSix.addEventListener("click", function (event){
    sound6.play();
    sound6.volume(0.2);
    if(event.click){

     containerSix.classList.toggle("whiteRed");
    }
    //containerSix.classList.toggle("whiteRed");
  });



