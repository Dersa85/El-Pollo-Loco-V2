

class EndScreen extends DrawableObject {

    world;
    runRange = 0;
    isActive;

    constructor(world) {
        super();
        this.isActive = false;
        this.world = world;
        this.loadImage('img/9.Intro _ Outro Image/_Game over_ screen/1.you lost.png');
        this.height = 480;
        this.width = 800;
    }


    drawText(ctx) {
        ctx.font = '20px Comic Sans MS';
        ctx.fillStyle = "white";
        ctx.fillText('Nice run.', 50, 50);
        ctx.fillText('But you run only ' + this.runRange + ' zoll.', 50, 80);
        ctx.fillText('Come on, do it better !!!', 50, 110);
    }


    activate(range) {
        this.runRange = range;
        this.isActive = true;
        setTimeout(() => {
            this.world.startScreen.activate();
            this.isActive = false;
        }, 2000);
    }
}