

class EnemyHandler {

    character;
    enemys = [];
    constructor(character) {
        this.character = character;

        this.repositionEnemys();

    }

    repositionEnemys() {
        let levelBlock = 1;
        let blockLength = 1500;
        setInterval(() => {
            let playerPosX = this.character.x;
            if (playerPosX > levelBlock*blockLength) {
                levelBlock++;
                console.log(levelBlock);
                this.createChicken(levelBlock);
                if (levelBlock % 5 == 0){
                    this.createBoss();
                }
            }
           
            this.deleteEnemysTooFarAway();
            this.checkToDeleteDeadEnemys();
        }, 100);
    }

    deleteEnemysTooFarAway() {
        let playerPosX = this.character.x;
        while (this.enemys.length > 0) {
            if (playerPosX - this.enemys[0].x > 2000) {
                this.enemys.splice(0, 1);
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
            this.enemys.push(chicken);
        }
    }

    createBoss() {
        let boss = new Boss();
        boss.x = this.character.x + 1500;
        this.enemys.push(boss);
    }

    getEnemys() {
        return this.enemys;
    }

    checkToDeleteDeadEnemys() {
        let enemys = this.enemys;
        for (let i = enemys.length - 1; i >= 0; i--) {
            let enemy = enemys[i];
            if (this.canEnemyDelete(enemy)) {
                console.log(i);
                enemys.splice(i, 1);
            }
        }
    }

    canEnemyDelete(enemy) {
        if (enemy.deadTime) {
            let nowTime = Date.now();
            let canDelete = nowTime - enemy.deadTime > 1000;
            console.log(nowTime - enemy.deadTime > 1000);
            return canDelete;
        }
        return false;
    }
}