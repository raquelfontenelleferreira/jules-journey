class StoryMenu extends MainMenu {
    create(){
        this.storyScreen = this.add.image(this.game.renderer.width/2, this.game.renderer.height/2, 'blankMenu')
        this.storyScreen.setInteractive();

        this.storyScreen.on("pointerdown", () => {
            this.scene.start('fase1');
        })

        this.storyText = this.add.text(280, 50,  'Você é Jules, ', {fontFamily: 'Verdana', fontSize: 35, color: '#b00298'})
        this.storyText = this.add.text(220, 100,  'uma bióloga que sempre foi muito curiosa.', {fontFamily: 'Verdana', fontSize: 16, color: '#b00298'})
        
        this.storyText = this.add.text(180, 120,  'Depois de muitos estudos e pesquisas, ela descobre um ', {fontFamily: 'Verdana', fontSize: 16, color: '#b00298'})
        this.storyText = this.add.text(200, 150,  'planeta chamado Zeomyn, e decide explorá-lo de perto.', {fontFamily: 'Verdana', fontSize: 16, color: '#b00298'})

        this.storyText = this.add.text(160, 180,  'Colete as comidas e encontre os monstros locais ', {fontFamily: 'Verdana', fontSize: 20, color: '#b00298'})
        this.storyText = this.add.text(200, 210,  'para ajudar Jules a registrar mais sobre o planeta. ', {fontFamily: 'Verdana', fontSize: 16, color: '#b00298'})
        
        this.storyText = this.add.text(180, 240,  'Seja rápido e colete o máximo de itens possível.', {fontFamily: 'Verdana', fontSize: 20, color: '#b00298'})
        this.storyText = this.add.text(220, 270,  'Cuidado ao trombar com inimigos de frente!', {fontFamily: 'Verdana', fontSize: 16, color: '#b00298'})
        
        this.storyText = this.add.text(220, 350,  'Divirta-se e faça desta a sua jornada!', {fontFamily: 'Verdana', fontSize: 20, color: '#b00298'})
        
        /* this.storyText = this.add.text(220, 150,  'atual planeta que se encontra, Zeomyn.', {fontFamily: 'Verdana', fontSize: 16, color: '#b00298'})

        this.storyText = this.add.text(220, 210,  'Ajude Jules nessa jornada!', {fontFamily: 'Verdana', fontSize: 16, color: '#b00298'}) */

        /* this.storyText = this.add.text(
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
            {fontFamily: 'Verdana', fontSize: 20, color: '#b00298'}) */
    }
}