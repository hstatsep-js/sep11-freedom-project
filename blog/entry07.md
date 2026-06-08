# Entry 7
##### 6/7/2026
## The Psychology of Arcade Gaming
### Arcade games remain uniquely captivating to everyone no matter the age, as they are engineered to tap into core human psychology, specifically through the creation of a mental "flow state" and the activation of the brain's reward system. In the text it states, <a href="https://youtu.be/4OaHB0JbJDI"> "They allow you to step into a different world, taking on the role of powerful characters or embarking on epic quests."</a>This choice allows players to completely submerge themselves in the task at hand, meaning that our real-world worries fade away as our mind becomes entirely locked into the rhythm of the game. Arcades provide a perfect enviroment for this deeply satisfying psychological state to take hold.

## EDP- Midnight Skater
### My inten of Midnight Skater was to replicate that feeling when you go to the arcade and play your favorite game. The game might not be diffcult at all, but the feeling of getting the high score fufill more than anything. I wanted to replicate the issues that skaters face while riding through New York City with the menagerie of obstacles that vary in size.
```js
 const spawnObstacle = () => {
            add([
                rect(30, rand(40, 70)),
                area(),
                outline(4),
                pos(player.pos.x + width(), height() - 40),
                anchor("botleft"),
                color(128,0, 128),
                "obstacle",
```


 ### I made sure that the obstacles change sizes, in this case between the rand of 40 and 70, i didn't want to increase the sizes too much to the point that you cant avoid, so i decided that 70 was the maximum. As you pass each obstacle the speed increases, making it harder for you to avoid the obstacle due to how you're going.
 ```js
  player.onUpdate(() => {
            player.move(SPEED, 0);
            SPEED += 0.1;
            camPos(player.pos.x + 200, 200);
```
## Skills
### Learning to utilize Kaboom and following numerous tutorials over the past few months has increased my understanding of coding, particularly with sprites. Even though I made my own sprite, Load Audio allowed me to add vfx and retro background music whenever I crashed into or jumped over an obstacle. This made my game more appealing to players because most others didn't think to add to theirs. I'm happy that I conducted thorough research because it allowed me to impress people with the knowledge I gained.
## Takeaway
### When presenting my project to the class it felt easy. That may feel strange,but all the time that i spent presenting to the class about all the mini projects we done across the year prepared me for this one. Even though i could work on eye contact. I felt that i did better with presenting to the class because i truly know what i'm talking about. I never prepared a script for my presentations and often extemporise the entire thing, but this time i created talking point such as the animation i created via After effects and the whole taking point about nostalgia and connect it back to my childhood. This process of creating Midnight Skater allowed me to combine my hobbies and my school work, which i found enjoyable.
### When presenting my project in the expo, it felt much easier than last year. I convinced my brain that if I make mistakes it wouldn't matter, as i believed that trying to avoid making mistakes often lead you to thing that you fear. So when presenting I imagined talking to my friends, i explained my code, i elaborated on my inspiration of creating Midnight skater, and how i wanted to evoke nostalgia and to tell a story. Well I didn't place in the showcase, i still got the opportunity to be a honorable mention which would suffice. The main lesson that i learned that you should prepare yourself, and that it's okay to make mistakes as we're only human and mistakes are natural.




[Presentation](https://docs.google.com/presentation/d/14O3PVi5EvhNTB7DXAWyRDX4Z3p0sQG6d3x2v9vaKJ0U/edit?slide=id.p#slide=id.p) | [Next](entry08.md)

[Home](../README.md)
