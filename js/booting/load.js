class LoadScene extends Phaser.Scene {
    preload(){
        this.load.image('sky', 'assets/sky.png')
        this.load.image('ground', 'assets/chao-completo.png') 

        //this.load.image('jules', 'assets/julessprite.png')
        this.load.spritesheet('jules', 'assets/julessprite.png', {
            frameWidth: 32,
            frameHeight: 32
        })

    }
    create(){
        this.scene.start('teste');
    }

}