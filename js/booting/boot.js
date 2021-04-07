class BootScene extends Phaser.Scene {
    create(){
        this.scene.add('boot', BootScene);
        this.scene.add('load', LoadScene);
        this.scene.add('teste', SceneTeste); 
/*         this.sky = this.add.image(400, 300, 'sky')
        ground = this.physics.add.staticGroup()
        ground.create(0, 0, 'ground').setScale(2).refreshBody() */

        this.scene.start('load');
    }
}

var config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1024,
        height: 768
    },
/*     width: 800,
    height: 600, */ 
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: BootScene,
};

var game = new Phaser.Game(config);
/* var player;
var platforms;
var ground;  */