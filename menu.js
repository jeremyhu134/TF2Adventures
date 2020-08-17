class MenuScene extends Phaser.Scene {
    constructor() {
		super({ key: 'MenuScene' })
	}
    preload(){
        
    }
    create() {
        
	}
    update(){
        this.scene.stop('MenuScene');
        this.scene.start('IntroScene');
    }
}