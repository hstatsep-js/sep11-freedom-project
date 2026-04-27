import kaboom from "https://unpkg.com/kaboom@3000.1.17/dist/kaboom.mjs";

const startBtn = document.getElementById("start-btn");

startBtn.onclick = () => {
    document.getElementById("ui").remove();

    kaboom({
        background: [30, 30, 30],
        width: 800,
        height: 400,
        letterbox: true,
    });


    loadSprite("skater", "assets/sprites/skater.png");
    loadSprite("background", "assets/sprites/background.png");

    setGravity(1600);

    scene("game", () => {
       let score= 0;
        const createBG = (x) => add([
            sprite("background", { width: width(), height: height() }),
            pos(x, 0),
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
        ]);


        let platformX = 0;
        const spawnFloor = (x) => {
            add([
                rect(width(), 40),
                pos(x, height() - 40),
                area(),
                body({ isStatic: true }),
                color(50, 50, 50),
                "floor"
            ]);
            platformX += width();
        };

        spawnFloor(0);
        spawnFloor(width());


        onKeyPress("space", () => {
            if (player.isGrounded()) player.jump(850);
        });
         const spawnObstacle = () => {
            add([
                rect(40, rand(40, 80)),
                area(),
                outline(4),
                pos(player.pos.x + width(), height() - 40),
                anchor("botleft"),
                color(128, 0, 128),
                "obstacle",
            ]);
            wait(rand(1, 2.5), spawnObstacle);
        };

        spawnObstacle();


        const scoreLabel = add([
          text( score, {size: 24}),
            pos(24, 24),
            fixed(),
        ]);


        onKeyPress("space", () => {
            if (player.isGrounded()) {
                player.jump(850);
            }
        });

        player.onUpdate(() => {
            player.move(300, 0);
            camPos(player.pos.x + 200, 200);

            get("bg").forEach((bg) => {
                if (bg.pos.x + width() < player.pos.x - 400) {
                    bg.pos.x += width() * 2;
                }
            });

            if (player.pos.x + width() > platformX) {
                spawnFloor(platformX);
            }

            if (player.pos.y > 600) {
              go("lose", score);
            }
            score += 1;
            scoreLabel.text = `Score: ${Math.floor(score / 10)}`;
        });
        player.onCollide("obstacle", () => {
            shake();
            go("lose", Math.floor(score / 10));
    });

        });


      onUpdate("obstacle", (obj) => {
    if (obj.pos.x < player.pos.x - 600) {
        destroy(obj);
    }
});

    scene("lose", (finalScore) => {
        add([
            text("WIPEOUT!", { size: 48 }),
            pos(center()),
            anchor("center"),
            fixed(),
        ]);
        onKeyPress("space", () => go("game"));
    });

    go("game");
};

