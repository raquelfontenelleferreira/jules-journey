class StoryMenu extends MainMenu {
    create(){
        this.storyScreen = this.add.image(this.game.renderer.width/2, this.game.renderer.height/2, 'blankMenu')
        this.storyScreen.setInteractive();

        this.storyScreen.on("pointerdown", () => {
            this.scene.start('scene');
        })

        this.storyText = this.add.text(
            180, 
            100, 
            'Você é Jules, uma jovem bióloga que quer ',
            {fontFamily: 'Verdana', fontSize: 24, color: '#b00298'})
         this.storyText2 = this.add.text(
            100, 
            150, 
            ' conhecer mais sobre o atual planeta que se encontra, Zeomyn.',
            {fontFamily: 'Verdana', fontSize: 20, color: '#b00298'})
        this.storyText3 = this.add.text(
            200, 
            200, 
            'Aprenda sobre os monstros locais e ',
            {fontFamily: 'Verdana', fontSize: 20, color: '#b00298'})
        this.storyText4 = this.add.text(
            130, 
            250, 
            ' colete as comidas para ajudar Jules nessa jornada!',
            {fontFamily: 'Verdana', fontSize: 20, color: '#b00298'})
    }
}