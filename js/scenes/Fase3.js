class Fase3 extends Phaser.Scene {
    create() {
        this.Stage3 = true;
        
        this.sky = this.add.image(this.game.renderer.width/2, this.game.renderer.height/2, 'sky')

        this.checkpoint = this.add.image(753, 550, 'checkpoint')

        this.jules = this.physics.add.sprite(20, 530, 'jules').setScale(2)
        this.jules.damage = false

        this.ground2 = this.physics.add.staticGroup();
        this.ground2.create(30, 390, 'ground2'); //comida
        this.ground2.create(30, 190, 'ground2'); //comida
        this.ground2.create(400, 300, 'ground2'); //slime
        this.ground2.create(400, 500, 'ground2'); //comida
        this.ground2.create(400, 100, 'ground2'); //slime
        this.ground2.create(180, 280, 'ground2'); //slime
        this.ground2.create(630, 280, 'ground2'); //slime
        this.ground2.create(770, 390, 'ground2'); //comida
        this.ground2.create(770, 190, 'ground2'); //comida

        this.floor = this.add.tileSprite(this.game.renderer.width, this.game.renderer.height, 800 * 1, 17 * 1, 'ground').setOrigin(1);

        this.slimes = this.physics.add.group();
        this.slimes.create(400, 270, 'slime');
        this.slimes.create(400, 70, 'slime');
        this.slimes.create(180, 250, 'slime');
        this.slimes.create(630, 250, 'slime');

        this.foods = this.physics.add.group();
        this.foods.create(30, 360, 'strawberryCake');
        this.foods.create(30, 160, 'pizza');
        this.foods.create(400, 470, 'taco');
        this.foods.create(770, 360, 'iceCream');
        this.foods.create(770, 160, 'frenchFries');

        //Animações
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

        //Cursores
        this.cursors = this.input.keyboard.createCursorKeys();
        this.cursors.enabled = true

        //Colisores
        //this.jules.body.setCollideWorldBounds(true);
        this.physics.add.existing(this.floor, true);
        this.physics.add.existing(this.jules, this.checkpoint);
        this.physics.add.collider(this.jules, this.floor);
        this.physics.add.collider(this.jules, this.ground2);
        this.physics.add.collider(this.slimes, this.floor);
        this.physics.add.collider(this.slimes, this.ground2);
        this.physics.add.collider(this.foods, this.floor);
        this.physics.add.collider(this.foods, this.ground2);
        this.physics.add.collider(this.checkpoint, this.floor);

        //Colisões relativas
        this.physics.add.overlap(this.jules, this.slimes, this.onHit, null, this)
        this.physics.add.overlap(this.jules, this.foods, this.collectFoods, null, this)
        this.physics.add.collider(this.jules, this.checkpoint, this.checkPoint, null, this);

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
        if(this.Stage3){
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
                    this.nextStage();
                    //this.nextStage();
                }
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
        collectFoods(jules, foods){
            if(foods.disableBody(true, true)) {
                this.itemCollect.play(); 
            }
            this.score += 20;
            this.scoreText.setText('Pontos: ' + this.score);
        }
        timer(){
            time--
            if(time === 0) {
                this.gameOver();
            }
        }
        nextStage(){
            this.Stage3 = false;
            this.timed.remove(false);
            currentScore = this.score + time;
            this.sndForestBackground.stop();
            this.scene.pause('fase2');
            this.checkPoint();
        }
        checkPoint(){
            this.scene.start('finalDaFase');
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