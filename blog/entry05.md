# Entry 5
##### X/X/XX
## I have structured my freedom project by integrating specialized techniques from several key resources to ensure it meets all technical and creative requirements. Using Kaboom.js as my primary framework, I developed a responsive endless runner that focuses heavily on "game feel," I implemented a audio system that it action-triggered, such as jumping and crashing, that provides immediate feedback to the player. To keep the gameplay from feeling repetitive
```js
    onKeyPress("space", () => {
            if (player.isGrounded()) player.jump(850);
            play("audio", {
                volume: 0.8,
            detune: rand(-100, 100),
            });
```
Crash audio
```js
   player.onCollide("obstacle", () => {
            music.stop();
            shake(50);
            play("crash", {volume:0.5});
            go("lose", Math.floor(score / 10));
    });
```
## I used randmization logic for the jump sounds, varying the pitch each time the spacebar is pressed. My engineering process also involved managing game performance; I wrote a logic to destroy obstacles once they leave the screan and created a parallax-style background system that repositions tiles ahead of the player to maintain a seamless enviroment.
```js
     onUpdate("obstacle", (obj) => {
    if (obj.pos.x < player.pos.x - 600) {
        destroy(obj);
    }
});
```
### To refine the visual presentation, I personally used Photoshop t color grade my assests,moving beyond standard sprites to achieve a chesive, professional aesthetic for my "skater" theme. My research was anchored in tutorials from Franks Laboratory and freeCodeCamp, which taught me how to handle complex physics like gravity and collision detection, as well as how to structure a project into distinct scenese for gameplay and game-over states. By organizing my code, it allowed me to have a clean, maintainable, and scalable project that demonstrates both technical proficiency and iterative design approach.

## Some issues that i  faced was that Kaboom couldn't intialize properly, because of the issues above ( and no guaranteed canvas), Kaboom failed to create a valid rendering context, leading to errors like: Cannot read properties of null(reading `drawingBufferWidth`). Whic caused me to not be able to view my code for a while, i used a myriad of websites to use my code and it showed me the same error everytime. Then one day, it magically appeared.

## Currently im struggling to add bg music while playing the game, it wont load even though i believe that i did everything right.
```js
   scene("game", () => {
        const music = play("bgmusic", {
            volume: 0.5,
            loop: true
        });
```
### sources
<a href="https://www.youtube.com/watch?v=iM1iSvloMlo&t=6284s">
GameDev with JavaScript and Kaboom.js – Metroidvania Game Tutorial</a>
<a href="https://youtu.be/4OaHB0JbJDI?si=x0UNdXRmkyWw8bKQ">
Easy JavaScript Game Development with Kaboom.js (Mario, Zelda, and Space Invaders) - Full Course</a>
<a href="https://youtu.be/4OaHB0JbJDI?si=x0UNdXRmkyWw8bKQ">
Easy JavaScript Game Development with Kaboom.js (Mario, Zelda, and Space Invaders) - Full Course</a>
<a href="https://youtu.be/Eg_zUEy_lDE?si=kUdZOhLq1SzuAuYl">Audio Visual Effects in JavaScript Games</a>
<a href="https://opengameart.org/">vfx</a>




[Previous](entry04.md) | [Next](entry06.md)

[Home](../README.md)
