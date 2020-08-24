const config = {
    type: Phaser.AUTO,
    width : 800,
    height: 550,
    backgroundColor: "#000000",
    audio: {
        disableWebAudio: true
      },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1000 },
            enableBody: true
            //debug: true
        }
    },
    scene:[MenuScene,IntroScene,Mission2Scene,Mission3Scene,DandVScene],
    scale: {
        zoom: 1.3
    }
};

const game = new Phaser.Game(config);

let gameState = {
    missionnumber : 1,
    loadSave:()=>{
        if(typeof localStorage.missionnumber !== 'number'){
            gameState.missionnumber = 1;
        }
        gameState.missionnumber = localStorage.missionnumber;
    }
}
