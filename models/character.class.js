

class Character extends MovableObject {

    IMAGES_IDLE = [];
    IMAGES_WALK = [];
    IMAGES_JUMP = [];
    IMAGES_DEAD = [];
    IMAGES_HURT = [];
    
    world;
    jumpPower = 15;
    lastHit = 0;

    maxLeftX = -500;
    
    
    bottle = 5;
    hpBar;
    bottleBar;

    constructor(world) {
        super();
        this.rectColor = 'green';
        this.speed = 4.5;
        this.ground = 205;
        this.x = 250;
        this.y = 50;
        this.height = 220;
        this.width = 130;
        this.world = world;
        this.hp = 5;
        
        this.addImagesToArray([ // idle animation
            './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-2.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-3.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-4.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-5.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-1.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-6.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-7.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-8.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-9.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-10.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-1.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-2.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-3.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-4.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-5.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-6.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-7.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-8.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-9.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-10.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-11.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-12.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-13.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-14.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-15.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-16.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-17.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-18.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-19.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/LONG_IDLE/I-20.png'
        ], this.IMAGES_IDLE);
        
        this.addImagesToArray([ // Walk animation
            './img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-21.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-22.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-23.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-24.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-25.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-26.png'
        ], this.IMAGES_WALK);
        
        this.addImagesToArray([ // Jump animation
            //'./img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-31.png',
            //'./img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-32.png',
            //'./img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-33.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-34.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-35.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-36.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-37.png',
            //'./img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-38.png',
            //'./img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-39.png'
        ], this.IMAGES_JUMP);

        this.addImagesToArray([ // Dead animation
            './img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-51.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-52.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-53.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-54.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-55.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-56.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-57.png'
        ], this.IMAGES_DEAD);

        this.addImagesToArray([ // Hurt animation
            './img/2.Secuencias_Personaje-Pepe-correccion/4.Herido/H-41.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/4.Herido/H-42.png',
            './img/2.Secuencias_Personaje-Pepe-correccion/4.Herido/H-43.png'
        ], this.IMAGES_HURT);
        
        this.setKeyboardControl(world.keyboard);
        this.applyBottleRegeneration();
        this.applyhunger();

    }

    restart() {
        this.hp = 5;
        this.world.hpBar.setValue(this.hp);
        this.x = 250;
        this.maxLeftX = -500;
        this.lastHit = 0;
    }

    applyhunger() {
        setInterval(() => {
            this.hp -= 1;
            this.world.hpBar.setValue(this.hp);
        }, 10000);
    }

    applyBottleRegeneration() {
        setInterval(() => {
            if (this.bottle < 5) {
                this.bottle += 1
                this.world.bottleBar.setValue(this.bottle);
            }
        }, 600);
    }

    animateJump(imageArray, time) {
        let counter = 0
        let lenght = imageArray.length;
        setInterval(() => {
            if (this.isInTheAir() && !this.isDead() && !this.isHurt()) {
                this.img = imageArray[counter % lenght];
                if (counter < lenght) {
                    counter++;
                }
            } else {
                counter = 0;
            }
        }, time);
    }

    animateWalk(imageArray, time, keyboard) {
        let counter = 0
        let lenght = imageArray.length;
        setInterval(() => {
            if ((keyboard.isPressedRight() || keyboard.isPressedLeft()) && !this.isInTheAir() && !this.isDead() && !this.isHurt()) {
                this.img = imageArray[counter % lenght];
                counter++;
            } else {
                counter = 0;
            }
        }, time);
    }

    animateIdle(imageArray, time, keyboard) {
        let counter = 0
        let lenght = imageArray.length;
        setInterval(() => {
            if (keyboard.isNothingPressed() && !this.isInTheAir() && !this.isDead() && !this.isHurt()) {
                this.img = imageArray[counter % lenght];
                counter++;
            } else {
                counter = 0;
            }
        }, time);
    }

    animateDead(imageArray, time) {
        let counter = 0;
        let length = imageArray.length;
        setInterval(() => {
            if (this.isDead()) {
                this.img = imageArray[counter];
                if (counter < length -1) {
                    counter++;

                } else if (counter == length - 1) {
                    this.world.gameOver();
                    counter = 0;
                    this.restart();
                }
            }
        }, time);
    }

    animateHurt(imageArray, time) {
        let counter = 0;
        let length = imageArray.length;
        setInterval(() => {
            if (!this.isDead() && this.isHurt()) {
                this.img = imageArray[counter % length];
                counter++;
            } else {
                counter = 0;
            }
        }, time);
    }
    
    setKeyboardControl(keyboard) {
        this.movingControl(keyboard);

        this.animateWalk(this.IMAGES_WALK, 190, keyboard);
        this.animateIdle(this.IMAGES_IDLE, 400, keyboard);
        this.animateJump(this.IMAGES_JUMP, 100);
        this.animateHurt(this.IMAGES_HURT, 150);
        this.animateDead(this.IMAGES_DEAD, 250);

    }

    movingControl(keyboard) {
        setInterval(() => {
            if (keyboard.isPressedLeft() && this.maxLeftX <= this.x) {
                this.mirrorImg = true;
                this.moveLeft();
            } else if (keyboard.isPressedRight()) {
                this.mirrorImg = false;
                this.moveRight();
                if (this.maxLeftX < this.x - 500) {
                    this.maxLeftX = this.x - 500;
                }
            }
            if (keyboard.isPressedUp() && !this.isInTheAir()) {
                this.speedY += this.jumpPower;
                console.log(this.speedY);
            }
            if (keyboard.isPressedFire() && this.bottle == 5) {
                console.log('FIRE');
                this.bottle = 0;
                this.world.bottleBar.setValue(this.bottle);
                this.world.createBottle(this.x, this.y + 50, !this.mirrorImg);
            }
        }, 1000/60);
    }

    

    damage() {
        if (this.isHurt()) {
            return;
        }
        if (this.hp > 0) {
            this.hp -= 1;
            this.lastHit = Date.now();
            this.world.hpBar.setValue(this.hp);
        }
    }

    isHurt() {
        let timepassed = Date.now() - this.lastHit;
        return timepassed < 1000;
    }

    eat() {
        if (this.hp >= 5) {
            return;
        }
        this.hp++;
        this.world.hpBar.setValue(this.hp);
    }
}