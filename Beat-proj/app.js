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
    })
