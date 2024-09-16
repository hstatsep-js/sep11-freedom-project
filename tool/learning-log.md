# Tool Learning Log



the buttons work, but they play the same sound, I don't know why.

1/21/2024

* you have to rename sound, I thought it was always just sound for all Howler instances, but it isn't
* both buttons finnally work!

2/3/24

*   I know how to confidentially create buttons that will play noise every time it's clicked
* in order to create muliple buttons, quickly, I have to create an array, and push my sounds into that array, which I have tinkered with in index.html

```js

// Create an array to store Howl sound instances
    var sounds = [];

     // Store the sound instance in the array
        sounds.push(sound);

```

* to stop a button, you have to create another button to end it, or make it so that is clicked once again, the sound will stop.





2/27/24

* I have set up all of the HTML and CSS for my Freedom Project
* the DOM Lessons have been very useful in creating clickable 'divs' that play sound




```js
var sound2 = new Howl({
  src: ["sounds/arcade-retro.wav"]
});

var containertwo = document.getElementById("div2");

  containertwo.addEventListener("click",function(event){
    sound2.play();
  });
```
I am still trying to find better audio files, because the ones I have right now are pretty boring

3/1/2024

Since I have learned how to use objects, I think on Monday (3-4-24), I will try to refactor the code for my buttons to make it more managable

3/4/2024

* [soundsCrate](https://soundscrate.com/instruments.html)

this website looks like it has a lot of sound effects, exactly what I need, I'll listen to them at home and see what sounds good.

changed CSS colors for div


3/9/24

* I have now changed the volume of the sounds, as they were too loud
* I have figured I can make the sounds loop, which I have tested with the fifth sound ' amen break '.


 3/10/24
* added sound for fifth div
* pretty much done with MVP, I do want the color to change when clicked must do on monday!


3/17/24

* added sound to div 6,
* fixed broken sound for div 5
* added images to all divs

3/18/24
* removed images from 5 & 6
* div #1 changes color when clicked, works alongside sound function
* will do this to the rest of the Divs



3/22/24

* all divs will change color when clicked to indicate the activation of a sound
* this was the extra part of the MVP that I wanted to do


3/25/2024
* [web that makes sounds](https://sfxr.me/)
* [favicon](https://www.w3schools.com/html/html_favicon.asp)



4/7/2024

* fixed visual bug on my grid. Where the last box was not showing up.

> the issue was due to there being no closing tags in the previous html tag before my div 6.


4/8/2024

* fixed image sizes being too big

4/15/2024

* testing using only one variable sounds, to hold all of my, sounds
* it's worked for two of the containers
* going to try at home


<!--
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
