# Mastering Visual Logic in Kaboom.js
#### 1/16/26

##### Over the past few weeks, Luciano and I have been diving deep into game development for our project, specifically focusing on creating reactive visuals with the Kaboom.js library. Our goal has been to understand how code translate players actions - like making a mistake - into a visual representation on the screen.

## Creating Visual state
##### In a game like Hangman, the visuals must react to the player's errors. We have ben working on a script that draws a oink character piece by piece based on the game's current state.
* The state : we use a variable let mistake +0 to track wrong guesses.
* Drawing Array: instead of long"if: statements, we use an array of functions called hangmanParts.
* Kaboom.js Primitives; Each function uses tools like drawCircle() and drawLine().
* The Render Loop: Using the onDraw hook, a for loops fires drawing functions based on the current mistake count.
```js  
   // number of wrong guesses (0–6)
let mistakes = 0;

// cute pink hangman parts (drawn step-by-step)
const hangmanParts = [
  // head
  () => {
    drawCircle(vec2(600, 200), 20, {
      color: rgb(255, 105, 180),
    });
  },

  // body
  () => {
    drawLine(
      vec2(600, 220),
      vec2(600, 280),
      {
        width: 4,
        color: rgb(255, 105, 180),
      }
    );
  },

  // left arm
  () => {
    drawLine(
      vec2(600, 240),
      vec2(570, 260),
      {
        width: 4,
        color: rgb(255, 105, 180),
      }
    );
  },

  // right arm
  () => {
    drawLine(
      vec2(600, 240),
      vec2(630, 260),
      {
        width: 4,
        color: rgb(255, 105, 180),
      }
    );
  },

  // left leg
  () => {
    drawLine(
      vec2(600, 280),
      vec2(580, 320),
      {
        width: 4,
        color: rgb(255, 105, 180),
      }
    );
  },

  // right leg
  () => {
    drawLine(
      vec2(600, 280),
      vec2(620, 320),
      {
        width: 4,
        color: rgb(255, 105, 180),
      }
    );
  },
];

// draw hangman based on mistakes
onDraw(() => {
  for (let i = 0; i < mistakes; i++) {
    hangmanParts[i]();
  }
});
```
#### EDP
##### I realized I am currently in stage 2 or 3 of the design process
* Ive spen time testing code and researching what tools I actually need.
* Intially, I thought I was further along, but staying the research phase with my partner ensures we build the reight features for my project.

  #### Essential Skils Gained
  ###### Beyond writing code, this project has helped me sharpen several "real-world" skilss;\:
  * Using Youtube - finding the right turtorials is hard, and I had to filter out videos from before i was born, to make sure it works with current Kaboom. 
  * My Partner and I come together weekly to discuss what we learned in the previous days, so we can build off, of eachother.
    #Sources - i've gone through video such as - [this](https://www.youtube.com/@JSLegendDev) and videos [such as ](https://youtu.be/wy_fSStEgMs?si=zPv89-0IR__Wcr2C)

   




[Previous](entry01.md) | [Next](entry03.md)

[Home](../README.md)
