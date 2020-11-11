const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: "000000",
    physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 },
          enableBody: true,
        }
    },
  scene:[MenuScene,introNight,SIXAM,camera,Night1,gameOver],
    scale: {
        zoom: 0.95
    }
};

const game = new Phaser.Game(config);

let gameState = {               
    night: 1,
    ldoorOpen: true,
    rdoorOpen: true
}