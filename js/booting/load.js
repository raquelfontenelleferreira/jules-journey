class LoadScene extends Phaser.Scene {
    preload(){
        //Imagens
        this.load.image('sky', 'assets/sky.png')
        this.load.image('ground', 'assets/plataforma-grama.png')
        this.load.image('ground2', 'assets/chao.png');
        this.load.image('iceCream', 'assets/iceCream.png')
        this.load.image('pudding', 'assets/pudding.png')
        this.load.image('taco', 'assets/taco.png')
        this.load.image('frenchFries', 'assets/frenchFries.png')
        this.load.image('pizza', 'assets/pizza.png')
        this.load.image('strawberryCake', 'assets/strawberryCake.png')
        this.load.image('checkpoint', 'assets/Checkpoint.png')
        
        //Spritesheets
        this.load.spritesheet('jules', 'assets/julessprite.png', {
            frameWidth: 32,
            frameHeight: 32
        })

        this.load.spritesheet('slime', 'assets/slimeIdle.png', {
            frameWidth: 44,
            frameHeight: 30
        })

        //Audios
        this.load.audio('forest', ['assets/sounds/foggy-forest.mp3'])
        this.load.audio('itemCollect', ['assets/sounds/itemCollect.mp3'])
        this.load.audio('slimeNoise', ['assets/sounds/slimeNoise.mp3'])

        //Menu Principal
        this.load.image('mainMenuScreen', 'assets/mainMenu.png')
        this.load.image('moreButton', 'assets/moreButton.png')
        this.load.image('playButton', 'assets/playButton.png')
        this.load.image('optionsButton', 'assets/optionsButton.png')
        this.load.audio('sndMenu', ['assets/sounds/Netherplace.mp3'])
        /* let loadingBar = this.add.graphics({
            fillStyle: {
                color: 0xffffff
            }
        })

        this.load.on("progress", (percent) => {
            loadingBar.fillRect(0, this.game.renderer.height/2, this.game.renderer.width * percent, 50);
            console.log(percent)
        }) */

        //Game Over
        this.load.image('gameOverScreen', 'assets/gameOverScreen.png')
        this.load.image('gameOverAsset', 'assets/gameOver.png')
        this.load.image('quitButton', 'assets/quitButton.png')
        this.load.audio('sndtrackGameOver', ['assets/sounds/Moonlight-Flying.mp3'])

        //Tutorial e História
        this.load.image('blankMenu', 'assets/blankMenu.png')

        //Tela Conclusão de Fase
        this.load.image('endForest', 'assets/faseCompleta.png')
        
    }
    create(){
        //this.scene.start('finalDaFase');
        this.scene.start('mainMenu');
        //this.scene.start('fase3');
        //this.scene.start('fase1');
        //this.scene.start('gameOver');
        //this.scene.start('scene');
    }

}