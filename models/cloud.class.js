

class Cloud extends MovableObject {

    constructor() {
        super();
        this.speed = 0.05 + Math.random() * 0.1;
        this.height = 400;
        this.width = 1600;
        this.loadImage('img/5.Fondo/Capas/4.nubes/Completo.png');
        this.startAutoMove();

    }

    startAutoMove() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }
}