import kaboom from "https://unpkg.com/kaboom@3000.1.17/dist/kaboom.mjs";

const startBtn = document.getElementById("start-btn");

startBtn.onclick = () => {
    document.getElementById("ui").remove();

    kaboom({
        background: [20, 20, 20],
        width: 800,
        height: 400,
        letterbox: true,
    });


    loadSprite("skater", "assets/sprites/skater.png");
    loadSprite("background", "assets/sprites/background.png");
    loadSound("crash", "assets/jump.flac");
    loadSound("jump", "assets/audio.mp3");
    loadSound("bgmusic", "assets/insertcoin.mp3");

    setGravity(2400);

    scene("game", () => {
        const music = play("bgmusic", { volume: 0.4, loop: true });

        let score = 0;
        let SPEED = 400;

        const createBG = (x) => add([
            sprite("background", { width: width(), height: height() }),
            pos(x, 0),
            z(-1),
            "bg"
        ]);

        createBG(0);
        createBG(width());

        const player = add([
            sprite("skater"),
            pos(100, 200),
            area(),
            body(),
            scale(1.2),
            anchor("center"),
        ]);


        let platformX = 0;
        const spawnFloor = (x) => {
            add([
                rect(width() + 10, 40),
                pos(x, height() - 40),
                area(),
                body({ isStatic: true }),
                color(40, 40, 40),
                "floor"
            ]);
            platformX += width();
        };

        spawnFloor(0);
        spawnFloor(width());


        onKeyPress("space", () => {
            if (player.isGrounded()) {
                player.jump(900);
                play("jump", { volume: 0.6, detune: rand(-200, 200) });


                tween(player.scale.y, 0.8, 0.1, (val) => player.scale.y = val, easings.easeOutQuad);
                wait(0.1, () => tween(player.scale.y, 1.2, 0.1, (val) => player.scale.y = val));
            }
        });


        const spawnObstacle = () => {
            add([
                rect(30, rand(40, 70)),
                area(),
                outline(4),
                pos(player.pos.x + width(), height() - 40),
                anchor("botleft"),
                color(128,0, 128),
                "obstacle",
            ]);
            const waitTime = rand(0.8, 2) - (score / 5000);
            wait(Math.max(waitTime, 0.5), spawnObstacle);
        };

        spawnObstacle();


        const scoreLabel = add([
            text("Score: 0", { size: 24, font: "monospace" }),
            pos(24, 24),
            fixed(),
        ]);


        player.onUpdate(() => {
            player.move(SPEED, 0);
            SPEED += 0.1;
            camPos(player.pos.x + 200, 200);


            if (player.pos.x + width() > platformX) {
                spawnFloor(platformX);
            }

            get("bg").forEach((bg) => {
                if (bg.pos.x + width() < player.pos.x - 400) {
                    bg.pos.x += width() * 2;
                }
            });


            if (player.pos.y > 500) {
                music.stop();
                go("lose", Math.floor(score / 10));
            }

            score += 1;
            scoreLabel.text = `Score: ${Math.floor(score / 10)}`;
        });

        onUpdate("obstacle", (obj) => {
            if (obj.pos.x < player.pos.x - 200) {
                destroy(obj);
            }
        });

        player.onCollide("obstacle", () => {
            music.stop();
            shake(20);
            play("crash", { volume: 0.5 });
            go("lose", Math.floor(score / 10));
        });
    });

    scene("lose", (finalScore) => {
        add([
            text("WIPEOUT!", { size: 64 }),
            pos(center().x, center().y - 40),
            anchor("center"),
            color(255, 0, 0),
            fixed(),
        ]);

        add([
            text(`FINAL SCORE: ${finalScore}\n\n[ SPACE ] TO RESTART`, { size: 24, align: "center" }),
            pos(center().x, center().y + 60),
            anchor("center"),
            fixed(),
        ]);

        onKeyPress("space", () => go("game"));
    });

    go("game");
};
