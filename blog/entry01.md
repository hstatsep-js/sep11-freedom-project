# Entry 1
##### 11/6/23

## Content :
* I have ultimately decided on using Howler.js
* It combines my interest of music/beats and CSS customization of interactable web features
* Tinkering:

```js
<button id="myBTN" type ="button"> click for suprise!</button>

 var myBTn = document.getElementbyId("myBTN");

            myBTN.eventListener("click", function(e)) {

            var sound = new Howl({
            src: ['sound.mp3']
            });

            sound.play();

        }

```

### What will I make?
* I will create an interactable beat kit using the various noises howler has to offer
* These beats will be able to loop, the user will be able to cut/chop up the noises, to hopefully make a good beat

### Sources:
* [Howler.js](https://howlerjs.com/)
* [howler.js-github](https://github.com/goldfire/howler.js#documentation)

the Other tool I considered

* [NASA.api](https://api.nasa.gov/)
* [api-customization](https://ssd.jpl.nasa.gov/tools/sbdb_query.html)

# EDP {Engineering, Design, Process} :

i am currently in the first three steps of the *EDP*, those being
* Definition of the problem :
    * I want to make an interactable beat kit using JS, HTML, and CSS, but I don't have a vast library of sounds to choose from.
    * There are two options, earsketch.js and Howler.js.
* Research of the problem :
    * I choose Howler because it is easier to use for my intentions, earsketch is it's seperate thing, mainly for the creation of music that won't be used in something else
    * Howler.js, on the other hand, has a vast library of sounds that are quick to use and integrate well with HTMl/CSS
* brainstorm of the problem :
    * I am thinking back on the beat machines of the past, physical hardware producers used to chop up sounds and noises to make noises.
    * I want to essentially make those beat machines a digital thing.
## Skills :
* Consideration:
    * I need to keep in mind that this will be used by other people, so I should I try to keep it as simple and intuitive as possible for people to use
* How to read:
    * theres a lot of content in the documentation for howler.js, so going forward I have to take a surgical approach to it so I can learn it as efficently as possible, in regards to my project.
    
[Next](entry02.md)

[Home](../README.md)