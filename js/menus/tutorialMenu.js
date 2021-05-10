class TutorialMenu extends MainMenu {
    create() {
        this.tutorialScreen = this.add.image(this.game.renderer.width/2, this.game.renderer.height/2, 'blankMenu')

        this.sndMainMenu = this.sound.add('sndMenu')
        this.sndMainMenu.loop = false;
        this.sndMainMenu.play();

        this.tutorialText = this.add.text(230, 100, 'Bem Vindo ao Tutorial!', {fontFamily: 'Verdana', fontSize: 35, color: '#b00298'})
        this.directionalKeys = this.add.text(
            150, 
            150, 
            'Use as setas direcionais para controlar a personagem,',
            {fontFamily: 'Verdana', fontSize: 20, color: '#b00298'})
        this.directionalKeys2 = this.add.text(
            200,
            170,
            'capturar os monstros e coletar as comidas!',
            {fontFamily: 'Verdana', fontSize: 20, color: '#b00298'})
        this.enemies = this.add.text(
            360, 
            200, 
            'Pontuação:',
            {fontFamily: 'Verdana', fontSize: 20, color: '#b00298'})
        this.score = this.add.text(
            230, 
            250,
            'Slimes - 30 | Morcego - 40 | Caveira - 50',
            {fontFamily: 'Verdana', fontSize: 20, color: '#b00298'})
        this.comida = this.add.text(
            360, 
            300,
            'Comidas - 50',
            {fontFamily: 'Verdana', fontSize: 20, color: '#b00298'})

        this.quitButton = this.add.image(660, 550, 'quitButton').setScale(0.6)
        this.quitButton.setInteractive();
        this.quitButton.on("pointerdown", () => {
            this.scene.start('load');
            this.sndMainMenu.stop();
        })
    }
}