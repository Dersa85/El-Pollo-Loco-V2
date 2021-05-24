

class Boss extends MovableObject {


    IMAGES_WALK = [];
    IMAGES_IDLE = [];
    IMAGES_ATTACK = [];
    state = 'ATTACK' // WALK, IDLE

    constructor() {
        super()
        this.rectColor = 'red'
        this.x = 500;
        this.y = 140;
        this.ground = 140;
        this.height = 300;
        this.width = 250;
        this.addImagesToArray([
            './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G1.png',
            './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G2.png',
            './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G3.png',
            './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G4.png'
        ], this.IMAGES_WALK);
        this.addImagesToArray([
            './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png',
            './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G6.png',
            './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G7.png',
            './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G8.png',
            './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G9.png',
            './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G10.png',
            './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G11.png',
            './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G12.png'
        ], this.IMAGES_IDLE);
        this.addImagesToArray([
            './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G13.png',
            './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G14.png',
            './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G15.png',
            './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G16.png',
            './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G17.png',
            './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G18.png',
            './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G19.png',
            './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G20.png',
        ], this.IMAGES_ATTACK);

        this.animate(this.IMAGES_WALK, 300, 'WALK');
        this.animate(this.IMAGES_IDLE, 400, 'IDLE');
        this.animate(this.IMAGES_ATTACK, 300, 'ATTACK');
    }

    animate(animation, time, stateWanted) {
        let counter = 0
        let lenght = animation.length;
        setInterval(() => {
            if (this.state == stateWanted) {
                this.img = animation[counter % lenght];
                counter++;
            } else {
                counter = 0;
            }
        }, time);
    }
}