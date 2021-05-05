class GameOver extends Phaser.Scene {
    create(){
        this.sky = this.add.image(this.game.renderer.width/2, this.game.renderer.height/2, 'sky')

        this.optionButton = this.add.image(660, 550, 'optionsButton').setScale(0.6)

        this.gameOver = this.add.image(this.game.renderer.width/2, this.game.renderer.height/2 - 150, 'gameOverAsset').setScale(0.4)

        this.optionButton.setInteractive();
        this.optionButton.on("pointerdown", () => {
            this.scene.start('load');
            this.gameOverSoundtrack.stop();
        })

        this.gameOverSoundtrack = this.sound.add('sndtrackGameOver')
        this.gameOverSoundtrack.loop = true;
        this.gameOverSoundtrack.play();

        //this.gameOver = this.add.text((this.game.renderer.width)/2, (this.game.renderer.height)/2,  'Você morreu!');

        //this.scene.start('load');
    }
}