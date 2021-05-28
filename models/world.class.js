

class World {

    canvas;
    ctx;

    backgroundHandler;
    enemyHandler;
    bottles = [];
    character;
    hpBar = new StatusBar('hp');
    bottleBar = new StatusBar('bottle');
    keyboard = new Keyboard();
    cameraOffsetX = 0;

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');

        this.keyboard = new Keyboard();
        this.character = new Character(this, this.hpBar, this.bottleBar);
        this.enemyHandler = new EnemyHandler(this.character);
        this.backgroundHandler = new BackgroundHandler(this.character);
        
        this.checkCollisions();
        this.draw();
    }

    checkCollisions() {
        setInterval(() => {
            if (this.checkCollisionToEnemys(this.character)) {
                this.character.damage()
            }
            for (let i = 0; i < this.bottles.length; i++) {
                const bottle = this.bottles[i];
                if (!bottle.isBroken) {
                    let hittetEnemy = this.checkCollisionToEnemys(bottle);
                    if (hittetEnemy) {
                        bottle.isBroken = true;
                        hittetEnemy.damage();
                        if (hittetEnemy.isDead()) {
                            this.character.eat();
                        }
                    }
                }
            }
        }, 50);
    }
    
    checkCollisionToEnemys(object) {
        let enemys = this.enemyHandler.getEnemys();
        for (let i = 0; i < enemys.length; i++) {
            let isCollide = object.checkCollideWith(enemys[i]);
            if (isCollide) {
                console.log('COLLIDED WITH ENEMY');
                return enemys[i];
            }
        }
        return null;
    }

    draw() {
        this.cameraOffsetX = -this.character.x + 200;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.cameraOffsetX, 0);

        this.drawObjectsArray(this.backgroundHandler.getBackgrounds());
        this.drawObjectsArray(this.enemyHandler.getEnemys());
        this.drawObjectsArray(this.bottles);
        this.drawObject(this.character);
        
        this.drawBars();

        this.ctx.translate(-this.cameraOffsetX, 0);

        let self = this;
        requestAnimationFrame(() => {   // Loop this.draw()
            self.draw();
        });
    }

    drawObject(object) {
        if (object.mirrorImg) {
            this.flipImg(object);
        }
        object.draw(this.ctx);
        
        if (object.mirrorImg) {
            this.flipImgBack(object);
        }
    }

    drawObjectsArray(objects) {
        objects.forEach(o => {
            this.drawObject(o);
        });
    }

    flipImg(object) {
        this.ctx.save();
        this.ctx.translate(object.width, 0);
        this.ctx.scale(-1, 1);
        object.x *= -1;
    }

    flipImgBack(object) {
        object.x *= -1;
        this.ctx.restore();
    }
    
    drawBars() {
        this.ctx.translate(-this.cameraOffsetX, 0);
        
        this.drawObject(this.hpBar);
        this.drawObject(this.bottleBar);

        this.ctx.translate(this.cameraOffsetX, 0);
    }

    createBottle(x, y, directionRight) {
        this.bottles.push(new Bottle(x, y, directionRight, this));
    }

    deleteBottle(toFind) {
        let index = this.bottles.indexOf(toFind);
        this.bottles.splice(index, 1);
    }
}