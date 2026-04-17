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

        const createBG = (x) => add([
            sprite("background.png", { width: width(), height: height() }),
            pos(x, 0),
            "bg"
        ]);

        createBG(0);
        createBG(width());


        const player = add([
            sprite("skater.png"),
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

            if (player.pos.y > 600) go("lose");
        });
    });

    scene("lose", () => {
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
