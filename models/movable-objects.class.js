

class MovableObject extends DrawableObject {

    rectColor = '';
    speed = 2;
    speedY = 0;
    gravityValue = 0.6;
    ground = 0;
    mirrorImg = false;

    constructor() {
        super()
        this.applyGravity();
    }

    applyGravity() {
        setInterval(() => {
            if (this.isInTheAir() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.gravityValue;
            } else {
                this.speedY = 0;
                this.y = this.ground;
            }

        }, 1000 / 60);
    }

    isInTheAir() {
        return this.y < this.ground
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    drawRect(ctx, x,y, width, height) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = this.rectColor;
        ctx.rect(x, y, width, height);
        ctx.stroke();
    }
}