class introNight extends Phaser.Scene {
    constructor() {
		super({ key: 'introNight' })
	}
    preload(){
        this.load.audio('intro','audio/nightintro.mp3');
    }
    create() {
        gameState.intro = this.sound.add('intro');
        gameState.intro.play();
        this.add.text( window.innerWidth/2-200,window.innerHeight/2-50, `Night${gameState.night}`, {fill: '#FFFFFF', fontSize: '60px'});
        var introtimer = this.time.addEvent({
            delay: 3000,
            callback: ()=>{
                this.scene.stop('introNight');
			    this.scene.start(`Night${gameState.night}`);
            },
            startAt: 0,
            timeScale: 1,
        });
	}
    update(){
        
    }
}