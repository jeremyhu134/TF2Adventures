
class SIXAM extends Phaser.Scene {
    constructor() {
		super({ key: 'SIXAM' })
	}
    preload(){
        this.load.audio('chime','audio/6AM.mp3');
    }
    create() {
        gameState.chime = this.sound.add('chime');
        gameState.chime.play();
		this.add.text( window.innerWidth/2-100,window.innerHeight/2-50, '6AM', {fill: '#FFFFFF', fontSize: '60px'});
        var sixtimer = this.time.addEvent({
            delay: 10000,
            callback: ()=>{
                this.scene.stop('SIXAM');
			    this.scene.start('MenuScene');
            },
            startAt: 0,
            timeScale: 1,
        });
	}
    update(){
        
    }
}

class gameOver extends Phaser.Scene {
    constructor() {
		super({ key: 'gameOver' })
	}
    preload(){
        this.load.audio('death','audio/death.mp3');
        this.load.image('gameover','fnafpicture/gameover.png');
    }
    create() {
        gameState.death = this.sound.add('death');
        gameState.death.play();
        this.add.image( 0,0, 'gameover').setOrigin(0,0);
        this.time.addEvent({
            delay: 10000,
            callback: ()=>{
                this.scene.stop('gameOver');
			    this.scene.start(`MenuScene`);
            },
            startAt: 0,
            timeScale: 1,
        });
	}
    update(){
        
    }
}