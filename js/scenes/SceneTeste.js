class SceneTeste extends Phaser.Scene {
    create() {
        sky = this.add.image(this.game.renderer.width/2, this.game.renderer.height/2, 'sky')

        ground = this.physics.add.staticGroup()
        ground.create(this.game.renderer.width/2, this.game.renderer.height/2, 'ground')
        
        /* ground = this.add.tileSprite(0, 0, 0, 0, 'ground').setOrigin(1)
        this.physics.add.existing(ground) */

        jules = this.physics.add.sprite(200, 200, 'jules', 0)
        this.anims.create({
            key: 'walk',
            repeat: -1,
            frameRate: 6,
            frames: this.anims.generateFrameNames('jules', {start: 1, end: 5})
        })
        jules.play('walk');

        this.physics.add.collider(jules, ground)
        jules.setCollideWorldBounds(true)

    }
}
var ground; 
var sky;
var jules;