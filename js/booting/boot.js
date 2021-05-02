class BootScene extends Phaser.Scene {
    create(){
        this.scene.add('boot', BootScene);
        this.scene.add('load', LoadScene);
        this.scene.add('teste', SceneTeste); 

        this.scene.start('load');
    }
}

var config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 800,
        height: 600
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 280 },
            debug: false
        }
    },
    scene: BootScene,
};

var game = new Phaser.Game(config);