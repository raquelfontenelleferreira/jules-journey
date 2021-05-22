class Fase1 extends Phaser.Scene {
    create (){
        this.Stage1 = true;

        //divide pela metade considerando o ponto de ancoragem que, por padrão, é no centro da IMAGEM
        this.sky = this.add.image(this.game.renderer.width/2, this.game.renderer.height/2, 'sky')

        //(eixo x (largura), eixo y (altura), nome da view/objeto).escala
        this.jules = this.physics.add.sprite(20, 550, 'jules').setScale(2)
        this.jules.damage = false

        //Criação de inimigos - Slime
        this.slimes = this.physics.add.group()
        this.slimes.create(750, 570, 'slime')
        this.slimes.create(650, 320, 'slime')

        //Criação de item - Frutas
        this.foods = this.physics.add.group()
        this.foods.create(500, 220, 'iceCream')
        this.foods.create(200, 170, 'pudding')
        this.foods.create(700, 170, 'taco')
        //this.foods.create(500, 400, 'frenchFries')
        //this.foods.create(600, 400, 'pizza')
        //this.foods.create(700, 400, 'strawberryCake')
        
        //Animações - Jules
        this.anims.create({
            key: 'idle',
            repeat: -1,
            frameRate: 6,
            frames: this.anims.generateFrameNames('jules', {start: 0, end: 5}),
        });
        this.anims.create({
            key: 'walk', 
            repeat: -1,
            frameRate: 6, 
            frames: this.anims.generateFrameNames('jules', {start: 9, end: 16})     
        });
        this.anims.create({
            key: 'low-health',
            repeat: -1,
            frameRate: 3,
            frames: this.anims.generateFrameNames('jules', {start: 27, end: 30})
        });
        this.anims.create({
            key: 'death',
            repeat: -1,
            frameRate: 6,
            frames: this.anims.generateFrameNames('jules', {start: 36, end: 42})
        });

        //Animações Inimigo - Slime
        this.anims.create({
            key: 'idleSlime',
            repeat: -1,
            frameRate: 6,
            frames: this.anims.generateFrameNames('slime', {start: 1 , end: 9 })
        });

        //Colisão do inimigo -> plataforma
        //this.physics.add.existing(this.slimes, true);
        //this.slimes.body.setCollideWorldBounds(true);
        
        
        this.ground2 = this.physics.add.staticGroup();
        this.ground2.create(300, 400, 'ground2');
        this.ground2.create(650, 350, 'ground2');
        this.ground2.create(500, 250, 'ground2');
        this.ground2.create(200, 200, 'ground2');
        this.ground2.create(700, 200, 'ground2');

         
        //verifica se há física no objeto especificado
        this.physics.add.existing(this.jules, true);

        //this.jules.body.setCollideWorldBounds(true);

        //Física da plataforma de baixo
        //tileSprite cria sequências de uma mesma imagem
        //(largura da tela, altura da tela, (largura da imagem x qts vezes ela aparece), (altura imagem * qts vezes aparece), view).setOrigin
        this.floor = this.add.tileSprite(this.game.renderer.width, this.game.renderer.height, 800 * 1, 17 * 1, 'ground').setOrigin(1);

        //verifica se há física no objeto
        this.physics.add.existing(this.floor, true);

        //diz que há colisão entre (objeto1, objeto2)
        //ou seja, eles não ocupam o mesmo espaço na fase
        this.physics.add.collider(this.jules, this.floor);
        this.physics.add.collider(this.jules, this.ground2);
        this.physics.add.collider(this.slimes, this.floor);
        this.physics.add.collider(this.slimes, this.ground2);
        this.physics.add.collider(this.foods, this.floor);
        this.physics.add.collider(this.foods, this.ground2);

        //instancia o cursor - permite que use o teclado para exercer um controle
        //NÃO configura a movimentação
        this.cursors = this.input.keyboard.createCursorKeys();
        this.cursors.enabled = true

        //Colisões relativas
        this.physics.add.overlap(this.jules, this.slimes, this.onHit, null, this)
        this.physics.add.overlap(this.jules, this.foods, this.collectFoods, null, this)

        //Adicionando o total de pontos
        this.score = currentScore;
        this.scoreText = this.add.text(0, 0, 'Pontos: ' + this.score);

        //Audios
        this.sndForestBackground = this.sound.add('forest')
        this.sndForestBackground.loop = true;
        this.sndForestBackground.play();
        this.itemCollect = this.sound.add('itemCollect')
        this.itemCollect.loop = false;
        this.slimeNoise = this.sound.add('slimeNoise')
        this.slimeNoise.loop = false;   

        //Tempo
        this.timeText = this.add.text(0, 20, 'Tempo: ' + time);
        this.timed = this.time.addEvent({ delay: 1000, callback: this.timer, callbackScope: this, loop: true })

    }

    update(){
        if(this.Stage1) {
            this.timeText.setText('Tempo: ' + time);
            this.slimes.playAnimation('idleSlime', true)
            if (this.cursors.enabled){
                if (this.cursors.right.isDown){
                    this.jules.setVelocityX(160)
                    this.jules.flipX = false;
                    if(this.jules.body.touching.down){
                        this.jules.anims.play('walk', true)
                    }
                } else if (this.cursors.left.isDown){
                    this.jules.setVelocityX(-160)
                    this.jules.flipX = true;
                    if(this.jules.body.touching.down){
                        this.jules.anims.play('walk', true)
                    } 
                } else {
                    this.jules.setVelocityX(0)
                    this.jules.anims.play('idle', true)
           
                }
    
                if (this.cursors.up.isDown && this.jules.body.touching.down){
                    console.log(this.jules.x)
                    console.log(this.jules.y)
                    this.jules.setVelocityY(-350)
                }
            }
    
            if (this.jules.damage){
                this.jules.setVelocityX(0)
                //console.log(this.jules.active)
                this.cursors.enabled = false
                this.jules.anims.play('death', true)
                this.morreu = this.time.addEvent({ delay: 1000, callback: this.gameOver, callbackScope: this, loop: false });
            }
    
             if(this.jules.x > 753 && this.jules.y > 519) {
                //console.log('Entrou na condição!')
                this.nextStage();
            }

             /*if(this.jules.x == 211 && this.jules.y == 154) {
                console.log(this.jules.x)
                console.log(this.jules.y)
                this.scene.start('fase1Bonus')
            }*/
        }
    }
    onHit(jules, slimes){
        //console.log(jules.x)
        //console.log(jules.y)
        //console.log(slimes.y)
        //console.log(jules.y - slimes.y)
        //if (jules.y <= slimes.y){
        if ((slimes.y - jules.y) >= 39){
            if (slimes.disableBody(true, true)) {
                this.slimeNoise.play();
            }
            this.score += 30;
            this.scoreText.setText('Pontos: ' + this.score);
        }
        else{
            jules.disableBody(false, false) //active visible
            //console.log(jules.active)
            this.jules.damage = true 
        }
    }
    timer(){
        time--
        if(time === 0) {
            this.scene.start('gameOver');
        }
    }
    collectFoods(jules, foods){
        if(foods.disableBody(true, true)) {
            this.itemCollect.play(); 
        }
        this.score += 20;
        this.scoreText.setText('Pontos: ' + this.score);
    }
    nextStage(){
        this.Stage1 = false;
        currentScore = this.score;
        this.sndForestBackground.stop();
        this.scene.pause('fase1');
        this.scene.start('fase2');
    }
    gameOver(){
        this.timed.remove(false);
        //this.cursors = this.input.keyboard.removeAllKeys(true)
        this.jules.disableBody(true, true)
        this.cursors.enabled = false
        //console.log(this.cursors.enabled)
        //this.scene.start('load')
        time = 100
        this.scene.start('gameOver');
        this.sndForestBackground.stop();
    }
}