class CreditsMenu extends Phaser.Scene {
    create() {
        this.creditsScreen = this.add.image(this.game.renderer.width/2, this.game.renderer.height/2, 'blankMenu')

        this.sndMainMenu = this.sound.add('sndMenu')
        this.sndMainMenu.loop = false;
        this.sndMainMenu.play();

        this.creditMainText = this.add.text(200, 10, 'Créditos & Agradecimentos', {fontFamily: 'Verdana', fontSize: 30, color: '#b00298'})
        
        this.credittext = this.add.text(280, 50,  'Agradecimentos Especiais', {fontFamily: 'Verdana', fontSize: 20, color: '#b00298'})
        this.credittext = this.add.text(180, 80,  'Ao J.V.S e D.A.H, sem vocês eu não teria conseguido.', {fontFamily: 'Verdana', fontSize: 16, color: '#b00298'})

        this.credittext = this.add.text(160, 120,  'Desenvolvedora: ', {fontFamily: 'Verdana', fontSize: 20, color: '#b00298'})
        this.credittext = this.add.text(160, 150,  'Raquel Fontenelle Ferreira', {fontFamily: 'Verdana', fontSize: 16, color: '#b00298'})

        this.credittext = this.add.text(160, 180,  'Imagens: ', {fontFamily: 'Verdana', fontSize: 20, color: '#b00298'})
        this.credittext = this.add.text(160, 210,  'Raquel Fontenelle Ferreira', {fontFamily: 'Verdana', fontSize: 16, color: '#b00298'})

        this.credittext = this.add.text(160, 240,  'Áudio: ', {fontFamily: 'Verdana', fontSize: 20, color: '#b00298'})
        this.credittext = this.add.text(160, 270,  'PlayOnLoop.com', {fontFamily: 'Verdana', fontSize: 16, color: '#b00298'})
        this.credittext = this.add.text(160, 300,  'Licensed under Creative Commons by Attribution 4.0', {fontFamily: 'Verdana', fontSize: 16, color: '#b00298'})
        
        this.credittext = this.add.text(160, 330,  'Sprites: ', {fontFamily: 'Verdana', fontSize: 20, color: '#b00298'})
        this.credittext = this.add.text(160, 360,  'OpenGameArt', {fontFamily: 'Verdana', fontSize: 16, color: '#b00298'})
        this.credittext = this.add.text(160, 390,  'Elthen @ itch.io', {fontFamily: 'Verdana', fontSize: 16, color: '#b00298'})
        this.credittext = this.add.text(160, 420,  'ghostpixxells @ itch.io', {fontFamily: 'Verdana', fontSize: 16, color: '#b00298'})
        this.credittext = this.add.text(160, 450,  'pixelfrog @ itch.io', {fontFamily: 'Verdana', fontSize: 16, color: '#b00298'})
     
        
        this.quitButton = this.add.image(160, 550, 'quitButton').setScale(0.6)
        this.quitButton.setInteractive();
        this.quitButton.on("pointerdown", () => {
            this.scene.start('load');
            this.sndMainMenu.stop();
        })
    }
}