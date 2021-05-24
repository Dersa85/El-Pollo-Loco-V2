

class StatusBar extends DrawableObject {


    IMAGES = [];


    constructor(type) {
        super()
        this.x = 20;
        this.width = 220;
        this.height = 60;
        if (type == 'hp') {
            this.addImagesToArray([
                './img/7.Marcadores/Barra/Marcador vida/azul/0_.png',
                './img/7.Marcadores/Barra/Marcador vida/azul/20_.png',
                './img/7.Marcadores/Barra/Marcador vida/azul/40_.png',
                './img/7.Marcadores/Barra/Marcador vida/azul/60_.png',
                './img/7.Marcadores/Barra/Marcador vida/azul/80_.png',
                './img/7.Marcadores/Barra/Marcador vida/azul/100_.png'
            ], this.IMAGES);
        } else if (type == 'bottle') {
            this.y = 60;
            this.addImagesToArray([
                './img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png',
                './img/7.Marcadores/Barra/Marcador_botella/Azul/20_.png',
                './img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png',
                './img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png',
                './img/7.Marcadores/Barra/Marcador_botella/Azul/80_.png',
                './img/7.Marcadores/Barra/Marcador_botella/Azul/100_.png',
            ], this.IMAGES);
            
        }
        this.setImage(5);
    }

    setImage(index) {
        this.img = this.IMAGES[index];
    }

    setValue(value) {
        this.setImage(value);
    }


}