

class Chicken extends MovableObject {

    deadTime = 0;
    IMAGES_ANIMATION = [];
    IMAGES_DEAD = [];
    constructor() {
        super();
        this.rectColor = 'red';
        this.y = 350;
        this.ground = 350;
        this.height = 70;
        this.width = 70;
        this.speed = 1.6 + Math.random() * 0.5;
        this.addImagesToArray([
            './img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
            './img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
            './img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
        ], this.IMAGES_ANIMATION);

        this.animate(300);
        this.goLeft();
    }

    animate(time) {
        let counter = 0
        let lenght = this.IMAGES_ANIMATION.length;
        setInterval(() => {
            if (this.isDead()) {
                let img = new Image();
                img.src = './img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png';
                this.img = img;
                if (!this.deadTime) {
                    this.deadTime = Date.now();
                }
                return;
            }
            this.img = this.IMAGES_ANIMATION[counter % lenght];
            counter++;
        }, time);
    }

    goLeft() {
        setInterval(() => {
            if (!this.isDead()) {
                this.moveLeft();
            }
        }, 1000/60);
    }

    damage() {
        this.hp--;
    }

    

    
}