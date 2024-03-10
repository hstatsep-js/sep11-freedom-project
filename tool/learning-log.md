# Tool Learning Log

Tool: **Howler.js**

Project: **interactive beat kit**

---

10/29/23:
* [howler.js](https://howlerjs.com/)
* [adding Howler.js](https://youtu.be/sVtCUoZtKH8?si=whRrDfxE2YyTWDvO)
* I have created a howler-test.html file, although I am confused as to how to get specific sounds. I may need to download it to know.
* next week, i will set up a simple button, that makes noise when clicked.
12/04/2023:
I am building another button that makes another horse noise when clicked, it's saying it isn't defined right now though, don't know the issue

1/4/2024

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
<!--
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
