

class Bottle extends MovableObject {

    character;
    IMAGES_FLYING = [];
    IMAGES_BROKEN = [];
    world;

    isBroken = false;

    constructor(x, y, directionRight, world) {
        super();
        this.x = x;
        this.y = y;
        this.speed = 15;
        this.ground = 360;
        this.gravityValue = 0.2;
        this.speedY = 2;
        this.world = world;
        this.addImagesToArray([
            './img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
            './img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
            './img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
            './img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png'
        ], this.IMAGES_FLYING);
        this.addImagesToArray([
            './img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 7.png',
            './img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 8.png',
            './img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 9.png',
            './img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 10.png',
            './img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 11.png',
            './img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 12.png'
        ], this.IMAGES_BROKEN);
        this.animateIdle();
        this.animateBroken();
        this.flying(directionRight);
        this.applyGravity();
        this.checkHitTheGround();
    }

    checkHitTheGround() {
        setInterval(() => {
            if (!this.isInTheAir()) {
                this.isBroken = true;
            }
            
        }, 1000 / 60);
    }

    animateIdle() {
        let counter = 0
        let lenght = this.IMAGES_FLYING.length;
        setInterval(() => {
            if (!this.isBroken) {
                this.img = this.IMAGES_FLYING[counter % lenght];
                counter++;
            }
        }, 50);
    }

    animateBroken() {
        let counter = 0
        let lenght = this.IMAGES_BROKEN.length;
        let intervall = setInterval(() => {
            if (this.isBroken) {
                this.img = this.IMAGES_BROKEN[counter];
                if (lenght -1 > counter) {
                    counter++;
                } else {
                    this.world.deleteBottle(this);
                    clearInterval(intervall);
                }
            }
            
        }, 50);
    }

    flying(directionRight) {
        setInterval(() => {
            if (directionRight) {
                this.moveRight();
            } else {
                this.moveLeft();
            }
            
        }, 1000 / 60);
    }
}