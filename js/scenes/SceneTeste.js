class SceneTeste extends Phaser.Scene {
    preload(){
        this.load.image('sky', 'assets/sky.png')
    }
    create() {
        sky = this.add.image(400, 300, 'sky')
        //ground = this.physics.add.staticGroup()
        //ground.create(0, 0, 'ground').setScale(2).refreshBody()
    }
}
var ground; 
var sky;