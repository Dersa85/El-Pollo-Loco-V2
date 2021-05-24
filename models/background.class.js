

class Background extends MovableObject {

    paralaxmodificator = 0;
    
    constructor(layer) {
        super();
        this.height = 480;
        if (layer == 0) {
            this.img.src = './img/5.Fondo/Capas/5.cielo_1920-1080px.png';
            this.width = 800;
            this.paralaxmodificator = 0;
        } else if (layer == 1) {
            this.img.src = './img/5.Fondo/Capas/3.Fondo3/Completo.png';
            this.width = 1600;
            this.paralaxmodificator = 0.7;
        } else if (layer == 2) {
            this.img.src = './img/5.Fondo/Capas/2.Fondo2/Completo.png';
            this.width = 1600;
            this.paralaxmodificator = 0.5;
        } else if (layer == 3) {
            this.img.src = './img/5.Fondo/Capas/1.suelo-fondo1/completo.png';
            this.width = 1600;
            this.paralaxmodificator = 0;
        } else if (layer == 4) {
            this.img.src = './img/5.Fondo/Capas/4.nubes/Completo.png';
            this.width = 1600;
            this.paralaxmodificator = 0.9;
        }
    }

    getParalaxOffset(xPosition) {
        let paralaxOffset = (xPosition * this.paralaxmodificator) % this.width;
        return paralaxOffset;
    }
}