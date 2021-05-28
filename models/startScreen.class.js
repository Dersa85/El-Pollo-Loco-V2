

class StartScreen extends DrawableObject {

    world;
    isActive;

    constructor(world) {
        super();
        this.loadImage('./img/9.Intro _ Outro Image/Start Screen/Opción 1.png');
        this.height = 480;
        this.width = 800;
        this.isActive = true;
        this.world = world;
        this.checkKeyboardInput(world.keyboard);
    }

    drawText(ctx) {
        ctx.font = '20px Comic Sans MS';
        ctx.fillText('Run far end eat enough', 10, 30);
        ctx.fillText("the hunger don't stop", 10, 60);
        ctx.fillText('Controls:', 470, 30);
        ctx.fillText('LEFT: Arrow Left', 300, 60);
        ctx.fillText('RIGHT: Arrow Right', 550, 60);
        ctx.fillText('JUMP: Arrow Up', 300, 90);
        ctx.fillText('THROW: Space', 550, 90);
        ctx.font = '30px Comic Sans MS';
        ctx.strokeText('The endless hunger', 360, 440);
    }

    checkKeyboardInput(keyboard) {
        setInterval(() => {
            if (this.isActive && !keyboard.isNothingPressed()) {
                this.isActive = false;
                this.world.start();
            }
        }, 1000 / 60);
    }

    activate() {
        this.isActive = true;
    }
}