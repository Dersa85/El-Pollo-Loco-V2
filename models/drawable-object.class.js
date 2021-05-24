

class DrawableObject {

    
    img = new Image();
    x = 0;
    y = 0;
    height = 100;
    width = 100;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    addImagesToArray(pathArray, inArray) {
        pathArray.forEach(path => {
            let img = new Image();
            img.src = path;
            inArray.push(img);
        });
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        if (this.rectColor) {
            this.drawRect(ctx, this.x, this.y, this.width, this.height);
        }
    }

    
}