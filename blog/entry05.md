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
[Previous](entry04.md) | [Next](entry06.md)

[Home](../README.md)
