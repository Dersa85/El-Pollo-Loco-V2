

class EnemyHandler {

    character;
    chickens = [];
    boss;
    constructor(character) {
        this.character = character;
        this.boss = new Boss();
        this.chickens.push(this.boss);

        this.repositionEnemys();

    }

    repositionEnemys() {
        let levelBlock = 1;
        let blockLength = 1500;
        setInterval(() => {
            let playerPosX = this.character.x;
            
            if (playerPosX > levelBlock*blockLength) {
                levelBlock++;
                this.createChicken(levelBlock)
            }
            
            this.deleteEnemysTooFarAway();

        }, 1000);
        
    }

    deleteEnemysTooFarAway() {
        let playerPosX = this.character.x;
        while (this.chickens.length > 0) {
            if (playerPosX - this.chickens[0].x > 2000) {
                this.chickens.splice(0, 1);
            } else {
                break
            }
        }
    }

    createChicken(counter) {
        let playerPosX = this.character.x;
        for (let i = 0; i < counter; i++) {
            let chicken = new Chicken();
            chicken.x = playerPosX + 800 + Math.random() * 1000;
            this.chickens.push(chicken);
        }
    }

    getEnemys() {
        return this.chickens;
    }

}