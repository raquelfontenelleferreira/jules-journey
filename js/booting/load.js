class LoadScene extends Phaser.Scene {
    preload(){
        this.load.image('sky', 'assets/sky.png')
        //this.load.image('ground', 'assets/chao-completo.png') 

        this.scene.start('teste');
    }

}