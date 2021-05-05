class MainMenu extends Phaser.Scene {
    create() {
        this.sndMainMenu = this.sound.add('sndMenu')
        this.sndMainMenu.loop = true;
        this.sndMainMenu.play();

        this.playButton = this.add.image(this.game.renderer.width/2, this.game.renderer.height/2 + 200, 'playButton').setScale(0.8)
        this.optionButton = this.add.image(this.game.renderer.width/2, this.game.renderer.height/2 + 100, 'optionsButton').setScale(0.8)

        this.playButton.setInteractive();
        /*
            pointer events:
            - pointerover = hovering
            - pointer out = not hovering
            - pointerup = click and release
            - pointerdown = just click
        */
        this.playButton.on("pointerdown", () => {
            this.scene.start('scene');
            this.sndMainMenu.stop();
        })
    }
}