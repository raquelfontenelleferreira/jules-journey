class FinalDaFase extends Phaser.Scene {
    create() {
        this.endPhase = this.add.image(this.game.renderer.width/2, this.game.renderer.height/2, 'endForest');
        this.endPhase.setInteractive();

        this.endPhase.on("pointerdown", () => {
            this.scene.start('mainMenu');
        })

        this.total = this.add.text(
            300,
            450,
            'Total: ' + currentScore,
            {fontFamily: 'Verdana', fontSize: 24, color: '#fff'}
        )

        //Lidando com o highscore
        if(currentScore > highscore){
            highscore = currentScore;
            this.recordText = this.add.text(this.game.renderer.width / 2, 475,'Novo Recorde! '+ currentScore + 'pts',
            {fontFamily: 'Verdana', fontSize: 24, color: '#b00298'}).setOrigin(0.5);
        }
    }
}