class BootScene extends Phaser.Scene {
    create(){
        this.scene.add('boot', BootScene);
        this.scene.add('load', LoadScene);
        this.scene.add('scene', MainScene); 
        this.scene.add('mainMenu', MainMenu); 
        this.scene.add('tutorial', TutorialMenu); 
        this.scene.add('story', StoryMenu); 
        this.scene.add('fase1', Fase1); 
        this.scene.add('gameOver', GameOver); 

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