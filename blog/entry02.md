# Entry 2
##### 12/11/23

## content:
* I am continuing my research with howler.js
## sources:
* https://codepen.io/n3pu/pen/oNNZPdp
* https://dyclassroom.com/reference-javascript/work-with-audio-in-javascript-using-howler-js
* https://unpkg.com/browse/howler@1.1.22/README.md
* https://www.crowdbotics.com/blog/build-your-own-radio-streaming-app-with-howler-js
* https://goldfirestudios.com/howler-js-modern-web-audio-javascript-library
## EDP {Engineering design process}
* I am still in the brainstorming part of the process

## Discoveries!!

* you need to find your own audio files in order for howler to play any noise.
    * I was under the impression that they provided audio files for you, but instead it acts like SASS, just making things easier.
* in SASS'S case, it made CSS easier to repeat, and Howler does the same thing

## Tinkering

```js
// button that makes a noise
<button id="myBTN" type ="button"> click for suprise!</button>

// Create a new Howl instance
          var sound = new Howl({
            src: ['sounds/horse.mp3']
          });


// Get the button element by its id
    var button = document.getElementById('myBTN');

    // Add a click event listener to the button
    button.addEventListener('click', function() {
        // Play the sound when the button is clicked
        sound.play();
    });
```


I make a button, then I search the web for a horse audio file, and store it into a audio folder

I declare a new howl instance

I then declare a varaiable titled button, which will equal the button

I add a click event listener to the varaiable, which will play the sound when clicked
## Skills:

## FP Goal for Winter break!!:

I plan to work with my brother on learning howler.js and going over JS syntax, I think what I makes coding diffcult for me, is the syntax, so going over it for an extended period of time will not only be useful for the future, but it will give me something to do.



[Previous](entry01.md) | [Next](entry03.md)

[Home](../README.md)
