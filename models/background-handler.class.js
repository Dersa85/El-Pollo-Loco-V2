

class BackgroundHandler {

    world;
    originObject;
    background_0 = [];
    background_1 = [];
    background_2 = [];
    background_3 = [];
    clouds = [];

    constructor(originObject) {
        this.world = world;
        this.originObject = originObject;
        this.createBackgrond();

        this.startBackgroundPositionControl();
    }

    createBackgrond() {
        for (let i = 0; i < 5; i++) {
            this.background_0.push(new Background(0));
        }
        for (let i = 0; i < 5; i++) {
            this.background_1.push(new Background(1));
        }
        for (let i = 0; i < 5; i++) {
            this.background_2.push(new Background(2));
        }
        for (let i = 0; i < 5; i++) {
            this.background_3.push(new Background(3));
        }
        for (let i = 0; i < 5; i++) {
            this.clouds.push(new Background(4));
        }
    }

    startBackgroundPositionControl() {
        setInterval(() => {
            this.repositionBackground(this.background_0);
            this.repositionBackground(this.background_1);
            this.repositionBackground(this.background_2);
            this.repositionBackground(this.background_3);
            this.repositionBackground(this.clouds);
            
        }, 1000/60);
    }

    getBackgrounds() {
        return this.background_0.concat(this.background_1).concat(this.background_2).concat(this.background_3).concat(this.clouds);
    }

    repositionBackground(array) {
        let counter = array.length;
        let width = array[0].width - 1;
        let half = Math.floor(counter / 2);
        let characterPosX = this.originObject.x;
        let offsetMultiplicator = Math.floor(characterPosX / width);
        let index = 0;
        for (let i = -half; i < half + 1; i++) {
            let paralax = array[index].getParalaxOffset(characterPosX);
            array[index].x = width * i + offsetMultiplicator * width + paralax - 1;
            index++;
        }
    }
}