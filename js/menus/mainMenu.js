class MainMenu extends Phaser.Scene {
    create() {

        if(!localStorage.getItem('jules_highScore')){
			localStorage.setItem('jules_highScore', 0);
		}
		
		if(highscore > localStorage.getItem('jules_highScore')){
			localStorage.setItem('jules_highScore', highscore);
		} else {
			highscore = localStorage.getItem('jules_highScore');
        }

        this.mainMenuScreen = this.add.image(this.game.renderer.width/2, this.game.renderer.height/2, 'mainMenuScreen')
        this.sndMainMenu = this.sound.add('sndMenu')
        this.sndMainMenu.loop = true;
        this.sndMainMenu.play();

        this.playButton = this.add.image(this.game.renderer.width/2, this.game.renderer.height/2 + 200, 'playButton').setScale(0.65)
        this.optionButton = this.add.image(this.game.renderer.width/2 - 250, this.game.renderer.height/2 + 200, 'optionsButton').setScale(0.65)
        this.moreButton = this.add.image(this.game.renderer.width/2 + 250, this.game.renderer.height/2 + 200, 'moreButton').setScale(0.65)

        this.playButton.setInteractive();
        this.moreButton.setInteractive();
        /*
            pointer events:
            - pointerover = hovering
            - pointer out = not hovering
            - pointerup = click and release
            - pointerdown = just click
        */
        this.playButton.on("pointerdown", () => {
            this.scene.start('story');
            //this.scene.start('scene');
            this.sndMainMenu.stop();
        })

        this.moreButton.on("pointerdown", () => {
            this.scene.start('tutorial');
            this.sndMainMenu.stop();
        })

        //Highscore
        this.txtHighScore = this.add.text(this.game.renderer.width / 2, 430, 'HIGHSCORE: '+ highscore, 
        {fontFamily: 'Verdana', fontSize: 24, color: '#b00298'}).setOrigin(0.5);
        this.txtHighScore.setTintFill(0xf7f2ad, 0xf7f2ad, 0xbf40bf, 0xbf40bf);
    }
}

var time = 100;
var highscore = 0;
var currentScore = 0;