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

        
    }
    create(){
        this.scene.start('teste');
    }

}